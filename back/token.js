            const jwt=require('jsonwebtoken')

            function creattoken(data){
                try{
                    const token=jwt.sign(data,"kmuyqwue@#$%&&.qiwzk.ij",{expiresIn : '1h'})
                return token;  
                }
                catch{
                    return"cannt creat a token"
                }
              
            }
            function decrypttoken(token){
                try{
                    const data=jwt.verify(token,"kmuyqwue@#$%&&.qiwzk.ij")
                    return data;
                }
           catch{
            return"cannot dycrypt the token"
           }
            }

            
module.exports.creattoken= creattoken
module.exports.decrypttoken= decrypttoken