
const JwtStrategy = require("passport-jwt").Strategy;
const userModel= require("../models/userModel");
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require ("passport");



const opts = { 
jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
secretOrKey : process.env.secretKey,
};

passport.use(new JwtStrategy(opts, async (jwt_payload, done)=> {
try {
    const user= await userModel.findOne({_id: jwt_payload._id}).select("-password");
    user ? done(null, user) : done(null, false);
} catch (error) {
    console.log(error);

}
}) 
);

module.exports=isAuth= ()=> passport.authenticate("jwt", { session:false });