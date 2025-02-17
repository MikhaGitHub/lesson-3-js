function updateResult() {
    var personality_value = document.getElementById("personality").value;
    var month_value = document.getElementById("month").value;
    var year_value = document.getElementById("year").value;

    var resultText = `${personality_value} ${month_value} ${year_value}`;

    document.querySelector('.result').innerHTML = resultText;
};
