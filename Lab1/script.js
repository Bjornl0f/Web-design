// Get elements by various methods
const header = document.getElementsByTagName('header')[0];
const drinkButtons = document.getElementsByClassName('order-button');
const snackButtons = document.querySelectorAll('.menu-category')[1].getElementsByClassName('order-button');

// Event listeners
header.addEventListener('mouseover', function () {
    this.style.backgroundColor = '#555';
});

for (const button of drinkButtons) {
    button.addEventListener('click', function () {
        alert('You ordered ' + this.parentElement.querySelector('h3').textContent);
    });
}

for (const button of snackButtons) {
    button.addEventListener('click', function () {
        alert('You ordered ' + this.parentElement.querySelector('h3').textContent);
    });
}
