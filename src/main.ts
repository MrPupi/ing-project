import "../style.css";

// Получаем элементы инпутов
const input1 = document.getElementById("r1") as HTMLInputElement;
const input2 = document.getElementById("r2") as HTMLInputElement;
const output = document.getElementById("documento") as HTMLInputElement;

if (input1 && input2) {
  input1.addEventListener("change", updateOutput);
  input2.addEventListener("change", updateOutput);
}

  function updateOutput() {
    if (output && input1 && input2) {
        if(input1.checked) {
          output.placeholder = "DNI o Tarjeta de residencia"
        } else if (input2.checked) {
          output.placeholder = "Pasaporte"
        }
      }
    }