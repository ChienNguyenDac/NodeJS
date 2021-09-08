import Transfer from "../model/transfer.model.js";

var transferController = {}

transferController.create = function(req, res){
    res.render("transfer/create.pug",{
        csrfToken:  req.csrfToken
    });
}

transferController.postCreate = async function(req, res){
    var data = {
        accountId: req.body.accountId,
        amount: parseInt(req.body.amount),
        userId: req.signedCookies.userId
    }
    await Transfer.create(data);
    res.redirect('/transfer/create');
}

export default transferController