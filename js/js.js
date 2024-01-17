let sisi = document.getElementById('sisi');
let luas = document.getElementById('luas');
let out1 = document.getElementById('output1');

function fun1() {
    out1.innerHTML = sisi.value;
}
luas.addEventListener('click',fun1);

function reset() {
    let btnclear = document.querySelector('reset');
    let inputs = document.querySelectorAll('input');
    btnclear.addEventListener('click',()=>{
        inputs.forEach(input=>input.value ='');
    });
}