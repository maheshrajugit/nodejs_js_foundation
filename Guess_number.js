const prompt = require("prompt-sync")();

let guess = 0;    //global variable declaration
let attempts= 10;  //global variable

let levels = ["Easy","Hard","Difficult"];
let attempts_level = [100,10,5];

var players = [];

let opt=0;

console.log("Guess The Number \n -----------------");

select_level();
choose_players();

















function choose_players()
{
    console.log("1. Play against computer\n2. 2 Players game");

    opt = prompt("Choose an Option : ");  //global variable - prompt input

    

    if(opt=='1')
    {
        guess = Math.floor(Math.random() * 100);
        take_names(opt);
        start_game(); 
        

    }
    else if(opt == '2')
    {
        take_names(opt)
        player1_start_game();   //function call
        start_game(); 

    }
}




   //function call

function take_names(option)
{
   
    let name = prompt("Enter Player 1 name : ");
    players.push(name);
    
    if(opt=='2')
    {
        players.push(prompt("Enter Player 2 name : "))
    }

    console.log(players);
}


function select_level()         //ES5 TypeScript function declaration  //arrow function
{
    console.log("Choose Level : \n");
    levels.forEach((item,index)=>{
        console.log(""+(index+1)+". "+levels[index]);
    })
    opt = prompt("select\t: ");
    attempts = attempts_level[parseInt(opt)-1]
    
}

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

    for(let i = attempts; i>0; i--)
    {   
        console.log("you have "+i+" attempts left\n ")
        let player2_input = prompt(opt=='1'?players[0]+" : ":players[1]+" : ");
        player2_input = parseInt(player2_input);
    
        if(player2_input == guess)
        {
            if(opt=='1')
            console.log(players[0]+" won!!!");
            else(opt=='2')
            console.log(players[1]+" won!!!");
            break;
        }
        else 
        {
            let hint='wrong';
            let d = abs(player2_input - guess);
            if(i>1)
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
                var player ="computer";
                if(opt=='1')
                {
                    
                }
                else if(opt=='2')
                {
                    player = players[0];
                }
                console.log(player,"won! :)");
                console.log(players[1],"lost! :(")
                console.log("The Guess Number is : ",guess);

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

