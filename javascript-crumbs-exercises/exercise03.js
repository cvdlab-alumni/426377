var i,j;
var s = "";
for (i = 1; i <= 10; i++){
	s += "\n";
	for (j = 1; j <= 10; j++){
		if (i === j){
		(j === 10) ? s =s + 1 + "\t" :  s = s + 1 + ",\t" ;
	}
	else {
		(j === 10) ? s =s + 0 + "\t" :  s = s + 0 + ",\t" ;
	}

	}
}
console.log(s);