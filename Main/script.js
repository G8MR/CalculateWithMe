function calculate() {
    var e = document.getElementById("operators");
    var opr = e.value;
    if (opr = "+") {
        addition();
    }
    if (opr = "-") {
        subtraction();
    }
    if (opr = "*") {
        multiplication();
    }
    if (opr = "/") {
        division();
    }
}

function addition() {
    var a = document.getElementById("num1");
    var num1 = a.value;
    Number(num1);
    var b = document.getElementById("num2");
    var num2 = b.value;
    Number(num2);
    var result = +num1 + +num2;
    document.getElementById("result").innerHTML = "The answer is "+ result;
}

function subtraction() {
    var a = document.getElementById("num1");
    var num1 = a.value;
    Number(num1);
    var b = document.getElementById("num2");
    var num2 = b.value;
    Number(num2);
    var result = +num1 - +num2;
    document.getElementById("result").innerHTML = "The answer is "+ result;
}

function multiplication() {
    var a = document.getElementById("num1");
    var num1 = a.value;
    Number(num1);
    var b = document.getElementById("num2");
    var num2 = b.value;
    Number(num2);
    var result = +num1 * +num2;
    document.getElementById("result").innerHTML = "The answer is "+ result;
}

function division() {
    var a = document.getElementById("num1");
    var num1 = a.value;
    Number(num1);
    var b = document.getElementById("num2");
    var num2 = b.value;
    Number(num2);
    var result = +num1 / +num2;
    document.getElementById("result").innerHTML = "The answer is "+ result;
}