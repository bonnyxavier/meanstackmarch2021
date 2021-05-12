class Parent{
    m1(){
        console.log("inside parent")
    }
}

class Child1 extends Parent{
    m2(){
        console.log("inside child 1")
    }
}

class Child2 extends Child1{
    m3(){
        console.log("inside child 2")
    }
}


var ch = new Child2();

ch.m1()

var ch1 = new Child1();

ch1.m1()

