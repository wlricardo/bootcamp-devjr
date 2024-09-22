function calc(op) {
  var num1 = parseFloat(document.getElementById("first-value").value);
  var num2 = parseFloat(document.getElementById("second-value").value);
  var result = 0;

  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
  }

  document.getElementById("result").value = result;

  var newHistory =
    "<p> " + num1 + " " + op + " " + num2 + " = " + result + "</p>";
  var history = document.getElementById("history");

  history.innerHTML = newHistory + history.innerHTML;

  if (history.children.length > 10) {
    history.removeChild(history.childNodes[10]);
  }
}
