counter = document.querySelector('#counter');
incrementButton = document.querySelector('#increment');
decrementButton = document.querySelector('#decrement');
resetButton = document.querySelector('#reset');

let count = 0;

function randomColorGenerator() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = newColor;
}

incrementButton.addEventListener('click', () => {
    count++;
    counter.innerHTML = count;
    randomColorGenerator();

})

resetButton.addEventListener('click', () => {
    count = 0;
    counter.innerHTML = count;
    document.body.style.backgroundColor = 'white';
})