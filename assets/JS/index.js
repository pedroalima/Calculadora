const result = document.querySelector('#result');

function insert(num) {
    let number = result.innerHTML;
    result.innerHTML = number + num;
}

function clean() {
    result.innerHTML = '';
}

function delet() {
    let resultIn = result.innerHTML
    result.innerHTML = resultIn.substring(0, resultIn.length -1);
}

function calculate() {
    let resultIn = result.innerHTML
    if (resultIn) {
        result.innerHTML = eval(resultIn);
    };
}