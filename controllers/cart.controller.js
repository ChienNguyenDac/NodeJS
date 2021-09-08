import Session from '../model/session.model.js'

var cartController = {}

cartController.addToCart = async function(req,res){
    var sessionId = req.signedCookies.sessionId;
    var productId = req.params.id;
    //get value if exist else default 0
    var session = await Session.findOne({_id: sessionId});
    if(!session.cart)
        session.cart = {};
    if(!session.cart[productId])
        session.cart[productId]=1;
    else
        session.cart[productId]++;
    //change number product +1
    await Session.updateOne({_id: sessionId}, session);
    res.redirect('/products');
}

export default cartController