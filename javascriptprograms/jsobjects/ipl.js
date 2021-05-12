var ipl=[
    {team_name:"rcb",mp:2,won:2,los:0,pts:4},
    {team_name:"mi",mp:2,won:1,los:1,pts:2},
    {team_name:"pb",mp:1,won:1,los:0,pts:2},
    {team_name:"dc",mp:2,won:1,los:1,pts:2},
    {team_name:"rr",mp:2,won:1,los:1,pts:4},
    {team_name:"kkr",mp:2,won:1,los:1,pts:1},
    {team_name:"srh",mp:2,won:0,los:2,pts:0},
    {team_name:"csk",mp:1,won:0,los:1,pts:0},

]


for(let team of ipl){
    console.log(team.team_name)
}

console.log(ipl[0])

var highest = 0;


for(let team of ipl){
    for(i=0; i<=highest; i++){
        if(team.pts>highest){
            var highest = team.pts
        }
    }
}

console.log(highest);