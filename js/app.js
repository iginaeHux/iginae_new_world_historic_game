const sprite = document.getElementById('character-sprite');
const chatFlow = document.getElementById('chat-flow');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function appendMessage(role, text) {
    const div = document.createElement('div');
    div.className = `message ${role}`;
    div.innerText = text;
    chatFlow.appendChild(div);
    chatFlow.scrollTop = chatFlow.scrollHeight;
}

async function handleSend() {
    const message = userInput.value.trim();
    if (!message) return;

    appendMessage('user', message);
    userInput.value = '';

    // Simulate Kallistos reacting
    // In a full build, this would come from your AI logic
    if (message.toLowerCase().includes("calm") || message.toLowerCase().includes("breath")) {
        sprite.src = 'assets/smile slide small one.jpg';
        setTimeout(() => appendMessage('ai', "Kallistos: The air in my chest is... different. I am listening."), 500);
    } else {
        sprite.src = 'assets/spartan_neutral_face.gif';
        setTimeout(() => appendMessage('ai', "Kallistos: Your words are strange. Speak with more steel."), 500);
    }
}

sendBtn.addEventListener('click', handleSend);
userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSend(); });
