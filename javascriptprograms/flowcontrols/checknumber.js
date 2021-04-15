var arr=[1,2,3,4]
var flag = 0;

var num = 3;

for(let i of arr){
    if(i==num){
        flag = 1;
        break;
    }
}

if(flag>0){
    console.log("element found");
}
else{
    console.log("not found")
}