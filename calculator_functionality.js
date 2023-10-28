//calculator script practice with loops

var total = 0;
document.getElementById("total").textContent = total;
var input_num = 0;


function addingMachine(){
    total = Number(total)+Number(input_num);
    var updateTotal = document.getElementById("total").textContent = total;
    input_num = 0;
    return [total, input_num];
}

function subtractingMachine(){
    total = Number(total)-Number(input_num);
    var updateTotal = document.getElementById("total").textContent = total;
    input_num = 0;
    return [total, input_num];
}

function dividingMachine(){
    total = Number(total)/Number(input_num);
    var updateTotal = document.getElementById("total").textContent = total;
    input_num = 0;
    return [total, input_num];
}

function multiplyingMachine(){
    total = Number(total)*Number(input_num);
    var updateTotal = document.getElementById("total").textContent = total;
    input_num = 0;
    return [total, input_num];
}

function clearingMachine(){
    total = 0;
    input_num = 0;
    var updateTotal = document.getElementById("total").textContent = total;
    return [total, input_num];
}

function equalMachine(){
    var updateTotal = document.getElementById("total").textContent = total;
    input_num = 0;
    return input_num;
}

function updateInput0(){
    if(String(input_num) == "0"){
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
    else{  
        input_num = String(input_num)+"0";
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
}

function updateInput1(){
    if(String(input_num) == "0"){
        input_num = "1"
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
    else{
        input_num = String(input_num)+"1";
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
}

function updateInput2(){
    if(String(input_num) == "0"){
        input_num = "2"
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
    else{
        input_num = String(input_num)+"2";
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
}

function updateInput3(){
    if(String(input_num) == "0"){
        input_num = "3"
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
    else{
        input_num = String(input_num)+"3";
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
}

function updateInput4(){
    if(String(input_num) == "0"){
        input_num = "4"
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
    else{
        input_num = String(input_num)+"4";
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
}

function updateInput5(){
    if(String(input_num) == "0"){
        input_num = "5"
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
    else{
        input_num = String(input_num)+"5";
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
}

function updateInput6(){
    if(String(input_num) == "0"){
        input_num = "6"
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
    else{
        input_num = String(input_num)+"6";
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
}

function updateInput7(){
    if(String(input_num) == "0"){
        input_num = "7"
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
    else{
        input_num = String(input_num)+"7";
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
}

function updateInput8(){
    if(String(input_num) == "0"){
        input_num = "8"
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
    else{
        input_num = String(input_num)+"8";
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
}

function updateInput9(){
    if(String(input_num) == "0"){
        input_num = "9"
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
    else{
        input_num = String(input_num)+"9";
        var updateTotal = document.getElementById("total").textContent = input_num;
        return input_num;
    }
}

document.getElementById("0").addEventListener("click", updateInput0, false);
document.getElementById("1").addEventListener("click", updateInput1, false);
document.getElementById("2").addEventListener("click", updateInput2, false);
document.getElementById("3").addEventListener("click", updateInput3, false);
document.getElementById("4").addEventListener("click", updateInput4, false);
document.getElementById("5").addEventListener("click", updateInput5, false);
document.getElementById("6").addEventListener("click", updateInput6, false);
document.getElementById("7").addEventListener("click", updateInput7, false);
document.getElementById("8").addEventListener("click", updateInput8, false);
document.getElementById("9").addEventListener("click", updateInput9, false);
document.getElementById("clear").addEventListener("click", clearingMachine, false);
document.getElementById("+").addEventListener("click",addingMachine,false);
document.getElementById("-").addEventListener("click",subtractingMachine,false);
document.getElementById("/").addEventListener("click",dividingMachine,false);
document.getElementById("*").addEventListener("click",multiplyingMachine,false);
document.getElementById("=").addEventListener("click",equalMachine,false);