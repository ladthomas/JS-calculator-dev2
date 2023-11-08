document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('calculator-form');
    const resultsDiv = document.getElementById('results');
    const errorDiv = document.querySelector('.error');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const number1 = parseFloat(document.getElementById('number1').value);
        const number2 = parseFloat(document.getElementById('number2').value);
        const operation = document.getElementById('operation').value;

        if (isNaN(number1) || isNaN(number2) || !operation) {
            errorDiv.textContent = "Veuillez entrer des nombres valides et sélectionner une opération.";
            resultsDiv.style.display = 'none';
        } else {
            errorDiv.textContent = '';
            let result;

            switch (operation) {
                case '+':
                    result = number1 + number2;
                    break;
                case '-':
                    result = number1 - number2;
                    break;
                case '*':
                    result = number1 * number2;
                    break;
                case '/':
                    result = number1 / number2;
                    break;
                default:
                    result = 'Opération non prise en charge';
            }

            resultsDiv.textContent = `Résultat : ${result}`;
            resultsDiv.style.display = 'block';
        }
    });

    form.addEventListener('reset', function () {
        errorDiv.textContent = '';
        resultsDiv.textContent = '';
        resultsDiv.style.display = 'none';
    });
});
