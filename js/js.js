function hitungluas() {
    let sisi = document.getElementById("sisi").value
    let hasilluas = parseInt(sisi) *  parseInt(sisi)

    console.log(hasilluas)
}

function hitungkeliling() {
    let sisi = document.getElementById("sisi").value
    let hasilkeliling = 4 *  parseInt(sisi)

    console.log(hasilkeliling)
}

function reset() {
    let btnclear = document.querySelector('button1 reset');
    let inputs = document.querySelectorAll('input');
    btnclear.addEventListener('click',()=>{
        inputs.forEach(input=>input.value ='');
    });
}