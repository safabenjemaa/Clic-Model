
const {check, validationResult} =require ("express-validator")

exports.registreRules= () => 

[ check ("name", "Name is required").notEmpty().isString(),
  check ("lastName", "LastName is required").notEmpty().isString(),
  check ("age", "Age is required").notEmpty(),
  check ("CIN", "CIN is required").notEmpty(),

  check ("email", "Email is required").notEmpty(),
  check ("email", "Check email again").notEmpty().isEmail(),

  check ("password", "Password is required and must be plus 6 caracters").notEmpty().isLength({min: 6, max:20}),
  check ("phone", "phone is required").notEmpty().isLength({min: 8}),
  check ("imageLink", "ImageLink is required").notEmpty(),
  check ("instagramLink", "InstagramLink is required").notEmpty(),
  check ("personLength", "PersonLength is required").notEmpty().isLength({min: 3, max:4}),
  check ("personWeight", "PersonWeight is required").notEmpty().isLength({max:2})

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