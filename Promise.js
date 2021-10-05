var promise = new Promise(function(resolve, reject) {

	var gg = 7/0;

const x = 10
const y = "10";



if(x === y) {
	resolve(value);
} else {

	reject();
}
});

promise.
	then(function () {
		console.log('Success, Your Promise resolved !!');
	},

	// function () {
	// 	console.log('Error, Your Promise rejected with AN ERROR !!');
	// }
	error => console.log('Success, Your Promise ERRRRRRRRRRRRRRRR !!') // doesn't run
	).
	catch(function () {
		console.log('Some error has occurred');
	})
	.finally(function () {
		console.log('I WILL BE PRINTED FOREVER');
	});














// function test(x) {
//   while (x < 5) {
//     x++;
//   }
//   return x;
// }
// alert(test(2));

// (function () {
//   alert(typeof arguments);
//   return typeof arguments;
// })();

// function update(value) {
//   //Type the code here.
//   //   console.log(value);
//   document.getElementById("screen").value += value;
// }

// function result() {
//   //Type the code here.
//   //   document.getElementById("screen").value+=value;
// }

// function form_reset() {
//   //Type the code here.
//   document.getElementById("screen").value = "";
// }
