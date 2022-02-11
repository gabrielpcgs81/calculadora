var memory = 0;
var answer = 0;
var last_op = null;
var on = true;
var expression = '';

var button_onoff = document.getElementsByClassName('on_off')[0];
button_onoff.addEventListener('click', ligar);


function processador(event) {

    text_content = event.target.textContent;
    class_name = event.target.className;
    const visor = document.getElementById('atual');
    valor_atual = visor.textContent;

    switch (class_name) {
        case 'number':
            expression = expression + text_content + ' ';
            display_atual(text_content);
            break;
        case 'clear':
            expression = '';
            last_op = null;
            answer = 0;
            clear_atual();
            clear_ultimo();
            break;
        case 'operation sum':
            test_first('+')
            if (last_op != '=') {
                answer = calc(answer, valor_atual);
                last_op = '+';
                clear_atual();
                clear_ultimo();
                display_ultimo(answer);
            }
            else {
                last_op = '+';
                answer = calc(answer, 0);
            }
            expression = expression + last_op + ' ';
            break;
        case 'operation sub':
            test = test_first('-')
            if (test == true) {
                answer = calc(valor_atual, answer);
                last_op = '-';
                clear_atual();
                clear_ultimo();
                display_ultimo(answer);
            }
            else if (last_op != '=') {
                answer = calc(answer, valor_atual);
                last_op = '-';
                clear_atual();
                clear_ultimo();
                display_ultimo(answer);
            }
            else {
                last_op = '-';
                answer = calc(answer, 0);
            }
            expression = expression + last_op + ' ';
            break;
        case 'operation mult':
            test = test_first('*')
            if (last_op != '=') {
                if (test == true) answer = calc(1, valor_atual);
                else answer = calc(answer, valor_atual);
                last_op = '*';
                clear_atual();
                clear_ultimo();
                display_ultimo(answer);
            }
            else {
                last_op = '*';
                answer = calc(answer, 1);
            }
            expression = expression + 'x ';
            break;
        case 'operation div':
            var test = test_first('/');
            if (last_op != '=' && last_op != '/') {
                if (test == true) {
                    console.log('teste 1');
                    last_op = '*';
                    answer = calc(valor_atual, 1);
                    last_op = '/';
                    clear_atual();
                    clear_ultimo();
                    display_ultimo(answer);
                }
            } else if (last_op == '/') {
                console.log('teste 2');
                answer = calc(answer, valor_atual);
                clear_ultimo();
                display_ultimo(answer);
                clear_atual();
            } else {
                console.log('teste 3');
                clear_ultimo();
                last_op = '/';
                answer = calc(answer, 1);
            }
            expression = expression + last_op + ' ';
            break;
        case 'equal':
            answer = calc(answer, valor_atual);
            last_op = '=';
            clear_atual();
            clear_ultimo();
            display_ultimo(answer);
            expression = expression + ' = ' + answer;
            console.log(expression);
            break;
        case 'memory':
            calc_memory(text_content);
            break;
        case 'ans':
            display_atual(answer)
            break;
        //clear();
    }
    display_expression(expression);
}

function display_atual(text) {
    const visor = document.getElementById('atual');
    visor.textContent = visor.textContent + text;
}

function display_ultimo(text) {
    const visor = document.getElementById('ultimo_numero');
    visor.textContent = visor.textContent + text;
}

function display_memoria() {
    clear_memoria();
    const visor = document.getElementById('memoria');
    visor.textContent = 'M';
}

function display_expression(expression) {
    clear_expression();
    const express = document.getElementById('expression');
    express.textContent = expression;
}

function clear_expression() {
    const express = document.getElementById('expression');
    express.textContent = '';
}

function clear_atual() {
    const visor = document.getElementById('atual');
    visor.textContent = '';
}

function clear_ultimo() {
    const visor = document.getElementById('ultimo_numero');
    visor.textContent = '';
}

function clear_memoria() {
    const visor = document.getElementById('memoria');
    visor.textContent = '';
}

function test_first(op) {
    if (last_op == null) {
        if (op != '/') {
            last_op = op;
        }
        return true;
    }
}

function calc(a, b) {
    switch (last_op) {
        case '+':
            return parseFloat(a) + parseFloat(b);
        case '-':
            return parseFloat(a) - parseFloat(b);
        case '*':
            return parseFloat(a) * parseFloat(b);
        case '/':
            return parseFloat(a) / parseFloat(b);
    }
}

function calc_memory(text) {
    if (text == 'MR') {
        display_memoria();
        clear_atual();
        const visor = document.getElementById('atual');
        display_atual(memory);
        console.log(memory);
    }
    else if (text == 'MC') {
        memory = 0;
        clear_memoria();
        console.log(memory);
    }
    else if (text == 'M+') {
        display_memoria();
        const visor = document.getElementById('atual');
        memory = parseFloat(visor.textContent) + memory;
        console.log(memory);
    }
    else {
        display_memoria();
        const visor = document.getElementById('atual');
        memory = memory - parseFloat(visor.textContent);
        console.log(memory);
    }
}

function ligar() {
    console.log('entrei aqui para ligar')
    button_onoff.style.backgroundColor = "green";
    const btns = document.querySelectorAll('button');
    btns.forEach(btn => {
        if (btn.innerHTML != 'ON/OFF') {
            btn.addEventListener('click', processador, false);
        }
        var button_onoff = document.getElementsByClassName('on_off')[0];
        button_onoff.removeEventListener('click', ligar, false);
        button_onoff.addEventListener('click', desligar);
    });
}

function desligar() {
    console.log('entrei aqui pra desligar');
    button_onoff.style.backgroundColor = "red";
    last_op = null;
    answer = 0;
    clear_atual();
    clear_ultimo();
    const btns = document.querySelectorAll('button');
    btns.forEach(btn => {
        if (btn.innerHTML != 'ON/OFF') {
            btn.removeEventListener('click', processador, false);
        }
        var button_onoff = document.getElementsByClassName('on_off')[0];
        button_onoff.removeEventListener('click', desligar, false);
        button_onoff.addEventListener('click', ligar);
    });
}

