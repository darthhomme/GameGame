var twoRandomScores = function () {
    var score1 = Math.floor(Math.random()*10 + 1);
    var score2 = Math.floor(Math.random()*10 + 1);
    return score1 + score2;
};
twoRandomScores();

var randomScore = function(){
    var score1 = Math.floor(Math.random()*52 + 1);
    return "I got the score " + score1;
};
console.log(randomScore);
