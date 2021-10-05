window.onload = function () {
  /**
   * USING Vanila JS
   */
  var http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        console.log(JSON.parse(http.response));
    }
  };

  http.open("GET", "./users.json", true);
  http.send();
  //   console.log("test...");

  /**
   * USING JQuery Method
   */

  $.get("./users.json", function (data) {
    console.log(data);
  });
  console.log("test");
};

/**
 * Handle the response from the server
 */

function handleResponse() {
  // var xmlResponse = xm
}
