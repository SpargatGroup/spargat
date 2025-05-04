# Using Ollama with this Chat Application

## What is Ollama?

Ollama is a tool that allows you to run large language models (LLMs) locally on your machine. This chat application is designed to work with Ollama to provide AI chat capabilities without requiring an internet connection or API keys.

## Setup Instructions

### 1. Install Ollama

**Windows:**
- Download from [https://ollama.com/download/windows](https://ollama.com/download/windows)
- Run the installer and follow the instructions

**macOS:**
- Download from [https://ollama.com/download/mac](https://ollama.com/download/mac)
- Open the .dmg file and drag Ollama to your Applications folder

**Linux:**
- Run `curl -fsSL https://ollama.com/install.sh | sh`

### 2. Download the Required Model

After installing Ollama, open a terminal or command prompt and run:

```
ollama pull gemma:7b
```

This will download the Gemma 7B model which is about 4.8GB in size.

### 3. Start Ollama

Run the following command from the project directory:

```
npm run start:ollama
```

### 4. Start the Chat Application

In a new terminal, run:

```
npm run dev
```

## Using Different Models

This application is configured to use the Gemma 7B model by default. If you want to use a different model:

1. Download the model with `ollama pull model-name` (e.g., `ollama pull llama3:8b`)
2. Modify the `DEFAULT_MODEL` variable in `src/services/ai.ts` to match your chosen model

## Troubleshooting

- **Ollama not found**: Make sure Ollama is installed and in your system PATH
- **Connection error**: Ensure Ollama is running (`npm run start:ollama`)
- **Model not found**: Make sure you've downloaded the model with `ollama pull gemma:7b`
- **Slow responses**: Larger models require more computational resources. Try a smaller model like `gemma:2b`

## Additional Resources

- Ollama documentation: [https://ollama.com/docs](https://ollama.com/docs)
- Available models: [https://ollama.com/library](https://ollama.com/library)
