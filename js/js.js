function input(){
    let input = document.getElementById('input');
    let tvalue = input.value;

    let output = document.getElementById('output');
    output.innerText = "L = " +tvalue+ " x " +tvalue;
}

function result(){
    let input = document.getElementById('input');
    let tvalue = input.value;
    let result = document.getElementById("result");
    result.innerHTML = "Luas = "+tvalue * tvalue
}

function reset() {
    document.getElementById("input").value = "";
} 

function input2(){
    let input2 = document.getElementById('input2');
    let tvalue2 = input2.value;

    let output2 = document.getElementById('output2');
    output2.innerText = "K = 4 x" +tvalue2;
}

function result2(){
    let input2 = document.getElementById('input2');
    let tvalue2 = input2.value;
    let result2 = document.getElementById("result2");
    result2.innerHTML = "Keliling = "+ 4 * tvalue2
}

function reset2() {
    document.getElementById("output2").value = "";
} 