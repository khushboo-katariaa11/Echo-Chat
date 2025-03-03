const mongoose = require('mongoose');
async function connect(){
    await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
};

connect().then(()=>{
    console.log("Connected to database");
}).catch((e)=>{
    console.log(e);
});
let chatschema=require("./models/chat");
let chatmodel=mongoose.model("chat",chatschema);
chatmodel.insertMany([
    {
        message: "Hey Alex, did you finish the project?",
        to: "Alex",
        from: "Jordan",
        date: new Date()
    },
    {
        message: "Yeah, just submitted it! Let me know if you need any changes.",
        to: "Jordan",
        from: "Alex",
        date: new Date()
    },
    {
        message: "Thanks! By the way, are we meeting for coffee later?",
        to: "Alex",
        from: "Jordan",
        date: new Date()
    },
    {
        message: "Of course! 5 PM at the usual place?",
        to: "Jordan",
        from: "Alex",
        date: new Date()
    },
    {
        message: "Hey Mia, I loved your latest blog post! Great insights. 😊",
        to: "Mia",
        from: "Sophia",
        date: new Date()
    },
    {
        message: "Thanks a lot, Sophia! That means a lot to me. Have you started writing yours?",
        to: "Sophia",
        from: "Mia",
        date: new Date()
    },
    {
        message: "Not yet, but I'm planning to. Got any tips?",
        to: "Mia",
        from: "Sophia",
        date: new Date()
    },
    {
        message: "Just start writing! Don't overthink the first draft. 🚀",
        to: "Sophia",
        from: "Mia",
        date: new Date()
    },
    {
        message: "Hey Liam, are you coming to the game tonight?",
        to: "Liam",
        from: "Noah",
        date: new Date()
    },
    {
        message: "Of course! I wouldn’t miss it. Who else is coming?",
        to: "Noah",
        from: "Liam",
        date: new Date()
    },
    {
        message: "Emma and Ethan are in! Should be a great match.",
        to: "Liam",
        from: "Noah",
        date: new Date()
    },
    {
        message: "Awesome! Let’s grab some snacks before it starts.",
        to: "Noah",
        from: "Liam",
        date: new Date()
    }
]);


