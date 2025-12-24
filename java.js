console.log('Hello.js');
let name = 'Roma';
let age = '110';
let button = document.getElementById('BTN');
let button2 = document.getElementById('BTN2');
let title = document.getElementById('title');
let aga = document.getElementById('aga');
let status = document.getElementById(`status`);
let isOn = false;

title.textContent = 'Hello';

button.onclick = function () {
    title.textContent = 'How are you?';
    aga.textContent = Number(aga.textContent) + 1;
}
button2.addEventListener('click',  () => {
    if (isOn) {
        title.textContent = 'ON';
        button2.textContent = 'OFF';
        status.textContent = 'Система активна';
        isOn = false;
    }
    else {
        title.textContent = 'OFF';
        button2.textContent = 'ON';
        status.textContent = 'Система неактивна';
        isOn = true;
    }

    console.log(isOn);

});
    

 
