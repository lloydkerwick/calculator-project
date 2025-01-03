const buttons = document.querySelectorAll('.js-button');

const display = document.querySelector('.js-display');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        display.value += value;
    });
});

document.querySelector('.js-clear').addEventListener('click', () => {
    display.value = ''
})

document.querySelector('.js-button-calculate').addEventListener('click', () => {
try {
    display.value = eval(display.value)
} catch (error) {
    display.value = "Error"
}  
});

