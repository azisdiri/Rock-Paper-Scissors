var humanScore=0
var computerScore=0
var humanChoice
humanChoice = getHumanChoice()
console.log("human choice is :",humanChoice)
console.log("computer choice is :",getCumpterChoice())



function getCumpterChoice() {
    var x = Math.floor(Math.random()*3)
    if(x == 0)
        return("rock")
    else if(x == 1) return("paper")
    else return("scissors")
}

function getHumanChoice(){
var usr_input= prompt("rock paper scissors!!")
return usr_input.toLowerCase()
}

function playRound(humanChoice, computerChoice) { 

}
