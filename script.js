// Seleciona o elemento de exibição (display) onde os resultados e entradas aparecem
const display = document.querySelector('#display');

// Seleciona todos os botões na calculadora
const buttons = document.querySelectorAll('button');

// Adiciona um evento de clique para cada botão
buttons.forEach((item) => {
    item.onclick = () => {
        // Se o botão for 'clear', limpa o display
        if (item.id == 'clear') {
            display.innerText = '';
        }
        // Se o botão for 'backspace', remove o último caractere do display
        else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1); // Remove o último caractere
        }
        // Se o botão for 'equal' e o display não estiver vazio, avalia a expressão
        else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText); // Avalia a expressão (cuidado com eval)
        }
        // Se o botão for 'equal' mas o display estiver vazio, mostra uma mensagem
        else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Vazio!'; // Mensagem para entrada vazia
            setTimeout(() => (display.innerText = ''), 2000); // Limpa a mensagem após 2 segundos
        }
        // Para outros botões, adiciona o id do botão ao display
        else {
            display.innerText += item.id; // Concatena o id do botão ao texto do display
        }
    };
});

// Seleciona o botão de alternância de tema
const themeToggleBtn = document.querySelector('.theme-toggler');

// Seleciona o elemento da calculadora
const calculadora = document.querySelector('.calculadora');

// Inicializa a variável para rastrear o tema atual
let isDark = true;

// Adiciona um evento de clique ao botão de alternância de tema
themeToggleBtn.onclick = () => {
    calculadora.classList.toggle('dark'); // Alterna a classe 'dark' para mudar o tema
    themeToggleBtn.classList.toggle('active'); // Alterna a classe 'active' para o botão
    isDark = !isDark; // Atualiza o estado do tema
};
