class Calculation{
    add(){
        console.log("no arg method")
    }
    add(num1){
        console.log("single arg method")
    }
    add(num1,num2){
        console.log("two arg method")
    }
}

var calc = new Calculation();

calc.add();
calc.add(10,20);
calc.add(19);