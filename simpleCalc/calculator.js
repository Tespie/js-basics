function update(value) {
  //Type the code here.
  document.getElementById("screen").value =
    value + document.getElementById("screen").value;
}

function result() {
  //Type the code here.
  let expression = document.getElementById("screen").value;
  let ans = eval(expression);
  document.getElementById("screen").value = ans;
}

function form_reset() {
  //Type the code here.
  document.getElementById("screen").value = "";
}
