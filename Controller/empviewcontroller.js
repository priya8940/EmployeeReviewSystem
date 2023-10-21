module.exports.views=function(req,res){
    return res.end('<h1>EXpress is up for EMPVIEWS</h1>');
}
module.exports.login=function(req,res){
    return res.render('userLogin');
}
module.exports.doLogin=function(req,res){
    //get email and password from req.body
       const {email,password}=req.body;
       console.log(email);
       console.log(password);
    //find user by email


    //if user not found then redirect to user register page
    
    
    //else match passwords



    //if password matches then succesfully login 

    //else show massege wrong password
    return res.render('userLogin');
}