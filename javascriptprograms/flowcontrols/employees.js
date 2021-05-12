var employees = [
    [1000,"ram","developer",2, 21000],
    [1001,"ravi","qa",2,22000],
    [1002,"rams","mrkt",3,23000],
    [1003,"ramd","developer",3,24000],
   
]

var count = 0

// for(let employee of employees){
//     if(employee[4]>=22000){
//         console.log(employee[1]);
//     }
// }

for(let employee of employees){
    if(employee[2]=="developer"){
        count = count+1;
    }

}

console.log(count);

