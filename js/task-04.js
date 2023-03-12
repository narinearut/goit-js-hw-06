const counterValue = {
    value: 0,
    increment () {
        this.value += 1;
    },
    decrement () {
        this.value -= 1;
    }
}

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueElement = document.querySelector('#value');

decrementBtn.addEventListener('click', function ( ) {
    console.log('ЗМЕНШИЛИ НА 1');

    valueElement.textContent = counterValue.value;

    counterValue.decrement();
    console.log(counterValue);


})

incrementBtn.addEventListener('click', function ( ) {
    console.log('ЗБІЛЬШИЛИ НА 1');

    valueElement.textContent = counterValue.value;

    counterValue.increment();
    console.log(counterValue);
});
