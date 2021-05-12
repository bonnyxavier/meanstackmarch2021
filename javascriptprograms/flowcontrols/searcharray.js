var arr = [3,2,4,1]

var element = 6;
flag = 0;

arr.sort((i,j)=>i-j);
console.log(`The sorted array is ${arr}`)

var low=0
var upp=arr.length - 1
while(low <= upp){
    if(arr[low] + arr[upp] == element){
        flag = 1;
        break;
        
    }
    else{
        low = low + 1;
    }
}

if(flag > 0){
    console.log(`${arr[low]},${arr[upp]}`)
}





// 1 2 3 4 
// L     U

