var memory = null;
var answer = 0;
var last_op = null;

const wrapper = document.getElementById('buttons');

wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }

    const visor = document.getElementById('atual');
    valor_atual = visor.textContent;

    var key = event.target.className;

    switch (key) {
        case 'number':
            display_atual(event.target.textContent);
            break;
        case 'dot':
            display_atual(event.target.textContent);
            break;
        case 'clear':
            last_op = null;
            answer = 0;
            clear_atual();
            clear_ultimo();
            break;
        case 'operation sum':
            test_first('+')
            answer = calc(answer, valor_atual);
            last_op = '+';
            clear_atual();
            clear_ultimo();
            display_ultimo(answer);
            break;
        case 'operation sub':
            test_first('-')
            answer = calc(answer, valor_atual);
            last_op = '-';
            clear_atual();
            clear_ultimo();
            display_ultimo(answer);
            break;
        case 'operation mult':
            test = test_first('*')
            if (test == true) answer = calc(1, valor_atual);
            else answer = calc(answer, valor_atual);
            last_op = '*';
            clear_atual();
            clear_ultimo();
            display_ultimo(answer);
            break;
        case 'operation div':
            test_first('/')
            answer = calc(answer, valor_atual);
            last_op = '/';
            clear_atual();
            clear_ultimo();
            display_ultimo(answer);
            break;
        case 'equal':
            answer = calc(answer, valor_atual);
            clear_atual();
            clear_ultimo();
            display_ultimo(answer);
            break;
        case 'memory':
            calc_memory(event.target.textContent);
            break;
        case 'ans':
            display_atual(answer)
            break;
        //clear();
    }
})

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