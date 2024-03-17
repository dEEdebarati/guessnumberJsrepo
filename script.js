let high = 10;
let low = 1;
let correctAns = Math.floor(Math.random()*(high-low+1)+low);
console.log(`${correctAns}`);
let attempt = 3;
let temp = attempt;
function chekNumber(){
    let guess = parseInt(document.getElementById("guess").value);
    let showMessage = document.getElementById("message");
    if(isNaN(guess)||guess<low||guess>high){
        showMessage.textContent = "Please enter a numbet between 1 to 10";
        return;
    }
    temp--;
    if(guess === correctAns){
        showMessage.textContent = `Congrats!! You guessed the correct number!!`;
        resetGame();
    }
    else if(guess< correctAns){
        showMessage.textContent = `Correct answer is greater! `;
        // temp--;

    }
    else{
        showMessage.textContent = `Correct answer is smaller! `;
        // temp--;

    }
    if(temp===0){
        showMessage.textContent = `You lose!!`;
        resetGame();
    }
    function resetGame(){
        correctAns = Math.floor(Math.random()*(high-low+1)+low);
        temp= attempt;
        document.getElementById("guess").value = "";
        document.getElementById("message") = "";

    }


}