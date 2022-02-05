const wrapper = document.getElementById('buttons');

wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }

    var key = event.target.className;

    switch (key) {
        case 'number':
            console.log(key);
            display_atual(event.target.textContent);
            break;
        case 'dot':
            console.log(key);
            display_atual(event.target.textContent);
            break;
        case 'clear':
            clear_atual();
            clear_ultimo();
            console.log(key);
            break;
        case 'operation sum':
            add(event.target.textContent);
            break;
        case 'operation sub':
            subtract(event.target.textContent);
            break;
        case 'operation mult':
            multiply(event.target.textContent);
            break;
        case 'operation div':
            divide(event.target.textContent);
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

function add(text) {
    const ultimo = document.getElementById('ultimo').textContent;
    if (ultimo == '') {
        const atual = document.getElementById('atual').textContent;
        display_ultimo(atual);
        clear_atual();
    }
    else {
        const atual = document.getElementById('atual').textContent;
        a = parseInt(atual, 10);
        u = parseInt(ultimo, 10);
        sum = a + u;
        clear_ultimo();
        display_ultimo(sum);
        clear_atual();
    }
}

function subtract(text) {
    const ultimo = document.getElementById('ultimo').textContent;
    if (ultimo == '') {
        const atual = document.getElementById('atual').textContent;
        display_ultimo(atual);
        clear_atual();
    }
    else {
        const atual = document.getElementById('atual').textContent;
        a = parseInt(atual, 10);
        u = parseInt(ultimo, 10);
        sum = u - a;
        clear_ultimo();
        display_ultimo(sum);
        clear_atual();
    }
}

function multiply(text) {
    const ultimo = document.getElementById('ultimo').textContent;
    if (ultimo == '') {
        const atual = document.getElementById('atual').textContent;
        display_ultimo(atual);
        clear_atual();
    }
    else {
        const atual = document.getElementById('atual').textContent;
        a = parseInt(atual, 10);
        u = parseInt(ultimo, 10);
        sum = a * u;
        clear_ultimo();
        display_ultimo(sum);
        clear_atual();
    }
}

function divide(text) {
    const ultimo = document.getElementById('ultimo').textContent;
    if (ultimo == '') {
        const atual = document.getElementById('atual').textContent;
        display_ultimo(atual);
        clear_atual();
    }
    else {
        const atual = document.getElementById('atual').textContent;
        a = parseInt(atual, 10);
        u = parseInt(ultimo, 10);
        sum = u / a;
        clear_ultimo();
        display_ultimo(sum);
        clear_atual();
    }
}