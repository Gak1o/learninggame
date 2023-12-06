//1.Deposit money
//2. collect bet amount
//3.determine number of lines to bet on
//4. spin the slot machine
//5. check window
//6. give user winnings 
//7. play again

const prompt = require("prompt-sync")();
    
const deposit = () => {
    while (true){ 
const depositAmount = prompt("Enter a deposit amount: ");
const numberDepositAmount = parseFloat(depositAmount);

if(isNaN(numberDepositAmount) || numberDepositAmount<=0  ){
    console.log("Invalid deposit amount, try again");
}else{
    return numberDepositAmount;
}
    }

};


//function to get number of lines
const getNumberOflines = () =>{
    while (true){ 
        const lines = prompt("Enter the number of lines to bet on(1-3): ");
        const numberOflines = parseFloat(lines);
        
        if(isNaN(numberOflines) || numberOflines<=0  || numberOflines >3){
            console.log("Invalid number of lines try again");
        }else{
            return numberOflines;
        }
            }




};

//function to get bet amount
const getBet = (balance, lines) =>{
    while (true){ 
        const bet = prompt("Enter the bet per line :");
        const numberBet = parseFloat(bet);
        
        if(isNaN(numberBet) || numberBet<=0  || numberBet > balance / lines){
            console.log("Invalid bet try again");
        }else{
            return numberBet;
        }
            }

}


let balance = deposit ();
const numberOflines = getNumberOflines();
const bet = getBet(balance, numberOflines);






