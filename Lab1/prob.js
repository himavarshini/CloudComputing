function prob1()
{
    alert("This is prob1");
    var i;
    for(i=0;i<=15;i++){
	if(i%2 === 0){
		console.log(i + " is even");	
}
	else
		console.log(i+ " is odd");
    }
}
function prob2(){
	var str = window.prompt("Enter the string",'the quick brown fox');
	var i=0;
	var modif='';
	modif = modif + str.charAt(0).toUpperCase();	
	for(i=1;i<str.length;i++){
		if(str.charAt(i) == ' '){
			modif = modif + ' ' +  str.charAt(i+1).toUpperCase();i++;		
		}
		else
			modif = modif + str.charAt(i);
	}
	console.log(modif);
}
function prob3(){
	var b=1,n=0;
	var result = window.prompt("Enter the value of b",1);
	b=parseInt(result);	
	result = window.prompt("Enter the value of n", 0);
	n=parseInt(result);
	console.log(Math.pow(b,n));	
}

function prob4(){
	var b=2;
	var result = window.prompt("Enter the number",2);
	b=parseInt(result);
	var i=2,flag=0;
	for(i=2;i<=(b/2);i++){
		if((b%i)===0){
			console.log(b + " is not prime");flag=1;break;
		}	
	}
	if(flag === 0)
		console.log(b + " is prime");
}

function prob5(arg1){
	var r=0;
	if(arg1==0 || arg1 == 1){
		return arg1;
	}
	else{
		r = prob5(arg1-1)+prob5(arg1-2);
console.log("N= "+arg1 + " Value= " + r);		
		return r;
	}
	
}
