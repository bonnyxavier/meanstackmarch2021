var num =3;

var res=0;
var i=1;
var sum=0;

while(i<=num){
    res=res*10+num;
    console.log(res);
    sum = res + sum;
    i++
}

console.log(sum);