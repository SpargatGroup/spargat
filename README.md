# Spargat AI Chat 🚀

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-blue?style=for-the-badge&logo=github)](https://spargatgroup.github.io/spargat/)
[![Open Beta](https://img.shields.io/badge/Status-Open%20Beta-purple?style=for-the-badge)](https://spargatgroup.github.io/spargat/)

An AI-powered chat application built with React and Google's Gemini 1.5 Flash model. Featuring real-time code execution, reflection capabilities, and an interactive code chalkboard.

![Spargat AI Demo](https://i.ibb.co/VJy5Psn/spargat-demo.png)

## ✨ Demo Features

### 💬 Interactive Chat with Reflection
Get detailed AI responses with visible thinking processes:

```
User: Explain how React hooks work

AI: [Enhanced with reflection]
React hooks are functions that let you "hook into" React state and lifecycle features...
```

### 🖥️ Code Execution with Chalkboard
Execute code directly in the chat or send to interactive editor:

![Code Chalkboard Demo](https://i.ibb.co/S74dC15/code-chalkboard.png)

```javascript
// -execute
const calculateFibonacci = (n) => {
  const sequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i-1] + sequence[i-2];
  }
  return sequence[n];
}

console.log(calculateFibonacci(10)); // 55
```

### 🧠 Auto-Detection Directives
Use simple directives to trigger actions:
- `-execute` - Run code automatically
- `-chalkboard` - Send to code editor
- `// execute` or `// chalkboard` - Alternative syntax

### 🔎 Web Search Integration
Integrated Google search for up-to-date information.

## 🚀 Quick Start

### Try it live
Visit the [live demo](https://spargatgroup.github.io/spargat/)

### Run locally
```bash
# Clone the repository
git clone https://github.com/SpargatGroup/spargat.git

# Install dependencies
cd spargat
npm install

# Add environment variables (.env)
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_GOOGLE_CSE_ID=your_google_cse_id

# Start development server
npm run dev
```

## ⚠️ Beta Status
This is an open beta release. Always verify code responses before using in production.

## 📱 Responsive Design
Fully optimized for both desktop and mobile devices.

## 📜 License
MIT 
