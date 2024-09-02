function calc() {
  var num1 = parseFloat(document.getElementById("first-value").value);
  var num2 = parseFloat(document.getElementById("second-value").value);

  var result = num1 + num2;
  document.getElementById("result").value = result;
}
