/*Allan Tenenbaum */
function initialize(){
    canPlay = true;
    userInput = "";
    userAnswer = 0;
    firstInput = false;
    tries = 5;
    temperature = "";
    correctAnswer = randomNumGen();
    userTry = document.getElementById("user_guess");
    proximityStatus = document.getElementById("hot_or_cold");
    winText = document.getElementById("VictoryText");
    triesRemaining = document.getElementById("tries_remaining");
    document.getElementById("clear_or_reset").innerHTML = "Clear";
    display();
}

function userGuessInput(number) { /* user input is written by clicking buttons */
    String(number);
    if (firstInput == false){
        firstInput = true;
        userInput = "";
    }
    else{}
    userInput = userInput + number;
    display();
}

function display() {
    userTry.innerHTML = userInput;
    triesRemaining.innerHTML = tries;
    proximityStatus.innerHTML = temperature;	
}
			
function submit() {
    userAnswer = parseInt(userInput);
    answerCheck();
    display();
    inputClear();
}

function answerCheck(){
    
    if (userAnswer == correctAnswer){
        victoryCue();
    }
    else if (Math.abs(userAnswer - correctAnswer) <= 5){
        temperature = "Very Hot!!!";
    }
    else if (Math.abs(userAnswer - correctAnswer) <= 8){
        temperature = "Hot";
        tries = tries - 1;
    }
    else if (Math.abs(userAnswer - correctAnswer) <= 15){
        temperature = "Very Warm";
        tries = tries - 1;
    }
    else if (Math.abs(userAnswer - correctAnswer) <= 20){
        temperature = "Warm";
        tries = tries - 1;
    }
    else if (Math.abs(userAnswer - correctAnswer) <= 30){
        temperature = "Cool";
        tries = tries - 1;
    }
    else if (Math.abs(userAnswer - correctAnswer) <= 40){
        temperature = "Very Cool";
        tries = tries - 1;
    }
    else if (Math.abs(userAnswer - correctAnswer) <= 55){
        temperature = "Cold";
        tries = tries - 1;
    }
    else if (Math.abs(userAnswer - correctAnswer) >= 55){
        temperature = "Very Cold";
        tries = tries - 1;
    }
    else if(Math.abs(userAnswer - correctAnswer) = 0){
       victoryCue();
    }
    
    gameOverCheck();
}

function resetOrNewGame(){
    if (document.getElementById("clear_or_reset").innerHTML == "Clear"){
        userInput = "0";
        firstInput = false;
        document.getElementById("Victory").style.visibility = "hidden";
        display();
    }
    else if (document.getElementById("clear_or_reset").innerHTML == "Reset Game"){
        gameReset();
    }
}

function randomNumGen(){
    return parseInt(Math.random() * 100) + 1;
}

function victoryCue() {
    document.getElementById("Victory").style.visibility = "visible";
}

function gameReset(){
    userInput = "0";
    firstInput = false;
    document.getElementById("Victory").style.visibility = "hidden";
    document.getElementById("Loss").style.visibility = "hidden";
    userInput = "";
    userAnswer = 0;
    firstInput = false;
    tries = 5;
    temperature = "";
     /*correctAnswer = randomNumGen();*/
     correctAnswer = 12;
     document.getElementById("clear_or_reset").innerHTML = "Clear";
     correctAnswer = randomNumGen();  
    display();
}
function gameOverCheck(){
    if (tries == 0){
        canPlay = false;
        document.getElementById("Loss").style.visibility = "visible";
        document.getElementById("clear_or_reset").innerHTML = "Reset Game";
    }
    else if (document.getElementById("Victory").style.visibility == "visible") {
        document.getElementById("clear_or_reset").innerHTML = "Reset Game";    
    }
}
function inputClear(){
    userInput = "";
}