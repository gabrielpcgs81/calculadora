var memory = null;
var answer = 0;
var last_op = null;
var on = true;

var button_onoff = document.getElementsByClassName('on_off')[0];
button_onoff.addEventListener('click', ligar);


function processador(event) {
    text_content = event.target.textContent;
    class_name = event.target.className;
    const visor = document.getElementById('atual');
    valor_atual = visor.textContent;

    switch (class_name) {
        case 'number':
            display_atual(text_content);
            break;
        case 'dot':
            display_atual(text_content);
            break;
        case 'clear':
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
            break;
        case 'operation sub':
            test_first('-')
            if (last_op != '=') {
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
            break;
        case 'operation div':
            test_first('/');
            if (last_op != '=' && last_op != '/') {
                console.log('teste 1');
                answer = calc(valor_atual, 1);
                last_op = '/';
                clear_atual();
                clear_ultimo();
                display_ultimo(answer);
            } else if (last_op == '/') {
                console.log('teste 2');
                answer = calc(answer, valor_atual);
                console.log(answer.toString());
                display_ultimo(answer);
                clear_atual();
            } else {
                console.log('teste 3');
                clear_ultimo();
                last_op = '/';
                answer = calc(answer, 1);
            }
            break;
        case 'equal':
            answer = calc(answer, valor_atual);
            last_op = '=';
            clear_atual();
            clear_ultimo();
            display_ultimo(answer);
            break;
        case 'memory':
            calc_memory(text_content);
            break;
        case 'ans':
            display_atual(answer)
            break;
        //clear();
    }
}

function display_atual(text) {
    const visor = document.getElementById('atual');
    visor.textContent = visor.textContent + text;
}

function display_ultimo(text) {
    const visor = document.getElementById('ultimo');
    visor.textContent = visor.textContent + text;
}

function clear_atual() {
    const visor = document.getElementById('atual');
    visor.textContent = '';
}

function clear_ultimo() {
    const visor = document.getElementById('ultimo');
    visor.textContent = '';
}

function test_first(op) {
    if (last_op == null) {
        last_op = op;
        return true;
    }
}

function calc(a, b) {
    switch (last_op) {
        case '+':
            return parseInt(a, 10) + parseInt(b, 10);
        case '-':
            return parseInt(a, 10) - parseInt(b, 10);
        case '*':
            return parseInt(a, 10) * parseInt(b, 10);
        case '/':
            return parseInt(a, 10) / parseInt(b, 10);
    }
}

function calc_memory(text) {
    if (text == 'MRC') window.alert("MRC");
    else if (text == 'M+') {
        const visor = document.getElementById('atual');
        memory = visor.textContent;
    }
    else memory = null;
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

