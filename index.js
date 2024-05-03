const mongoose = require('mongoose');

main().then((res)=>{
    console.log("connect sucessful");
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

async function main() {   // it return the promise so that we can use the then method
    await mongoose.connect('mongodb://127.0.0.1:27017/test');  
}
let userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    sex:{
        type:String,
        required:true,
        enum:["male","female"],
    },
    education:{
        type:String,
        default:"college",
    }
})

const User=mongoose.model("User",userSchema);

const adnan=new User({
    name:"adnan",
    sex:"male",
});

// adnan.save().then((res)=>{
//     console.log("data is stored");
// })

// User.deleteOne({name:"adnan"}).then((res)=>{
//     console.log("deleted the element",res);
// })

// User.find({name:"adnan"}).then((res)=>{             // it return the array elements
//     console.log("your data",res)
// })

User.findById('663535246063a3879a821812').then((res)=>{     // it returns the one elements
    console.log("this is the data",res);
})
