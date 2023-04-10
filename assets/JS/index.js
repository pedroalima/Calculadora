    /* FEATURE CALCULATOR */

// Variável do visor da calculadora
const result = document.querySelector('#result');
// função para inserir dados
function insert(num) {
    let number = result.innerHTML;
    result.innerHTML = number + num;
}


// Função para limpar
function clean() {
    result.innerHTML = '';
}
// Variável do botão reset
const resetButton = document.querySelector('#resetButton');
// Chama a função clean quando o evento de click acontece no botão reset
resetButton.addEventListener('click', () => clean());


// Função para deletar
function delet() {
    let resultIn = result.innerHTML
    result.innerHTML = resultIn.substring(0, resultIn.length -1);
}
// Variável do botão dell
const delButton = document.querySelector('#delButton');
// Chama a função delet quando o evento de click acontece no botão dell
delButton.addEventListener('click', () => delet());


// Função para calcular
function calculate() {
    let resultIn = result.innerHTML
    if (resultIn) {
        result.innerHTML = eval(resultIn);
    };
}
// Variável do botão igual
const equalButton = document.querySelector('#equalButton');
// Chama a função calcular quando o evento de click acontece no botão igual
equalButton.addEventListener('click', () => calculate());


    /* FEATURE THEME */

// Variável do botão de temas
const inputCheckbox = document.querySelector('#checkbox');
// Altera classe da pagina HTML quando o evento de click acontece no botão temas
inputCheckbox.addEventListener('click', () => {
    const pageHTML =  document.querySelector('html');

    pageHTML.classList.toggle('dark-theme');
});

