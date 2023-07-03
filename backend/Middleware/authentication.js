const jwt=require("jsonwebtoken");

const authenticate = (req,res,next)=>{
    let token = req.headers.authorization;
    if(token){
        jwt.verify(token,"SECRET",(err,decoded)=>{
            if(decoded){
                console.log(decoded)
                next()
            }else{
                res.send({"msg":"Please Logg In"})
            }
        })
    }else{
        res.send({"msg":"Please Logg In"})
    }
}

module.exports=authenticate