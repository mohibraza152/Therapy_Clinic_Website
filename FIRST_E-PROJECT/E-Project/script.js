import { createChat } from "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";

  createChat({
    webhookUrl: "https://mohibraza1156.app.n8n.cloud/webhook/35f398a6-16fa-4183-a8ff-3f1643fa08d0/chat",
    target: "#n8n-chat",

    showWelcomeScreen: true,
    loadPreviousSession: true,
    enableStreaming: false,

    initialMessages: [
      "Hi 👋 I’m your AI assistant. How can I help you?"
    ]
  });