function result_nonsense () {
    result.innerHTML = "Умный Синий Бык";
}


let number_month = document.getElementById("number_month")
let month= document.getElementById("month")
let year = document.getElementById("year")
let result = document.getElementById("result")
number_month.addEventListener('change', result_nonsense)
month.addEventListener('change', result_nonsense)
year.addEventListener('change', result_nonsense)