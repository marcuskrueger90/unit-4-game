
function randomNumber(min, max) {
    return Math.floor(Math.random() *(120-19+1)+19);

}
$("#randomNumber").html("<p>"+ randomNumber() + "</p>");

function randomDiamondNumb (min, max) {
    return Math.floor(Math.random()*(12-1+1)+1);
}
