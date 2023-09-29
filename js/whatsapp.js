$(document).ready()
{
    var active_index=2;




    var chatsDB= [
                 {
                    user_name:"Raja",
                    avatar_url:"../img/whatsapp/user-avatarjpg.jpg",
                    type:"receive",
                    msg:{
                        time:'23:51',
                        content:"ekkada ra",
                        r_status:"unread",
                        count:2
                    }
                 },
                 {
                    user_name:"Rani",
                    avatar_url:"../img/whatsapp/user-avatar2.jpg",
                    type:"sent",
                    msg:{
                        time:'23:32',
                        content:"night matladadaam",
                        r_status:"read",
                        count:0
                    }
                 },
                 {
                    user_name:"Aditya",
                    avatar_url:"../img/whatsapp/user-avatar3.jpg",
                    type:"sent",
                    msg:{
                        time:'23:51',
                        content:"Bro good news!!",
                        r_status:"unread",
                        count:0
                    }
                 },
                 {
                    user_name:"Bobby",
                    avatar_url:"https://storage.googleapis.com/pai-images/b9687888fa89400f8918b8ab43e2daed.jpeg",
                    type:"receive",
                    msg:{
                        time:'20:51',
                        content:"Bro start ayya",
                        r_status:"unread",
                        count:1
                    }
                 },
                 {
                    user_name:"Gowtham",
                    avatar_url:"https://i.pinimg.com/736x/34/e1/41/34e1410ac3adbf1bd3809b3e088749e0.jpg",
                    type:"receive",
                    msg:{
                        time:'19:51',
                        content:"HappyBirthday  &#127874;",
                        r_status:"unread",
                        count:3
                    }
                 },
                ]

    var callsDB = [
        {
            name:"Raja",
            time:"Today, 17:11",
            type:"missed",
            avatar:"../img/whatsapp/user-avatarjpg.jpg"
        },
        {
            name:"gowtham",
            time:"Today, 19:21",
            type:"outgoing",
            avatar:"https://i.pinimg.com/736x/34/e1/41/34e1410ac3adbf1bd3809b3e088749e0.jpg"
        },
        {
            name:"gowtham",
            time:"Today, 19:14",
            type:"incomming",
            avatar:"https://i.pinimg.com/736x/34/e1/41/34e1410ac3adbf1bd3809b3e088749e0.jpg"
        },
    ]

    page_select(active_index);
    addChats();
    addCalls();


    function addCalls()
    {

        callsDB.forEach((call_obj)=>{
            let final = createCallsTile(call_obj);
            $("#calls-list-holder").append(final);
        });


    }

    function createCallsTile(obj)
    {
        let template = '<div class="create-call-tile calls-tile"><div class="left">'+
          '<div style="background-image:url(\''+obj.avatar+'\')" class="icon">'+
          '</div></div><div class="right"><div class="title">'+
            obj.name+
          '</div><div class="desc">'+
          '<span>'+ 
          '<svg class="'+obj.type+'"'+
          ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M4 12L8 8M4 12L8 16" '+
          'stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'+
          
            obj.time+ '</span>'+
          '</div></div><div class="right-end"><div class="icon">'+
            '<img src="./img/whatsapp/call-icon.svg" alt="call">'+
          '</div></div></div>';
        return template;
    }
    

    function page_select(index)
    {
        let selector =".header-item:nth-child("+index+")"
        $(selector).addClass("active");
        selector =".header-item:nth-child("+active_index+")"
        if(active_index!=index)
        $(selector).removeClass("active");
        console.log($(selector));
        active_index = index;


        if(active_index==1)
        {
            $("#chat-list").addClass("hide");
            $("#status-container").addClass("hide");
            $("#calls-container").addClass("hide");
            $("#groups-container").removeClass("hide");
        }
        else if(active_index==2)
        {
            $("#chat-list").removeClass("hide");
            $("#status-container").addClass("hide");
            $("#calls-container").addClass("hide");
            $("#groups-container").addClass("hide");
        }
        else if(active_index==3)
        {
            $("#chat-list").addClass("hide");
            $("#status-container").removeClass("hide");
            $("#calls-container").addClass("hide");
            $("#groups-container").addClass("hide");
        }
        else if(active_index==4)
        {
            $("#chat-list").addClass("hide");
            $("#status-container").addClass("hide");
            $("#calls-container").removeClass("hide");
            $("#groups-container").addClass("hide");
        }

    }

    function addChats()
    {
        console.log("adding");

    chatsDB.forEach((obj)=>{
        let final = createChatItem(obj);
        console.log(final);
        $("#chat-list").append(final);

    })

    }

    function createChatItem(object)
    {
        var template = "<div class='chat-list-item "+object.type+"'>"+
    '<div class="avatar-holder">'+
    '<div class="avatar" style="background-image:url(\''+
                                    object.avatar_url+'\')">'+
    '</div></div><div class="info-holder">'+
    '<div class="top">'+
    '<div class="user-name">'+
                          object.user_name+
                       "</div>"+
                       '<div class="time">'+
                           object.msg.time+
                       '</div></div><div class="bottom"><div class="msg-content '+object.msg.r_status+'">'+
                       '<div class="read-receipts"><div class="icon">'+
                                   '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">                         <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2.305,11.235a1,1,0,0,1,1.414.024l3.206,3.319L14.3,7.289A1,1,0,0,1,15.7,8.711l-8.091,8a1,1,0,0,1-.7.289H6.9a1,1,0,0,1-.708-.3L2.281,12.649A1,1,0,0,1,2.305,11.235ZM20.3,7.289l-7.372,7.289-.263-.273a1,1,0,1,0-1.438,1.39l.966,1a1,1,0,0,0,.708.3h.011a1,1,0,0,0,.7-.289l8.091-8A1,1,0,0,0,20.3,7.289Z"></path></g></svg>'+
                               "</div></div>"+
                           "<span>"+object.msg.content+"</span>"+
                           '</div><div class="msg-status"><div class="bubble">'+
                               '<div class="count">'+
                                   +parseInt(object.msg.count)+
                               '</div>'+
                               "</div></div></div></div>"+"</div>"
        return template;
    }
}