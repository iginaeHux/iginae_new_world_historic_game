/**
 * ui.js - Handles all DOM updates and visual changes
 */

const UI = {
    // Updates the text inside the speech bubble
    setDialogue: function(text) {
        const bubble = document.getElementById('ai-bubble');
        if (bubble) {
            bubble.innerText = text;
        }
    },

    // Changes the character image based on expression
    setSprite: function(imagePath) {
        const sprite = document.getElementById('character-sprite');
        if (sprite) {
            sprite.src = imagePath;
        }
    },

    // Updates the era title in the header
    setEra: function(eraName) {
        const title = document.getElementById('era-title');
        if (title) {
            title.innerText = eraName;
        }
    },

    // Clears the text input field after sending
    clearInput: function() {
        const input = document.getElementById('user-input');
        if (input) {
            input.value = '';
        }
    }
};

// Exporting it globally so app.js can use it
window.UI = UI;
