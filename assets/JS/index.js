/* FEATURE CALCULATOR */

// Variável do campo de operações da calculadora e dos botões
const result = document.querySelector('#result');
const buttons = document.querySelectorAll('.button__buttons');

// Adiciona dados no visor
const insert = (num) => {
    let number = result.innerHTML;
    result.innerHTML = number + num;
}
// Deleta o ultimo caractere
const delet = () => {
    let resultIn = result.innerHTML
    result.innerHTML = resultIn.substring(0, resultIn.length -1);
}
// Apaga todos os dados do visor
const clean = () => {
    result.innerHTML = '';
}
// Calcula as operações
const calculate = () => {
    let resultIn = result.innerHTML
    if (resultIn) {
        result.innerHTML = eval(resultIn);
    };
}

// iteração da lista de botões
buttons.forEach((button) => {
    // Aciona o evento de click em cada botão da lista
    button.addEventListener("click", (e) => {
        const value = e.target.innerText;
        // Valida os valores dos botões
        if (+value >= 0 || value === ".") {
            insert(value);
        } else if (value === "DEL") {
            delet();
        } else if (value === "RESET") {
            clean();
        } else if (value === "=") {
            calculate();
        } else {
            insert(value);
        };

    });

});


/* FEATURE THEME */

// Variável do botão de temas
const inputCheckbox = document.querySelector('#checkbox');
// Altera classe da pagina HTML quando o evento de click acontece no botão temas
inputCheckbox.addEventListener('click', () => {
    const pageHTML =  document.querySelector('html');

    pageHTML.classList.toggle('light-theme');
});

