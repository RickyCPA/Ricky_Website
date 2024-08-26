let currentValue = '';
let previousValue = '';
let currentOperator = null;

function updateTotal(){
  event.preventDefault();
  document.getElementById('total').textContent = currentValue || '0';
}

function handleNumber(num){
  event.preventDefault();
  if (currentValue.length < 20){
    currentValue = currentValue + num;
    updateTotal();
  }
}

function handleOperator(operator){
  event.preventDefault();
  if (currentValue !== '') {
    if (previousValue !== '') {
        calculate();
    }
    previousValue = currentValue;
    currentValue = '';
    currentOperator = operator;
}
}

function calculate(){
  event.preventDefault();
  if (previousValue !== '' && currentValue !== '' && currentOperator){
    const prevVal = parseFloat(previousValue);
    const currentVal = parseFloat(currentValue);
    let output;

    switch (currentOperator) {
      case "+":
          output = prevVal + currentVal;
          break;
      case "-":
          output = prevVal - currentVal;
          break;
      case "/":
          output = prevVal / currentVal;
          break;
      case "*":
          output = prevVal * currentVal;
          break;
      default:
        output = "Invalid operator";
    }

  currentValue = output.toString();
  previousValue = '';
  currentOperator = null;
  updateTotal();

  }
}

function handleEqual() {
  event.preventDefault();
  calculate();
}

function handleClear() {
  event.preventDefault();
  currentValue = '';
  previousValue = '';
  currentOperator = null;
  updateTotal();
}


// Event listeners
document.querySelectorAll('.number').forEach(button => {
  button.addEventListener('click', () => handleNumber(button.textContent));
});

document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => handleOperator(button.textContent));
});

document.getElementById('equals').addEventListener('click', handleEqual);
document.getElementById('clear').addEventListener('click', handleClear);

// Initialize display
window.onload = updateTotal;