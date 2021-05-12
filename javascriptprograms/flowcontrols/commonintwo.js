var arr1 = [10, 20, 30, 40,21];
var arr2 = [9, 10 , 20, 21, 22,];

var arr3 = [];

for(i = 0; i<arr1.length; i++){
    for(j = 0; j<arr2.length; j++){
        if(arr1[i]==arr2[j]){
            arr3.push(arr1[i]);
        }
    }
}

console.log(arr3)