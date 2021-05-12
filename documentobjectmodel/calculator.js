function displayBox(num){
    inpt.value+=num;
}

function evaluateExpression(){
    var res=inpt.value;
    let answer=eval(res);
    inpt.value=answer;
}

function clearBox(){
    inpt.value=" ";
}

function cancelElement(){
    inpt.value=inpt.value.slice(0,-1)
}