var str = "I am Tejas Patel";

/**
 * Using in-built functions
 * 
 * @param {String} str 
 * @returns reversed String
 */
function reverse1(str) {
    return str.split("").reverse().join("");
}
console.log('reverse1 = ', reverse1(str));

/**
 * Using For Loop
 * 
 * @param {String} str 
 * @returns reversed String
 */
function reverse2(str) {
    var reversedStr = ""
    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr = reversedStr + str[i];
    }
    return reversedStr;

}
console.log('reverse2 = ', reverse2(str));


/**
 * Usign Recursion
 * 
 * @param {String} str 
 * @returns reversed String
 */
function reverse3(str) {
    if (str == "") return "";
    return reverse3(str.substr(1)) + str.charAt(0);
}
console.log('reverse3 = ', reverse3(str));



























