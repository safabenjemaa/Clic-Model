const mongoose=require("mongoose");

const  Schema  = mongoose.Schema;

  const CompanySchema = new Schema({

    name: { type: "string" ,required: true },
    gerant: { type: "string" ,required: true },
    CIN: { type: "number" ,required: true },
    NumeroSiret : { type: "number" ,required: true },
    adress: {type: "string" ,required: true},
    phone : { type: "number" ,required: true },
    email : { type: "string" ,required: true },
    imageLink :{ type: "string" ,required: true },
    password : { type: "string" ,required: true },
    date: { type: "Date", default: Date.now },
    // state:{type:"string",default:"notAccepted"},
    // disponibility:{type:"string",default:"disponible"}
  });

  module.exports= mongoose.model("userCompany", CompanySchema);