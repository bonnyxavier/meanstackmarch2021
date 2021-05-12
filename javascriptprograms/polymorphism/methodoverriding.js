class Parent{
    phone(){
        console.log("note 10 pro")
    }
}

class Child extends Parent{
    phone(){
        console.log("iphone")
    }
}

var ch = new Child();

ch.phone();