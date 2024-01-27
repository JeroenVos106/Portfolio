let clickCount = 0;

function handleButtonClick() {
    // increment click count
    clickCount++;

    // Display "Hello" in the output section
    document.getElementById("output").innerText = "Hello";

    // Create emoji rain
    createEmojiRain();

    // check for click count 50
    if (clickCount >= 50) {
        displayStopSign();
    }
}

function createEmojiRain() {
    const emojiContainer = document.createElement("div");
    emojiContainer.classList.add("emoji-rain-container");

    for (let i = 0; i < 10; i++) {
        const emoji = document.createElement("span");
        emoji.classList.add("emoji-rain");
        emoji.innerHTML = "😁";
        emoji.style.fontSize = `${Math.random() * 2 + 1}em`;
        emoji.style.left = `${Math.random() * 100}vw`;
        emojiContainer.appendChild(emoji);
    }

    document.body.appendChild(emojiContainer);

    setTimeout(() => {
        document.body.removeChild(emojiContainer);
    }, 2000);
}

function displayStopSign() {
// Replace the content with a big red "STOP" sign
document.body.innerHTML = '<div style="font-size: 5em; color: red; text-align: center; padding-top: 50vh;">STAHP🙅🏼‍♂️</div>';
}

function toggleSection(button) {
    const section = button.parentNode;
    const content = section.querySelector(".content");

    content.style.display = content.style.display === "block" ? "none" : "block";
}
// Get the logo element
const logo = document.getElementById('logo');

// Add click event listener to the logo
logo.addEventListener('click', function() {
    // Check if the logo is already expanded
    if (logo.classList.contains('expanded')) {
        // If expanded, shrink the logo back to its original size
        logo.style.width = '50px';
        logo.style.height = '50px';
        logo.classList.remove('expanded');
    } else {
        // If not expanded, increase the size of the logo
        logo.style.width = '1000px';
        logo.style.height = '1000px';
        logo.classList.add('expanded');
    }
});