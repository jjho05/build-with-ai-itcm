require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de Gemini con Instrucciones de Sistema
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ 
    model: process.env.GEMINI_MODEL || "gemini-3-flash-preview",
    systemInstruction: "Eres un asistente para el evento 'Build with AI' en el ITCM. Tus respuestas deben ser equilibradas: informativas pero breves (evita explicaciones innecesariamente largas). Usa un tono profesional y amable. Mantén el formato Markdown limpio."
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * AIRequestHandler Class (OOP)
 */
class AIRequestHandler {
    constructor(payload) {
        this.userName = payload.name;
        this.userEmail = payload.email;
        this.projectTitle = payload.title;
        this.rawProposal = payload.proposal;
        this.sanitizedProposal = "";
        this.wordCount = 0;
        this.timestamp = new Date().toISOString();
    }

    sanitize() {
        const cleanText = this.rawProposal
            .replace(/<[^>]*>?/gm, '')
            .replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s\.,!?]/g, '')
            .trim();
        this.sanitizedProposal = cleanText;
        return this;
    }

    calculateWordCount() {
        const words = this.sanitizedProposal.split(/\s+/).filter(w => w.length > 0);
        this.wordCount = words.length;
        return this.wordCount;
    }

    isValid() {
        return this.wordCount >= 10;
    }

    getData() {
        return {
            author: this.userName,
            email: this.userEmail,
            title: this.projectTitle,
            proposal: this.sanitizedProposal,
            metadata: {
                words: this.wordCount,
                processedAt: this.timestamp,
                status: "Ready for Gemini"
            }
        };
    }
}

/**
 * Endpoint: Submit Proposal
 */
app.post('/api/submit', async (req, res) => {
    try {
        const { name, email, title, proposal } = req.body;
        const handler = new AIRequestHandler({ name, email, title, proposal });
        handler.sanitize();
        const count = handler.calculateWordCount();

        if (!handler.isValid()) {
            return res.status(400).json({
                error: `La propuesta es demasiado corta (${count} palabras). Mínimo 10 palabras.`
            });
        }
        console.log(`[PROPOSAL RECEIVED] From: ${handler.userEmail} - Title: ${handler.projectTitle}`);

        // --- GOOGLE SHEETS INTEGRATION ---
        const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
        if (webhookUrl) {
            try {
                await fetch(webhookUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: handler.userName,
                        email: handler.userEmail,
                        title: handler.projectTitle,
                        proposal: handler.sanitizedProposal
                    })
                });
                console.log("✅ Data sent to Google Sheets");
            } catch (sheetError) {
                console.error("❌ Error sending to Google Sheets:", sheetError.message);
            }
        }

        res.json({ 
            message: `¡Gracias ${handler.userName}! Tu propuesta '${handler.projectTitle}' ha sido recibida. El comité del Instituto Tecnológico de Ciudad Madero la revisará pronto.`,
            status: "Success"
        });

    } catch (err) {
        res.status(500).json({ error: "Error interno al procesar la propuesta." });
    }
});

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: "API Key de Gemini no configurada en el servidor." });
    }

    try {
        const result = await model.generateContent(message);
        const response = await result.response;
        const text = response.text();
        res.json({ reply: text });
    } catch (error) {
        console.error("Gemini Error:", error);
        res.status(500).json({ error: "Error al procesar la respuesta de IA." });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
