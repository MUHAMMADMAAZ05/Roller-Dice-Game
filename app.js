let player1=prompt("Enter a Name of Player 1").toUpperCase()
let player2=prompt("Enter a Name of Player 2").toUpperCase()
let currentscore1=0
let currentscore2=0
let totalscore1=0
let totalscore2=0
let currentplayer=true


if(!player1){
    document.querySelector("#pl1").innerHTML="Player1"
}else if(!player2){
    document.querySelector("#pl2").innerHTML="Player2"
}else{
    document.querySelector("#pl1").innerHTML=player1
    document.querySelector("#pl2").innerHTML=player2
}

document.querySelector(".totalscore1").innerHTML=totalscore1
document.querySelector(".totalscore2").innerHTML=totalscore2
document.querySelector(".score1").innerHTML=currentscore1
document.querySelector(".score2").innerHTML=currentscore2



function UpdateScoreOnUI(){
    document.querySelector(".score1").innerHTML=currentscore1
    document.querySelector(".score2").innerHTML=currentscore2
}



function switchPlayer(){
    currentplayer=!currentplayer
}

function rolldice(){
    let dice=Math.floor(Math.random()*6)+1
    document.querySelector("img").src=`./assects/${dice}.png`
    if (currentplayer) {
        if (dice != 1) {
            currentscore1 += dice;
        }
        else {
            currentscore1 = 0;
            switchPlayer();
        }
    }
    else {
        if (dice != 1) {
            currentscore2 += dice;
        }
        else {
            currentscore2 = 0;
            switchPlayer();
        }
    }
    UpdateScoreOnUI();

}

function hold(){
    if (currentplayer) {
        totalscore1 += currentscore1;
        currentscore1 = 0;
        document.querySelector(".totalscore1").innerHTML=totalscore1
        if (totalscore1 >= 100) {
            document.querySelector('.gamearea').innerHTML = `<h1>${player1} WIN </h1> <br/>`
        }
        else {
            switchPlayer();
        }
    }else{
        totalscore2 += currentscore2;
        currentscore2 = 0;
        document.querySelector(".totalscore2").innerHTML=totalscore2
        if (totalscore2 >= 100) {
            document.querySelector('.gamearea').innerHTML = `<h1>${player2} WIN </h1> <br/>`
        }
        else {
            switchPlayer();
        }
    }
    UpdateScoreOnUI();
}

function newgame(){
   location.reload()
   console.log("Chal")
}