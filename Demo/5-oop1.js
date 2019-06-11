var person = {
	fristname : "hoang",
	lastname  : "ben",
	hello  	  : function () {
		console.log("Welcome " + this.fristname + " " + this.lastname);
	}
}
person.hello();
console.log(person["lastname"]);