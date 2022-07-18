$( document ).ready(function() {
    // Handler for .ready() called.

    
  var emails = [{sender: "Emma Dedmond", title: "Introductions",date:new Date()},
    {sender: "Emma Dedmond", title: "Lorem Ipsum",date:new Date()},
    {sender: "Quinn Scott", title: "Test Email 2",date:new Date()},
    {sender: "Emma Dedmond", title: "Trying out a long email name",date:new Date()},
    {sender: "Emma Dedmond", title: "These are random placeholder emails",date:new Date()}
];


function printEmails() {
    var i =0;
    console.log("java loaded");
    emails.forEach(element => {
    var newEmail = `
    <div class = "emails">
        <div class = "Sender">${emails[i].sender}</div>
        <div class= "title">${emails[i].title}</div>
        <div class="date">${emails[i].date}</div>
    </div>`
        $("#email-section").add(newEmail);
        console.log(newEmail);
        i++;
    });
}

printEmails();



});