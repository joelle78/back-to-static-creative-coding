// Function to play a sound and rotate the card continuously for 9 seconds
function playClickSound() {
    var audio = new Audio('assets/yodeling.mp3');
    audio.play();

    var card = document.querySelector('.card');
    var rotationInterval;
    var rotationDuration = 9000; // 9 seconds

    // Start continuous rotation
    rotationInterval = setInterval(function() {
        card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    }, 1500); // Rotate every 1 second

    // Stop continuous rotation after 9 seconds
    setTimeout(function() {
        clearInterval(rotationInterval);
    }, rotationDuration);
}

// Add a click event listener to the first list item
var firstListItem = document.getElementById('playSound');
firstListItem.addEventListener('click', playClickSound);







