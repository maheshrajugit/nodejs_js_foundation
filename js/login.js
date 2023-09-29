$(document).ready()
{
    let email,pass;

    var dataBase = [
        {
            name:"aditya",
            age:25,
            email:"aditya.nakka07@gmail.com",
            password:"pass@123"
        },
        {
            name:"Mahesh raju",
            age:27,
            email:"xdeadskull@gmail.com",
            password:"pass_123"
        },
        {
            name:"Bobby",
            age:26,
            email:"bobby007@gmail.com",
            password:"pass-123"
        },
    ]
   
    $("#btn").click(function(){
        email = $("#email_input").val();
        pass = $("#password_input").val();

        check_creds(email,pass);
    });


    $("#email_input").blur(function(){
        email = $("#email_input").val();
        pass = $("#password_input").val();
        check_creds(email,pass);
    });




    function check_creds(email,pass)
    {
        let Email = email;
        let Pass = pass;
        dataBase.forEach((user)=>{  
            if(user.email == Email)
            {
                found = true;
                $(".error-container")[0].style.display = "none";
                if(user.password == Pass)
                {
                    
                    window.location = "./welcome.html";
                    return user;
                }
                else 
                {
                    
                    console.log("password incorrect");
                    $(".error-container")[0].style.display = "flex";
                    $(".error-container")[0].innerHTML = "<span>Password is incorrect</span>";
                    return {error: "wrong pass", code:404};
                }
               
            }
            else 
            {
               found = false;
              
            }
        });

        console.log("found",found);
        if(found==false)    
        {
            $(".error-container")[0].style.display = "flex";
            $(".error-container")[0].innerHTML = "<span>User Not Found. Register</span>";
        }
    }

    

}