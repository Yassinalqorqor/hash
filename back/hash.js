const bcrypt= require('bcrypt');


function hachpaswered(password) {
    const hachpaswered= bcrypt.hash(password,10);
    return hachpaswered;
}


function comparepassword(password,hachedpassword){

    const result=bcrypt.compare(password,hachedpassword)
    return result;
}



module.exports.hachedpassword= hachpaswered
module.exports.comparepassword= comparepassword