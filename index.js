// Your code here
// Assuming you have a dodger element in your HTML
const dodger = document.getElementById('dodger'); // Replace with your dodger's ID

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    // Check if the new position is within the bounds of the game field
    if (left < 360) { // Assuming the game field is 400px wide and dodger is 40px wide
        dodger.style.left = `${left + 1}px`;
    }
}

// Add event listener for keydown events
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
        moveDodgerRight();
    }
});