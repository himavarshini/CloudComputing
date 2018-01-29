function Find_r()
{
	alert("SpearmanCorrelation");
	var X = [24,26,28,23,30,34,35,38,40];
	var Y = [22,24,26,23,32,36,37,34,39];
	var S_X=0, S_Y=0, S_XY=0,S_X2=0, S_Y2=0;
	for(var i=0;i<X.length;i++){
		S_X+=X[i];
		S_Y+=Y[i];
		S_XY += (X[i] * Y[i]);
		S_X2 += (X[i] * X[i]);
		S_Y2 += (Y[i] * Y[i]);		 	
	}
	var r = ((X.length * S_XY) - (S_X * S_Y))/Math.sqrt(((X.length * S_X2)-(S_X * S_X))*((X.length*S_Y2)-(S_Y * S_Y)) )
	console.log(r);  
}
