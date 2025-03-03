let express=require("express");
let app=express();
let path=require("path");
app.use(express.static(path.join(__dirname,"public")));

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

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));

var methodOverride = require('method-override');

app.use(methodOverride('_method'))
app.listen(3030,()=>{
    console.log("Server running on port 3030");
});
// app.get("/",(req,res)=>{
//     chatmodel.find().then((data)=>{
//         res.send(data);
//     }).catch((e)=>{     
//         res.send(e);    
// });
   
// });


app.get("/chats",async (req,res)=>{
let data= await chatmodel.find();
res.render("index",{data});
});
 

app.get("/chats/new",(req,res)=>{
    res.render("new");
});
app.post("/chats", (req,res)=>{
    let {to,from,message}=req.body;
    let ch=new chatmodel({
        to,
        from,
        message,
        date:new Date()
    });
    ch.save().then(()=>{
        res.redirect("/chats");
    }).catch((e)=>{
        res.send(e);
    });

});

app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let rec= await chatmodel.findById(id);
    res.render("edit",{rec});
    
})
app.put("/chats/:id", async (req,res)=>{
    let {id}=req.params;
    let {message}=req.body;
   
    let rec= await chatmodel.findByIdAndUpdate(id,{message});
    console.log(rec);
    res.redirect("/chats");
});
app.delete("/chats/:id", async (req,res)=>{
    let {id}=req.params;
    let rec= await chatmodel.findByIdAndDelete(id);
    
    res.redirect("/chats");
});