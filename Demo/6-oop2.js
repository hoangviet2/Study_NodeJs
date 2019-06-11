function khoahoc(name,money) {
	this.Name = name;
	this.Money = money;
}
khoahoc.prototype.Description = function() {
	console.log("hello " + this.Name + " " + this.Money);
}
var nodejs = new khoahoc("lap trinh nodeJS",1000000)
nodejs.Description();