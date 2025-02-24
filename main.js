// по сути получаем списки глобально а позже динамически через callback function 
// получаем значения полученных переменных return string 
const personalityInput = document.getElementById("personality");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const resultElement = document.querySelector('.result');

// Определяем функцию, которая будет выполняться при нажатии кнопки
function updateResult() {
    let personality_value = personalityInput.value;
    let month_value = monthInput.value;
    let year_value = yearInput.value;

    let resultText = `${personality_value} ${month_value} ${year_value}`;

    resultElement.innerHTML = resultText;
}

personalityInput.addEventListener('change', updateResult)
monthInput.addEventListener('change', updateResult)
yearInput.addEventListener('change', updateResult)