var moment = require('moment');
var math = require('mathjs');

console.log("i'm in index.js");
console.log(math.sqrt(-4));
console.log(moment("20241031", "YYYYMMDD").fromNow());

var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`)
console.log("goodbye");