

// document.getElementById("app").innerHTML = ``;

var input = document.querySelectorAll(".i");
var Display = document.querySelector(".output-menu");
var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < input.length; i++) {
  input[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");

    if (value == "AC") {
      Display.innerText = " ";
    } else if (value == "+") {
      operator = "+";
      operand1 = parseFloat(Display.textContent);
      Display.innerText = " ";
    } else if (value == "-") {
      operator = "-";
      operand1 = parseFloat(Display.textContent);
      Display.innerText = " ";
    } else if (value == "*") {
      operator = "*";
      operand1 = parseFloat(Display.textContent);
      Display.innerText = " ";
    } else if (value == "/") {
      operator = "/";
      operand1 = parseFloat(Display.textContent);
      Display.innerText = " ";
    } else if (value == "=") {
      operand2 = parseFloat(Display.textContent);
      Display.innerText = operand1 + operator + operand2;

      var a = Display.innerHTML;
      // console.log(a);
      var b = eval(a);
      // console.log(eval(a));

      Display.innerHTML = b;
      return;
    } else {
      Display.innerText += value;
    }
  });
}
