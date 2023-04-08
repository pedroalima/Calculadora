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


// Feature responsible for changing the theme
const inputCheckbox = document.querySelector('#checkbox');

inputCheckbox.addEventListener('click', () => {
    const pageHTML =  document.querySelector('html');

    pageHTML.classList.toggle('light-theme');
});