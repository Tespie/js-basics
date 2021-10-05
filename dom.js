function changeStyle() {
  var text = (document.getElementById("heading").style.color = "red");
  var text = (document.getElementById("heading").style.backgroundColor =
    "yellow");
  var text = (document.getElementById("heading").style.paddingLeft = 100);
  var text = (document.getElementById("heading").style.fontStyle = "Italic");
  //   var text = document.getElementById("heading");
}

function changeCombineStyle(params) {
  var paragraph = document.getElementsByTagName("p");

  for (var i = 0; i < paragraph.length; i++) {
    var changeParaText = (paragraph[i].style.fontFamily = "Consolas");
  }

  //   for (var para :  paragraph) {
  //     var changeParaText = (paragraph.style.fontFamily = "Consolas")
  //   }

  //   var changeParaText = (paragraph[0].style.fontFamily = "Consolas");
  //   var changeParaText = (paragraph[1].style.fontFamily = "Consolas");
  //   var changeParaText = (paragraph[2].style.fontFamily = "Consolas");
  //   var changeParaText = (paragraph[3].style.fontFamily = "Consolas");
  //   var changeParaText = (paragraph[4].style.fontFamily = "Consolas");
}

function delete_2nd_textLine(params) {
  var parent = document.getElementById("text");
  var child = document.getElementById("p1");

  parent.removeChild(child);
}
