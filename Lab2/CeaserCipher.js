function ceasarCipher()
{
	var result = window.prompt("Enter the string to encode","");
	ciphertester(result);
}

function ciphertester(input)
{
console.log("original data: " + input);
var str = encode(input);
console.log("encoded data: " + str);
var str1 = decode(str);
console.log("decoded data: " + str1);
}

function encode(input)
{
	var a = "";
	for(var i = 0;i<input.length;i++)
	{
		var r = input.charCodeAt(i);
		a = a + String.fromCharCode((((r+3)-97)%26)+97);
	}
	return a;
}

function decode(str)
{
	var b = "";
	for(var i = 0;i<str.length;i++)
	{
		var r = str.charCodeAt(i);
		b = b + String.fromCharCode((((r-97)-3)+26)%26+97);
	}
	return b;
}
