import User from '../model/user.model.js';
import md5 from 'md5';

var authController = {}

//  /auth/login
authController.getLogin = function (req, res) {
    res.render('auth/login.pug');
}

authController.postLogin = async function (req, res) {
    var user = await User.findOne({email: req.body.email});
    if (user==null) {
        res.render('auth/login', {
            errors: [
                "Email not exist."
            ]
        });
        return;
    }
    //  exist user has email
    var hashPassword = md5(req.body.password);
    if(user.password!=hashPassword){
        res.render('auth/login',{
            errors: [
                "Password is wrong."
            ]
        });
        return;
    }
    
    res.cookie("userId", user.id, {
        signed:true
    });
    res.redirect("/users");
}

export default authController