const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para processar JSON e servir arquivos estáticos
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rota POST para o chatbot
app.post('/chatbot', (req, res) => {
    const userText = req.body.text;
    let botResponse = "Desculpe, não entendi o seu comando. Por favor, tente novamente.";

    // Lógica de chatbot simplificada (vamos detalhar depois)
    if (userText.includes("preço") || userText.includes("custo")) {
        botResponse = "O preço da nossa consultoria é de $5.000.";
    } else if (userText.includes("contato") || userText.includes("falar com")) {
        botResponse = "Você pode entrar em contato conosco pelo e-mail contato@xpto.com.";
    } else if (userText.includes("serviços") || userText.includes("oferecem")) {
        botResponse = "Oferecemos serviços de desenvolvimento de software e análise de dados.";
    }

    // Envia a resposta como JSON
    res.json({ response: botResponse });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});