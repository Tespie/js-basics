function handleEvent(e) {
  document.addEventListener("click", changeColor, true);

  function changeColor(e) {
    document.body.style.backgroundColor = "#FF5733";
  }
}

// button1 click and paragraph1
function click1(){
  console.log("Click is successful")
  var thing = "Click is successful"
  document.getElementById("p1").innerHTML = thing
}

// button3 click and paragraph3
document.getElementById("b3").addEventListener("click",click2)
function click2()
{
  console.log("Click2 is successful")
  var thing = "Click2 is successful"
  document.getElementById("p3").innerHTML = thing
}

// input1
document.getElementById("i1").addEventListener("change",type)
function type()
{
  console.log("I have typed")
}
