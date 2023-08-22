const resultField = document.querySelector('#resultField');
const numberOne = document.querySelector('#numberOne');
const numberTwo = document.querySelector('#numberTwo');
const numberThree = document.querySelector('#numberThree');
const numberFour = document.querySelector('#numberFour');
const numberFive = document.querySelector('#numberFive');
const numberSize = document.querySelector('#numberSize');
const numberSeven = document.querySelector('#numberSeven');
const numberEight = document.querySelector('#numberEight');
const numberNine = document.querySelector('#numberNine');
const numberZero = document.querySelector('#numberZero');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const dot = document.querySelector('#dot');
const backspace = document.querySelector('#backspace');
const percent = document.querySelector('#percent');
const squareRoot = document.querySelector('#squareRoot');

numberOne.addEventListener('click', () => {
    let numberOneValue = numberOne.textContent;
    console.log("numberOneValue:", numberOneValue); // Add this line
    resultField.textContent = numberOneValue;
});
numberTwo.addEventListener('click', () => {
    let numberTwoValue = numberTwo.textContent;
    console.log("numberOneValue:", numberTwoValue); // Add this line
    resultField.textContent = numberTwoValue;
});
numberThree.addEventListener('click', () => {
    let numberThreeValue = numberThree.textContent;
    console.log("numberOneValue:", numberThreeValue); // Add this line
    resultField.textContent = numberThreeValue;
});
numberFour.addEventListener('click', () => {
    let numberFourValue = numberFour.textContent;
    console.log("numberOneValue:", numberFourValue); // Add this line
    resultField.textContent = numberFourValue;
});
numberFive.addEventListener('click', () => {
    let numberFiveValue = numberFive.textContent;
    console.log("numberOneValue:", numberFiveValue); // Add this line
    resultField.textContent = numberFiveValue;
});
numberSix.addEventListener('click', () => {
    let numberSixValue = numberSix.textContent;
    console.log("numberOneValue:", numberSixValue); // Add this line
    resultField.textContent = numberSixValue;
});
numberSeven.addEventListener('click', () => {
    let numberSevenValue = numberSeven.textContent;
    console.log("numberOneValue:", numberSevenValue); // Add this line
    resultField.textContent = numberSevenValue;
});
numberEight.addEventListener('click', () => {
    let numberEightValue = numberEight.textContent;
    console.log("numberOneValue:", numberEightValue); // Add this line
    resultField.textContent = numberEightValue;
});
numberNine.addEventListener('click', () => {
    let numberNineValue = numberNine.textContent;
    console.log("numberOneValue:", numberNineValue); // Add this line
    resultField.textContent = numberNineValue;
});
numberZero.addEventListener('click', () => {
    let numberZeroValue = numberZero.textContent;
    console.log("numberOneValue:", numberZeroValue); // Add this line
    resultField.textContent = numberZeroValue;
});

plus.addEventListener('click', () => {
    let plusValue = plus.textContent;
    console.log("plusValue:", plusValue); // Add this line
    resultField.textContent = plusValue;
}
);
minus.addEventListener('click', () => {
    let minusValue = minus.textContent;
    console.log("minusValue:", minusValue); // Add this line
    resultField.textContent = minusValue;
}
);
multiply.addEventListener('click', () => {
    let multiplyValue = multiply.textContent;
    console.log("multiplyValue:", multiplyValue); // Add this line
    resultField.textContent = multiplyValue;
}
);
divide.addEventListener('click', () => {
    let divideValue = divide.textContent;
    console.log("divideValue:", divideValue); // Add this line
    resultField.textContent = divideValue;
}
);
equal.addEventListener('click', () => {
    let equalValue = equal.textContent;
    console.log("equalValue:", equalValue); // Add this line
    resultField.textContent = equalValue;
}
);
clear.addEventListener('click', () => {
    let clearValue = clear.textContent;
    console.log("clearValue:", clearValue); // Add this line
    resultField.textContent = " ";
}
);
dot.addEventListener('click', () => {
    let dotValue = dot.textContent;
    console.log("dotValue:", dotValue); // Add this line
    resultField.textContent = dotValue;
}
);
