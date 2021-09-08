var validate = {}
validate.postCreate = function(req, res, next){
    var errors = [];
    if(!req.body.name){
        errors.push("Name is required.");
    }
    if(!req.body.phone){
        errors.push("Phone number is required.");
    }
    if(errors.length){
        res.render("users/create",{
            errors: errors,
            value: req.body
        });   
        return;
    }
    next();
}

export default validate