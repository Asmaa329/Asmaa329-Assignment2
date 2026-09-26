function calculate(operator) {
    const num1Input = document.getElementById('num1').value;
    const num2Input = document.getElementById('num2').value;
    const resultDiv = document.getElementById('result');

    resultDiv.className = 'result-box';

    if (num1Input === '' || num2Input === '') {
        resultDiv.textContent = 'Please enter both numbers.';
        resultDiv.classList.add('error');
        return;
    }

    const val1 = parseFloat(num1Input);
    const val2 = parseFloat(num2Input);
    let result = 0;

    switch (operator) {
        case '+':
            result = val1 + val2;
            break;
        case '-':
            result = val1 - val2;
            break;
        case '*':
            result = val1 * val2;
            break;
        case '/':
            if (val2 === 0) {
                resultDiv.textContent = 'Error: Division by zero is not allowed.';
                resultDiv.classList.add('error');
                return;
            }
            result = val1 / val2;
            break;
        default:
            resultDiv.textContent = 'Invalid operation.';
            resultDiv.classList.add('error');
            return;
    }

    resultDiv.textContent = `Result: ${val1} ${operator} ${val2} = ${result}`;
    resultDiv.classList.add('success');
}