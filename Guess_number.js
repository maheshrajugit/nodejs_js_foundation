const prompt = require("prompt-sync")();

let guess = 0;
let attempts= 10;
console.log("Guess The Number \n -----------------");

console.log("1. Play against computer\n2. 2 Players game");

let opt = prompt("Choose an Option : ");

if(opt=='1')
{
    guess = Math.floor(Math.random() * 100);
}
else if(opt == '2')
{
    player1_start_game();   //function call
}


start_game();    //function call

function print_newlines()
{
    for(let i=0;i<10;i++)
    console.log("\n");
    
}


function player1_start_game()
{
    guess = prompt("Player 1 enter a number to guess between 0 and 100: ");
    guess = parseInt(guess);

    print_newlines();

    
}

function start_game()    //function defination 
{

    for(let i = attempts; i>=0; i--)
    {   
        console.log("you have "+i+" attempts left\n ")
        let player2_input = prompt("Player 2 : ");
        player2_input = parseInt(player2_input);
    
        if(player2_input == guess)
        {
            console.log("Player 2 won!!!");
            break;
        }
        else 
        {
            let hint='wrong';
            let d = abs(player2_input - guess);
            if(i!=0)
            {
                
                if(d<=5)
                hint = 'steps closer'
                else if(d>5 && d<=10)
                {
                    hint = 'near';
                }
                else if(d>10 && d<=25)
                {
                    hint = 'almost there'
                }
                else if(d>25 && d<=50)
                {
                    hint = 'far'
                }
                else if(d>50 && d<=80)
                {
                    hint = 'very far'
                }
                else if(d>80)
                {
                    hint = 'lite theesko'
                }
                     
                console.log(hint+", try again");
            }
            else
            {
                console.log("Player 1 won!");

            }
           continue;
        }
    

    }

}




function abs(num)
{
    if(num < 0)
    {
        num = num * -1;
    }
    else 
    {
        num = num;
    }

    return num;
}

// "steps closer" => d<=5
// "near" => d>5 and d<=10  
// "almost there" => d>10 and d<=25
// "far" => d>25 and d>50
// "very far" => d>50 and d<=80
// "lite theesko" => d>80

