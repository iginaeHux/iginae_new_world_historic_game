let currentCharacter = null;
let sceneData = null;

// Initialize Game
async function init() {
    const response = await fetch('data/scenes.json');
    sceneData = await response.json();
    
    // Load Spartan as default for now
    loadCharacter('spartan');
}

function loadCharacter(id) {
    currentCharacter = sceneData.characters[id];
    document.getElementById('era-title').innerText = currentCharacter.era;
    updateCharacterUI('neutral', `I am ${currentCharacter.name}. Speak clearly.`);
}

async function handleSendMessage() {
    const inputField = document.getElementById('user-input');
    const message = inputField.value.trim();
    
    if (!message) return;

    inputField.value = '';
    updateDialogue("..."); // Loading state

    const aiResponse = await fetchAIResponse(message, currentCharacter);
    updateDialogue(aiResponse);
    
    // Logic for expression changes could go here based on keywords
}

function updateDialogue(text) {
    document.getElementById('ai-bubble').innerText = text;
}

function updateCharacterUI(expression, message) {
    const img = document.getElementById('character-sprite');
    img.src = currentCharacter.assets[expression];
    if (message) updateDialogue(message);
}

// Event Listeners
document.getElementById('send-btn').addEventListener('click', handleSendMessage);
document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSendMessage();
});

window.onload = init;
