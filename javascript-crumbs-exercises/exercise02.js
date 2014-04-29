var i,j;
var s = "";
for (i = 1; i <= 10; i++){
	s += "\n";
	for (j = 1; j <= 10; j++){
		(j === 10) ? s =s + i*j + "\t" :  s =s + i*j + ",\t" ;
	}
}
console.log(s);