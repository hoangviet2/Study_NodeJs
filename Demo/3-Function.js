function sum(a,b) {
	return a + b;
}
var x = sum(5,6);
console.log(x);
///////////////
function hello(){
	console.log("hello");
}
function callfunc(fn){
	fn();
}
callfunc(hello);
//////////////
var tong = function(){
	console.log("lap trinh Node.js");
}
tong();