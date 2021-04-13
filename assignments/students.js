var students = [['Bonny', 85], ['James', 71], ['Johnny', 45], ['Smith', 75], ['Derek', 47]];

var Avgmarks = 0;

for (var i = 0; i < students.length; i++) {
    Avgmarks += students[i][1];
    var avg = (Avgmarks / students.length);
}

console.log("Average grade: " + (Avgmarks) / students.length);

if (avg < 45) {
    console.log("Grade : F");
}
else if (avg < 65) {
    console.log("Grade : D");
}
else if (avg < 75) {
    console.log("Grade : C");
} 
else if (avg < 80) {
    console.log("Grade : B");
} 
else if (avg < 100) {
    console.log("Grade : A");
}