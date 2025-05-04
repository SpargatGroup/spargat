# Chat Application with Ollama Integration

This is a modern chat application built with React, TypeScript, and Vite that integrates with [Ollama](https://ollama.com/) to provide AI-powered chat capabilities using local language models.

## Features

- 💬 Real-time AI chat powered by Ollama
- 🏠 Local AI processing - no data sent to external APIs
- 🧠 Uses Gemma 7B by default (configurable to other models)
- 💾 Save and load conversations with unique generated codes
- 🌙 Dark mode UI with responsive design
- 🖥️ Code syntax highlighting and execution
- 📱 Mobile-friendly interface

## Prerequisites

- Node.js 16+
- Ollama installed on your system (see installation instructions below)

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up Ollama:

```bash
npm run setup:ollama
```

This script will check if Ollama is installed on your system and guide you through the installation process if it's not.

4. Download the required Ollama model:

```bash
ollama pull gemma:7b
```

## Getting Started

1. Start Ollama:

```bash
npm run start:ollama
```

2. In a new terminal, start the application:

```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually http://localhost:5173)

## Using with Ollama

The application is configured to communicate with Ollama running on `http://localhost:11434`. You can:

- Check Ollama status: `npm run check:ollama`
- Start Ollama: `npm run start:ollama`
- Use different models by changing the `DEFAULT_MODEL` value in `src/services/ai.ts`

For more detailed information on using Ollama with this application, see [OLLAMA.md](./OLLAMA.md).

## Chat Features

- **Save chats**: Generate a unique 6-character code to save your current conversation
- **Load chats**: Restore a previous conversation using its code
- **Clear chat**: Start a fresh conversation
- **Code highlighting**: Syntax highlighting for code blocks
- **Conversation context**: AI responses consider previous messages for better context

## Project Structure

- `src/components/` - React components
- `src/context/` - React context providers
- `src/pages/` - Page components
- `src/services/` - Service logic including Ollama API
- `src/utils/` - Utility functions
- `scripts/` - Ollama setup and management scripts

## Development

- Build for production: `npm run build`
- Preview production build: `npm run preview`
- Lint code: `npm run lint`

## License

MIT

## Acknowledgements

- [Ollama](https://ollama.com/) for providing the local AI model infrastructure
- [Gemma](https://gemmachat.ai/) for the open language model
- [React](https://reactjs.org/) and [Vite](https://vitejs.dev/) for the development framework
- [Tailwind CSS](https://tailwindcss.com/) for styling 