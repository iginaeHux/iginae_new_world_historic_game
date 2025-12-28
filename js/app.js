const missions = [
    {
        title: "MISSION 1: THE STATIC",
        objective: "Objective: Teach Kallistos to pause before acting.",
        hint: "He is dysregulated. Suggest he pauses or breathes.",
        keywords: ["breathe", "pause", "wait", "calm", "stop"],
        success: "Kallistos: 'My breath is... heavy. But the wall remains unbroken. I am listening.'",
        nextPrompt: "Kallistos: 'I moved a boy aside so I could walk. Now he avoids my gaze as if I were a plague. Is he a coward?'"
    },
    {
        title: "MISSION 2: THE PUSH",
        objective: "Objective: Help him understand impact vs intent.",
        hint: "Explain that he scared the student (Perspective-taking).",
        keywords: ["scared", "fear", "frightened", "impact", "accident"],
        success: "Kallistos: 'I did not mean to strike fear. I see now... my strength can be a shadow.'",
        nextPrompt: "Kallistos: 'The teacher-scribe asked me to meet. I did not go, for I was training. Why does he look at me with disappointment? I am here now!'"
    },
    {
        title: "MISSION 3: THE BROKEN WORD",
        objective: "Objective: Accountability without shame.",
        hint: "Explain that his absence affected others' time.",
        keywords: ["promise", "time", "wait", "accountable", "responsibility"],
        success: "Kallistos: 'I took their time away? A warrior's word must be a shield, not a sieve. I have failed the protocol.'",
        nextPrompt: "Kallistos: 'You say I must "repair" with this boy I pushed. I will shout "SORRY" as I pass him. Is this enough?'"
    },
    {
        title: "MISSION 4: THE REPAIR",
        objective: "Objective: Build a 3-part apology.",
        hint: "He needs to say what he did, the impact, and the change.",
        keywords: ["sorry", "impact", "next time", "change", "will not"],
        success: "Kallistos: 'I am sorry for the push. I saw your fear. Next time, I will wait for the path to clear. This... feels like true strength.'",
        nextPrompt: "Kallistos: 'A student mocked my hair! My blood burns! Should I show him the discipline of Sparta?'"
    },
    {
        title: "MISSION 5: THE FINAL TEST",
        objective: "Objective: Regulation in conflict.",
        hint: "Remind him that strong feelings don't mean he has permission to act.",
        keywords: ["ignore", "walk away", "calm", "breathe", "choice"],
        success: "Kallistos: 'The burning remains, but I choose the walk. I am no longer a slave to my heat. Am I... certified?'",
        nextPrompt: "CONGRATULATIONS. KALLISTOS HAS ACHIEVED SOCIAL COMPETENCE."
    }
];

let currentLevel = 0;

document.getElementById('send-btn').addEventListener('click', function() {
    const inputField = document.getElementById('user-input');
    const chatFlow = document.getElementById('chat-flow');
    const userInput = inputField.value.toLowerCase();
    
    if (userInput.trim() === "") return;

    // Show User Message
    chatFlow.innerHTML += `<div style="align-self: flex-end; background: #fbceb1; color: #000; padding: 10px; border-radius: 10px; max-width: 80%;">${inputField.value}</div>`;
    
    const mission = missions[currentLevel];
    const isSuccess = mission.keywords.some(word => userInput.includes(word));

    setTimeout(() => {
        if (isSuccess) {
            chatFlow.innerHTML += `<div style="align-self: flex-start; background: #fff; color: #000; padding: 10px; border-radius: 10px; max-width: 80%; border-left: 5px solid #67cecb;">${mission.success}</div>`;
            document.getElementById(`badge-${currentLevel + 1}`).style.opacity = "1";
            document.getElementById(`badge-${currentLevel + 1}`).style.filter = "grayscale(0)";
            
            currentLevel++;
            
            if (currentLevel < missions.length) {
                setTimeout(() => {
                    document.getElementById('mission-title').innerText = missions[currentLevel].title;
                    document.getElementById('mission-objective').innerText = missions[currentLevel].objective;
                    document.getElementById('mission-hint').innerText = missions[currentLevel].hint;
                    chatFlow.innerHTML += `<div style="align-self: flex-start; background: #eee; color: #000; padding: 10px; border-radius: 10px; max-underline: 80%; margin-top: 10px;"><b>NEW TASK:</b><br>${missions[currentLevel].nextPrompt}</div>`;
                }, 1500);
            }
        } else {
            chatFlow.innerHTML += `<div style="align-self: flex-start; background: #fff; color: #000; padding: 10px; border-radius: 10px; max-width: 80%; border-left: 5px solid #ff4b4b;">Kallistos: 'That means nothing to me! My anger is a storm!' (Hint: ${mission.hint})</div>`;
        }
        chatFlow.scrollTop = chatFlow.scrollHeight;
    }, 1000);

    inputField.value = "";
});
