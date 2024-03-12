"use strict";
exports.__esModule = true;
require("./dist/style.css");
// Получаем элементы инпутов
var input1 = document.getElementById("r1");
var input2 = document.getElementById("r2");
var output = document.getElementById("documento");
if (input1 && input2) {
    input1.addEventListener("change", updateOutput);
    input2.addEventListener("change", updateOutput);
}
function updateOutput() {
    if (output && input1 && input2) {
        if (input1.checked) {
            output.placeholder = "DNI o Tarjeta de residencia";
        }
        else if (input2.checked) {
            output.placeholder = "Pasaporte";
        }
    }
}
