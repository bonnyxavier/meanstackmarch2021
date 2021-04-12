var lowlimit = 5;
var upplimit= 25;
var result = 0; 

for(i=lowlimit; i<upplimit; i++){
    var flag = 0;
    for(let i=2; i<upplimit; i++){
        if(num%i==0){
            flag=1;
            break;
        }
    }
    if(result>lowlimit && result<upplimit && flag != 1){
        console.log(sum);
    }
}