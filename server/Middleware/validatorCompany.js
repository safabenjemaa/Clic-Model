
const {check, validationResult} =require ("express-validator")

exports.registreRules= () => 

[ 
  check ("name", "name's company is required").notEmpty().isString(),
  check ("gerant", "Gerant is required").notEmpty().isString(),
  check ("CIN", "CIN is required").notEmpty(),
  check ("adress", "Adress is required").notEmpty().isString(),
  check ("NumeroSiret", "NumeroSiret is required").notEmpty().isString(),
  check ("imageLink", "ImageLink is required").notEmpty(),


  check ("email", "Email is required").notEmpty(),
  check ("email", "Check email again").isEmail(),

  check ("password", "Password is required and must be plus 6 caracters").isLength({min: 6, max:20}),
  check ("phone", "Phone is required").isLength({min: 8}),
  
];

exports.loginRules= () => 
    
    [ check ("email", "Email is required").notEmpty(),
      check ("email", "Check email again").isEmail(),
    
      check ("password", "Password must be plus 6 characters").isLength({min: 6, max:20}),
    ];

exports.validation = (req,res,next)=> {

    const errors=validationResult(req)
    console.log(errors)
    if (! errors.isEmpty()) {

        return res.status(400).send({errors:errors.array().map(el=>({msg:el.msg}))})
    };
    next();

};