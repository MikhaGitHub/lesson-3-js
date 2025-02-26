const form = document.getElementById('form_list');
const resultElement = document.querySelector('.result');

function updateResult() {
    let personality_value = document.getElementById('personality').value;
    let month_value = document.getElementById('month').value;
    let year_value = document.getElementById('year').value;

    let resultText = `${personality_value} ${month_value} ${year_value}`;

    resultElement.innerHTML = resultText;
};

form.addEventListener('change', updateResult);