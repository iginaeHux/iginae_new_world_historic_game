function showView(viewId) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
}

// Basic Send Function for Testing
document.getElementById('send-btn').addEventListener('click', () => {
    const input = document.getElementById('user-input');
    if (!input.value) return;
    
    const flow = document.getElementById('chat-flow');
    flow.innerHTML += `<div style="margin:10px; text-align:right;"><b>Mentor:</b> ${input.value}</div>`;
    input.value = '';
    
    // Simulate Spartan response
    setTimeout(() => {
        flow.innerHTML += `<div style="margin:10px; color:#67cecb;"><b>Kallistos:</b> I do not understand this 'mentorship'. My steel is my guide.</div>`;
        flow.scrollTop = flow.scrollHeight;
    }, 1000);
});
