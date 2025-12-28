const KallistosMissions = [
    {
        id: 1,
        title: "The Static",
        objective: "Teach Kallistos to pause before acting.",
        trigger: "Kallistos is pacing. 'This room hums! I will smash the lights to find silence.'",
        keywords: ["breathe", "pause", "wait", "slow down", "count"],
        successResponse: "My breath is... heavy. But the wall remains unbroken. What is this 'calm' you speak of?",
        badge: "Stone Heart"
    },
    {
        id: 2,
        title: "The Hallway Incident",
        objective: "Perspective-taking: Why is the student afraid?",
        trigger: "Kallistos is confused. 'I moved a boy aside. Now he avoids my gaze. Is he a coward?'",
        keywords: ["scared", "impact", "fear", "big", "push", "accident"],
        successResponse: "I did not mean to strike fear. In Sparta, we move with purpose. I see now... my strength can be a shadow.",
        badge: "Clear Lens"
    }
    // ... and so on for all 5 missions
];

let currentMissionIndex = 0;

function checkProgress(userInput) {
    const mission = KallistosMissions[currentMissionIndex];
    const input = userInput.toLowerCase();
    
    // Check if user used a 'Therapy Keyword'
    const success = mission.keywords.some(word => input.includes(word));
    
    if (success) {
        advanceMission();
    } else {
        // Kallistos stays confused/angry
        return "I do not understand your modern riddles. The problem remains!";
    }
}
