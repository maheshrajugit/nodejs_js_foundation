const prompt = require("prompt-sync")();

let guess = 0;

console.log("Guess The Number \n -----------------");
guess = prompt("Player 1 enter a number to guess : ");
guess = parseInt(guess);

for(let i=0;i<15;i++)
{
    console.log("\n");
}

for(let i=1;i<=3;i++)
{   

    let player2_input = prompt("Player 2, Attempt -"+i+": ");
    player2_input = parseInt(player2_input);

    if(player2_input == guess)
    {
        console.log("Player 2 won!!!");
        break;
    }
    else 
    {
        if(i!=3)
        console.log("Wrong, try again")
        else
        console.log("Player 1 won!")
       continue;
    }

}

