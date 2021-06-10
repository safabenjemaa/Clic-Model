const mongoose=require("mongoose");

const  Schema  = mongoose.Schema;

  const UserSchema = new Schema({

    name: { type: "string" ,required: true },
    lastName: { type: "string" ,required: true },
    age :{type: "string" ,required: true},
    CIN: { type: "number" ,required: true },
    email : { type: "string" ,required: true },
    password : { type: "string" ,required: true },
    phone : { type: "number" ,required: true },
    imageLink :{ type: "string" ,required: true },
    instagramLink : { type: "string" ,required: true },
    personLength: { type: "number" ,required: true },
    personWeight : { type: "number" ,required: true },
    Rating : { type: "number" },
    date: { type: "Date", default: Date.now },
    // state:{type:"string",default:"notAccepted"},
    // disponibility:{type:"string",default:"disponible"}
  });

  module.exports= mongoose.model("userModel", UserSchema);