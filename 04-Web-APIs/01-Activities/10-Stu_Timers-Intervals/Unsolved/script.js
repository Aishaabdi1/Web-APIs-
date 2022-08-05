const main = document.querySelector ('#main');

console.log (main);

var time = 10;
var setTimer = setInterval (function)() {
    time--;
    console.log (time);
    if (time === 0) {
        main.textContent = "hello!";
        clearInterval (setTimer);
    }
}, 1000)