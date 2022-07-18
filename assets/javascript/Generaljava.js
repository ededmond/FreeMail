//import {startGame} from "javascript/Introduction/game.js";
$( document ).ready(function() {
    $("#definitelyNotAGame").hide();
    // Handler for .ready() called.

    
  var emails = [{sender: "Emma Dedmond", title: "Introductions",date:new Date(),code:"Introduction"},
    {sender: "Emma Dedmond", title: "Lorem Ipsum",date:new Date(),code:"Default"},
    {sender: "Quinn Scott", title: "Test Email 2",date:new Date(),code:"Default"},
    {sender: "Emma Dedmond", title: "Trying out a long email name",date:new Date(),code:"Default"},
    {sender: "Emma Dedmond", title: "These are random placeholder emails",date:new Date(),code:"Default"}
];

function parseDate(date) {
    var today = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    console.log(year);
    if (today.getFullYear()-year!=0) {
        var fullDate = month + "/" + day + "/" + toString(year).charAt(2) + toString(year).charAt(3);
        console.log(fullDate);
        return fullDate;
    } else {
        if(today.getDate() - day ==0) {
            console.log(date.toLocaleTimeString('en-US'));
            return date.toLocaleTimeString('en-US');
        } else {
            switch(month) {
                case 1 : 
                    return "Jan" + " " + day;
                case 2 : 
                    return "Feb" + " " + day;
                case 3 : 
                    return "Mar" + " " + day;
                case 4 : 
                    return "Apr" + " " + day;
                case 5 : 
                    return "May" + " " + day;
                case 6 : 
                    return "Jun" + " " + day;
                case 7 : 
                    return "Jul" + " " + day;
                case 8 : 
                    return "Aug" + " " + day;
                case 9 : 
                    return "Sep" + " " + day;
                case 10 : 
                    return "Oct" + " " + day;
                case 11 : 
                    return "Nov" + " " + day;
                case 12 : 
                    return "Dec" + " " + day;
                default :
                    return "Yesterday";
            }
        }
    }
}



function printEmails() {
    var i =0;
    console.log("java loaded");
    emails.forEach(element => {
        var read = "read";
        if (Math.random() < 0.3) {
            read = "unRead";
        }
    var newEmail = `
    <tr class = "emails ${read}" data-id=${i} >
        <td class = "favbuttons ${read}"></td>
        <td class = "sender">${element.sender}</td>
        <td class= "title">${element.title}</td>
        <td class="date">${parseDate(element.date)}</td>
    </tr>`
        $("#actual-emails").append(newEmail);
        console.log(newEmail);
        i++;
    });
}

printEmails();

//open email/start game
$(".emails").on("click",function() {
    var i = $(this).data('id');
    console.log($(this));
    var game = emails[i];
    console.log(game);
    $(".email-table").hide();
    $("#definitelyNotAGame").show();
    $("#gameTitle").html(game.title);
    $("#gameSender").html(game.sender);

    //call game Code
    startGame();
    // var gamePath = "javascript/"+game.code + "/game.js";
    // $.getScript(gamePath,function() {
    //     $(document).ready(function(){
    //         startGame();
    //     })
    // })
    // import {startGame} from gamePath;
});



});