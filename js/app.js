// Save the last page visited
if (window.location.pathname.includes('kallistos.html')) {
    localStorage.setItem('lastPage', 'kallistos.html');
}

// When the user hits the landing page, we can ask to "Resume"
function resumeGame() {
    const lastPage = localStorage.getItem('lastPage');
    if (lastPage) window.location.href = lastPage;
}

// Basic Chat Logic for Kallistos
const sendBtn = document.getElementById('send-btn');
if (sendBtn) {
    sendBtn.addEventListener('click', () => {
        const input = document.getElementById('user-input');
        const flow = document.getElementById('chat-flow');
        if (!input.value) return;

        flow.innerHTML += `<div class="msg-user">${input.value}</div>`;
        input.value = '';
        
        setTimeout(() => {
            flow.innerHTML += `<div class="msg-ai">Kallistos: Your modern tongue confuses me. Speak of the mission.</div>`;
            flow.scrollTop = flow.scrollHeight;
        }, 1000);
    });
}
