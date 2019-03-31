var value1;
var value2;
var value3;

function sum (value1, value3){
    return value1 + value3;
}
function subtract (value1, value3) {
    return value1 - value3;
}
var multiply = function (value1, value3) {
    return value1 * value3;
};
var divide = function (value1, value3) {
    return value1 / value3;
};

$("#num1").on("keyup change", function() {
    value1 = parseFloat(this.value);
});

$("#sym").on("keyup change", function () {
    value2 = this.value; 
});

$("#num2").on("keyup change", function () {
    value3 = parseFloat(this.value);
});

$("#sym").on("blur", function () {
    if (this.value == "+" || this.value == "-" || this.value == "*" || this.value == "/") {
        return value2;
    } else {
        alert("Please enter correct operation. Valid Operations are '+, -, *, /'");
    }
});

$("#calculate").click(function () {
    if(value2 == "+") {
        return $("h3").text(value1 + " + " + value3 + " = " + sum(value1, value3));
        // alert(value1 + " + " + value3 + " = " + sum(value1, value3));
    } else if(value2 == "-") {
        return $("h3").text(value1 + " - " + value3 + " = " + subtract(value1, value3));
        // alert(value1 + " - " + value3 + " = " + subtract(value1, value3));
    } else if(value2 == "*") {
        return $("h3").text(value1 + " x " + value3 + " = " + multiply(value1, value3));
        // alert(value1 + " x " + value3 + " = " + multiply(value1, value3));
    } else if(value2 == "/") {
        return $("h3").text(value1 + " / " + value3 + " = " + divide(value1, value3));
        // alert(value1 + " / " + value3 + " = " + divide(value1, value3));
    } else {alert("Please check your input & enter valid input");}
});

$("form").submit(function (e) {
    e.preventDefault();
});