const wrapper = document.getElementById('buttons');

wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }

    //console.dir(event.target.innerHTML);
    display(event.target.innerHTML);
})

function display(text) {
    const visor = document.getElementById('visor');
    visor.innerHTML = visor.innerHTML + text;
}