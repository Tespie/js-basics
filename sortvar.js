var lodash = require("lodash");

// import { vars } from "./MyWorkspace.postman_globals.json";

const fs = require("fs");
const vars = require("./MyWorkspace.postman_globals.json");
// var myvars = [
//   {
//     key: "projectStep",
//     value: "",
//     enabled: true,
//   },
//   {
//     key: "responseTime",
//     value: "10000",
//     enabled: true,
//   },
//   {
//     key: "timeStamp",
//     value: "0872020031657",
//     enabled: true,
//   },
//   {
//     key: "token",
//     value:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc5ODkyNTI1OTR9.BlAabHedo4_krXbfIyj5BrzdwnFGX3pboiYF4bRVhv8",
//     enabled: true,
//   },
//   {
//     key: "email",
//     value: "email2182020112415@test.com",
//     enabled: true,
//   },
//   {
//     key: "password",
//     value: "2182020112415",
//     enabled: true,
//   },
// ];

const myvar = vars.values;

var expectedFilter = lodash.orderBy(myvar, (item) => item.key.toLowerCase(), [
  "asc",
]);

// alert(expectedFilter);

fs.writeFile("mysortedvar.txt", JSON.stringify(expectedFilter), (err) => {
  // In case of a error throw err.
  if (err) throw err;
});

// var txtFile = new File(mysortedvar);

// txtFile.writeln(expectedFilter);
// txtFile.close();
console.log(expectedFilter);
