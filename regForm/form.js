function myFunction() {
  var name = document.getElementById("myname").value;
  var phone = document.getElementById("myphone").value;
  var country = document.getElementById("mycontry").value;
  var email = document.getElementById("mymail").value;

  var result = name + "," + phone + "," + country + "," + email;

  // alert(result);
  // confirm(result);
  prompt(result, "second argument of prompt");
}
