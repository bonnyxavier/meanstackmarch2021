var arr=[7,3,6,2,8,1]

var element = 8;
flag = 0;

arr.sort((i,j)=>i-j)
console.log(arr);

var low = 0, upp=arr.length - 1;

while(low<=upp){
    let mid=Math.floor((low+upp)/2);
    if(element>arr[mid]){
        low = mid +1;
    }

    else if(element<arr[mid]){
        upp = mid - 1;
    }
    else if(element == arr[mid]){
        flag = 1
        break;
    }
}

if(flag > 0){
    console.log("found")
}

// 1, 2, 3, 6, 7, 8 
// 0 + 5 / 2 = 2
//8 > 3     low = 2 +1 = 3 = [6]

//3+5/2 = 4 