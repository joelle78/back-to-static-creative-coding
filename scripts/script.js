function playClickSound() {
    const audio = new Audio('assets/yodeling.mp3');
    audio.play();

    let card = document.querySelector('.card');
    let rotationInterval;
    const rotationDuration = 9000;

    // Start rotation
    rotationInterval = setInterval(function() {
        card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    }, 1500);

    // Stopt rotation after 9 seconds
    setTimeout(function() {
        clearInterval(rotationInterval);
    }, rotationDuration);
}

const firstListItem = document.getElementById('playSound');
firstListItem.addEventListener('click', playClickSound);

// HAMBURGER MENU
document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('ul').classList.toggle('show');
});








