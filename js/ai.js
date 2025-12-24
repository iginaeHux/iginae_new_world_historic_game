const USE_MOCK_AI = true; // Set to false when connecting real API

async function fetchAIResponse(userInput, characterData) {
    if (USE_MOCK_AI) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`[MOCK] ${characterData.name} thinks your words are interesting, but lacks a real API connection.`);
            }, 800);
        });
    }

    try {
        const response = await fetch('YOUR_PROXY_OR_API_ENDPOINT', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                systemPrompt: characterData.systemPrompt,
                message: userInput
            })
        });
        const data = await response.json();
        return data.choices[0].message.content; 
    } catch (error) {
        console.error("AI Fetch Error:", error);
        return "I am having trouble focusing on our timeline. Try again.";
    }
}
