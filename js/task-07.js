const refs = {
    sizeControl: document.querySelector('#font-size-control'),
    textControl: document.querySelector('#text'),
}

refs.sizeControl.addEventListener('input', (onInputChange));



function onInputChange (e) {
    refs.textControl.style.fontSize = `${e.target.value}px`;
}