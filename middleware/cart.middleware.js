import Session from "../model/session.model.js";

var cartMiddleware = {}

cartMiddleware.createSessionId = async function(req, res, next){
    var count = "";
    //not exist a session for user to shop
    if(!req.signedCookies.sessionId){
        //create new session
        var newSession = await Session.create({
            cart: {}
        });

        res.cookie('sessionId', newSession._id, {signed:true});
    }
    else{
        count=0;
        var session = await Session.findOne({_id: req.signedCookies.sessionId});
        for(var i in session.cart)
            count+=session.cart[i];
        res.locals.countProduct = count;
    }
    next();
}


export default cartMiddleware