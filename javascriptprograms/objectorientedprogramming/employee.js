class Employee{
    constructor(eid, ename, desig, salary){
        this.eid = eid;
        this.ename = ename;
        this.desig = desig;
        this.salary = salary;
    }

    printEmp(){
        console.log(`eid = ${this.eid}`);
        console.log(`ename = ${this.ename}`);
        console.log(`designation = ${this.desig}`);
        console.log(`salary = ${this.salary}`);
    }
}

var emp1 = new Employee(1000,"ram", "dev", 25000)
emp1.printEmp()

var emp2 = new Employee(1001,"ravi", "mrkt", 26000)
emp2.printEmp()



