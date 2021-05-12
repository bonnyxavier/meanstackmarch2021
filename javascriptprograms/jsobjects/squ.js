var employees=[
    {eid:1000,ename:"ajay",salary:25000, desig:"developer"},
    {eid:1001,ename:"vjay",salary:26000, desig:"qa"},
    {eid:1002,ename:"ram",salary:24000, desig:"developer"},
    {eid:1003,ename:"ravi",salary:22000, desig:"mrkt"}

]

// var ename=employees.map(emp=>emp["ename"].toUpperCase())
// console.log(ename);

// var salary=employees.map(sal=>sal["salary"])
// console.log(salary);

// var emp = employees.filter(emp=>emp.salary>25000)
// console.log(emp)

var devops = employees.filter(emp=>emp.desig=="developer").map(obj=>obj.ename)
console.log(devops)

// var emp=employees.reduce((emp1,emp2)=>emp1.salary>emp2.salary?emp1:emp2)
// console.log(emp)

// var lowsal=employees.reduce((emp1,emp2)=>emp1.salary1<emp2.salar2?emp1:emp2)
// console.log(lowsal)

