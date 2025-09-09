# Assistente de Voz com Transcrição de Áudio
### Interface de Voz Inteligente para E-commerce

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Web Speech API](https://img.shields.io/badge/Web_Speech_API-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)

## 📋 Sobre o Projeto

O **Assistente de Voz XPTO** é uma simulação completa de assistente virtual voltado para **busca e filtragem** em e-commerce, utilizando **VUI (Voice User Interface)**. O sistema permite que usuários realizem pesquisas através de comandos de voz, facilitando o acesso a informações de forma **acessível e eficiente**.

## 👥 Integrantes

- <a href="https://www.linkedin.com/in/lucas-nunes-matheus/">Lucas Matheus Nunes</a>

### 🎯 Objetivo Principal
Desenvolver uma interface de voz que permita aos usuários:
- Buscar produtos por comandos naturais
- Aplicar filtros por categoria, preço e disponibilidade
- Receber feedback auditivo confirmando ações
- Navegar de forma intuitiva usando apenas a voz

## Vídeo Demonstração

### **Teste da Interface de Voz**

Para demonstrar o funcionamento prático da interface de voz, foi criado um vídeo de teste mostrando:

- **Interação com o microfone**: Ativação e estados visuais
- **Comandos de voz em ação**: Exemplos reais de uso
- **Feedback auditivo**: Confirmações e respostas do sistema
- **Navegação por voz**: Uso dos comandos de navegação
- **Fluxo completo**: Da ativação até a apresentação de resultados

**Vídeo de Demonstração:**

[![Demonstração da Interface de Voz XPTO](https://img.youtube.com/vi/w7d2MXyxYGA/maxresdefault.jpg)](https://youtu.be/w7d2MXyxYGA)

*Clique na imagem acima para assistir ao vídeo de demonstração da interface no YouTube*

**Ou acesse diretamente:**
- **YouTube**: [Interface de Voz XPTO - Demonstração](https://youtu.be/w7d2MXyxYGA)
- **ID do vídeo**: `w7d2MXyxYGA`

### **Aspectos Demonstrados no Vídeo**

1. **Ativação da Interface**: Como iniciar a interação por voz
2. **Comandos Básicos**: "Buscar produtos", "Filtrar por categoria", "Ajuda"
3. **Comandos de Navegação**: "Próximos resultados", "Nova busca", etc.
4. **Feedback Visual**: Mudanças de estado do microfone
5. **Feedback Auditivo**: Confirmações e repetições de filtros
6. **Tratamento de Erros**: Como o sistema responde a comandos não reconhecidos


## ✨ Funcionalidades

### 🛍️ **Sistema de Produtos Completo**
- **6 produtos** distribuídos em **3 categorias** (Eletrônicos, Roupas, Livros)
- **Controle de estoque** em tempo real
- **Sistema de promoções** com preços diferenciados
- **Formatação visual** rica com badges e indicadores

### 🎙️ **Comandos de Voz Suportados**
| Comando | Exemplo | Função |
|---------|---------|--------|
| **Listar Produtos** | *"listar todos os produtos"* | Exibe catálogo completo |
| **Verificar Estoque** | *"estoque do smartphone"* | Consulta disponibilidade específica |
| **Filtrar Categoria** | *"mostrar eletrônicos"* | Filtra por categoria |
| **Ver Promoções** | *"produtos em promoção"* | Lista apenas ofertas |
| **Saudações/Despedidas** | *"oi"*, *"obrigado"* | Interação natural |

### 🎨 **Interface Moderna**
- **Design Glassmorphism** com efeitos de blur
- **Gradientes dinâmicos** e animações suaves
- **Layout responsivo** para todos os dispositivos
- **Feedback visual** em tempo real
- **Cards interativos** para produtos

### 🔊 **Tecnologias de Voz**
- **Web Speech API** para reconhecimento de voz
- **Speech Synthesis API** para respostas faladas
- **Processamento em português brasileiro**
- **Feedback auditivo** confirma todas as ações

## 🚀 Como Usar

### 1. **Acesso Rápido**
```bash
# Clone o repositório
git clone https://github.com/lucas-nunes-matheus/speech-to-text-chatbot.git

# Garanta que você tenha o Node.js instalado
node --version

# Dentro da pasta do projeto, execute
node server.js

# E acesse o link que aparecer `localhost:3000`
```

### 2. **Comandos Básicos**
1. **Clique** no botão "Pressione e Fale" 
2. **Fale** um dos comandos suportados
3. **Escute** a resposta do assistente
4. **Visualize** os resultados na tela

### 3. **Exemplos Práticos**
- 🗣️ *"Listar todos os produtos"* → Mostra catálogo completo
- 🗣️ *"Estoque do notebook"* → Verifica disponibilidade
- 🗣️ *"Produtos em promoção"* → Lista ofertas ativas
- 🗣️ *"Mostrar roupas"* → Filtra por categoria

## 📊 Estrutura do Projeto

```
speech-to-text/
│
├── server.js          # Servidor e lógica de transcrição
├── README.md          # Documentação principal
├── docs/              # Documentação técnica
│   ├── documentacao.md  # Documentação técnica do wireframe 
│   └── img/
│       └── wireframe.png     # Wireframe da VUI
└── public/
    └── index.html     # Interface principal
```

## 📋 Documentação e Recursos

- **[Wireframe da Interface de Voz](docs/documentacao.md)** - Design detalhado da VUI (Voice User Interface)
- **[Vídeo Demonstração](https://youtu.be/w7d2MXyxYGA)** - Funcionamento prático da interface de voz

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Styling avançado com Flexbox/Grid
- **JavaScript ES6+** - Lógica de negócio e APIs
- **Web Speech API** - Reconhecimento e síntese de voz
- **Responsive Design** - Compatibilidade multi-dispositivo

## 🎯 Casos de Uso com projeto aprimorado

### 👥 **Para Desenvolvedores**
- Referência para implementação de VUI
- Base para sistemas de e-commerce com voz
- Exemplo de integração Web Speech API

### 🏢 **Para Empresas**
- Melhoria da acessibilidade digital
- Diferencial competitivo em UX
- Redução de barreiras de navegação

### ♿ **Para Acessibilidade**
- Navegação por voz para deficientes visuais
- Interface hands-free
- Experiência inclusiva

## 🔮 Próximos Passos

- [ ] Integração com API de produtos real
- [ ] Suporte a múltiplos idiomas
- [ ] IA para reconhecimento de intenção
- [ ] Dashboard de analytics
- [ ] Modo offline com cache

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ para demonstrar o poder das **Voice User Interfaces** no e-commerce moderno.

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela!**
