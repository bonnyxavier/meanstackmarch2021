// var employees = [
//     [1000,"ram","dev",2,20000],
//     [1001,"rav","mrkt",2,30000],
//     [1001,"new","dev",2,30000]

// ]

// count = 0 ;
// for(let employee of employees){
//     if(employee[2]=="dev"){
//         count+=1;
//     console.log(employee[1])
//     }
// }

// console.log(count)


//--------------------------------------------------------------------------------------------------

// var student= {
//     name:"bonny",
//     rollno:21,
//     year: 4,
// }

// console.log(student.year);
// if("gender" in student==false){
//     student.gender="male"
//     console.log(student)
// }

// student.age = "23";
// console.log(student)

// var student = {
//     name:"vinu",
//     rol:100,
//     course:"bca",
//     total_marks:150
// }

// console.log(student.name);
// console.log("grade_key" in student);
// student.grade="bplus";
// student.total_marks += 50;
// console.log(student);

//---------------------------------------------------------------------------------------------------------------------------------


// var ipl=[
//     {team_name:"rcb",mp:2,won:2,los:0,pts:4},
//     {team_name:"mi",mp:2,won:1,los:1,pts:2},
//     {team_name:"pb",mp:1,won:1,los:0,pts:2},
//     {team_name:"dc",mp:2,won:1,los:1,pts:2},
//     {team_name:"rr",mp:2,won:1,los:1,pts:2},
//     {team_name:"kkr",mp:2,won:1,los:1,pts:1},
//     {team_name:"srh",mp:2,won:0,los:2,pts:0},
//     {team_name:"csk",mp:1,won:0,los:1,pts:0},

// ]

// console.log(ipl[0]);

// var highest_point = 0;

// for(let team of ipl){
//     for(i=0;i<=highest_point;i++){
//         if(team.pts>highest_point){
//             var highest_point = team.pts
//         }
//     }
// }

// console.log(highest_point);


//----------------------------------------------------------------------------------------------------------------------


// var text = "hello hai hello hai";
// var words = text.split(" ")
// console.log(text)
// console.log(words);
// var result = {};

// for(let word of words){
//     if(word in result){
//         result[word]+=1
//     }
//     else(
//         result[word]=1
//     )
// }

// console.log(result);


// var text = "ABABCC"
// var result ={}
// for(let ch of text){
//     if(ch in result){
//         result[ch]=1
//         if(result[ch]>1){
//             console.log(result)
//         }
//     }
//     else{
//         result[ch]=1
//     }
// }


var arr = [1,2,3,4,5,6]

// var cubed = arr.map(num => num**3)

// console.log(cubed)

var eve_no = arr.filter(num=>num%2==0)
console.log(eve_no)