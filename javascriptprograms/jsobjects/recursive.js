var text = "ABABCC";
var result = {}

for(let ch of text){
    if(ch in result){
        console.log(ch);
        break;
    }
    else{
        result[ch] = 1
    }

}