
var randomNumber = function(min, max) {
    return Math.floor(Math.random() *(max-min+1)+min);
}
var matchScore = 0;
var totalScore = 0;
var wins = 0;
var loses= 0;

var crystal = {
    pink: {
        value : 0
    },
    blue: {
        value : 0
    },
    purple: {
        value : 0
    },
    silver: {
        value : 0
    }

}

var startGame = function(){

    totalScore = 0;

    matchScore = randomNumber(19, 120);
    $("#randomNumber").html(matchScore);

    crystal.pink.value = randomNumber (1, 12);

    crystal.blue.value = randomNumber (1, 12);
    
    crystal.purple.value = randomNumber (1, 12);

    crystal.silver.value = randomNumber (1, 12);

}
var restart = function(){
    
if (totalScore === matchScore){
    
    wins++ ;

    $("#wins").html("Wins: " + wins);

    startGame();
}
if (totalScore > matchScore){
    loses++ ;
    
    $("#losses").html("Losses: " + loses);

    startGame();
}
}


$("#pinkCrystal").click(function(){
    
    $("#totalScore").html(totalScore + crystal.pink.value)
    totalScore = totalScore + crystal.pink.value;
    restart();
});
$("#blueCrystal").click(function(){
    $("#totalScore").html(totalScore + crystal.blue.value)
    totalScore = totalScore + crystal.blue.value;
    restart();
});
$("#purpleCrystal").click(function(){
    $("#totalScore").html(totalScore + crystal.purple.value)
    totalScore = totalScore + crystal.purple.value;
    restart();
});
$("#silverCrystal").click(function(){
    $("#totalScore").html(totalScore + crystal.silver.value)
    totalScore = totalScore + crystal.silver.value;
    restart();
});

startGame();
