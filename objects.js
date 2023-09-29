const prompt = require("prompt-sync")();
let a = [1,2,3,4];
let Users_obj = [
    {
        name:"Raju",
        age:27,
        email:"maheshraju@wibesapp.com",
        password:"password123"  
    },
    {
        name:"Aditya",
        age:25,
        email:"adityanakka07@gmail.com",
        password:"pass@123"
    }
];


ask_login_creds();



function ask_login_creds()
{
    let email_inp = prompt("Enter Email Address : ");

    let found_user;
    Users_obj.forEach((user)=>{
        let found = undefined;
        if(email_inp==user.email)
        {
            found_user = user;
        }
        else 
        {
            
        }
        
    });

    if(found_user!=undefined)
    {
        let pass_inp = prompt("Enter password");
        if(pass_inp == found_user.password)
        {
            console.log("Welcome, ",found_user.name);
        }
        else 
        {
            console.log("Incoreect password");
        }
    }
    else 
    {
        console.log("No user found! Register first!");
    }

}