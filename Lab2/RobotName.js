function doSomething()
{
	var s="";
	var a = String.fromCharCode(Math.floor(Math.random() * (90- 65 + 1)) + 65);	
	var b = String.fromCharCode(Math.floor(Math.random() * (90- 65 + 1)) + 65);	
	s=a+b;
	s = s + (Math.floor(Math.random() * (999- 100 + 1)) + 100);	
	console.log(s);
}
function RobotName()
{
	 setInterval(doSomething,30000);
}
