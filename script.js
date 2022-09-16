const score = document.getElementById("Score")
const Dice = document.getElementById("Dice")
const rollbutton = document.getElementById("rollbutton")
const winlose = document.getElementById("WinLose")

let currentScore = 0
let currentWins = 0

function win_lose(){
    if (currentScore >= 21) {
        currentWins ++ 
        currentScore = 0
        winlose.innerHTML = "You Win!"
    }
    else (winlose.innerHTML = "You Lose!")
}


rollbutton.addEventListener("click", () =>{
    const roll_dice = Math.floor(Math.random() *6 + 1)
    Dice.src = `diceImages/dice${roll_dice}.png`
    if (roll_dice ==1) {
        win_lose()
        currentScore = 0
    }
    else if (roll_dice != 1){
        currentScore += roll_dice
        score.innerHTML = `${currentScore}`
    }
    else if(currentScore >= 21 ) {
        win_lose()
        currentScore = 0
    }
})