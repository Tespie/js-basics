var a = 10;
b = "10";

if (a) {
  alert("a has a value bro");

  if (a === 10) {
    alert("Example of triple and Double equals in js");

    if (a == b) {
      alert("a == b is true");

      if (a === b) {
        alert("a === b is true");
      } else {
        alert("but a === b is false");
        var ans = confirm("Do you know Why ?");

        if (ans) {
          /* alert("Sounds great ! You know the difference between == and ===. \n == checks for the value only \n while \n === checks for values as well as for the data types on the both sides") */

          gyan(
            "SOUNDS GREAT ! \n You know the difference between == and ===. \n \n"
          );
        } else {
          gyan(
            "Ohk No PROBLEM ! Let me Explain \n\n == and === is not same in Javascript \n \n"
          );
        }
      }
    } else {
      alert("a == 10 is false");
    }
  }
}

function gyan(iamfirst) {
  alert(
    iamfirst +
      "== checks for the value only \n while \n === checks for values as well as for the data types on the both sides"
  );
}
