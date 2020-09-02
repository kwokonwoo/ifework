function $(id) { //$表示变量
    return document.getElementById(id); 
}

function add(num1, num2) {
    return num1 + num2;
}

function renderResult(result) {
    $("result").innerHTML = result
}

function addEventHandle(){
    var num1 = $("number1").value;
    var num2 = $("number2").value;
    var result = add(num1, num2);
    renderResult(result);
}

function initEvent() {
    $("addbtn").addEventListener("click", addEventHandle, false);
} //addEventListener()接受3个参数：要处理的事件名、作为事件处理程序的函数和一个布尔值。

initEvent();

var originalTitle = document.title;
document.title = "New pageeeeeeee title";