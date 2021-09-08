import User from '../model/user.model.js'
 
var userController = {}
//  /user
userController.index = async function(req,res){
    var users = await User.find();
    res.render("users/index",{
        users: users
    });
}
//  /user/search
userController.search = async function(req,res){
    var input = req.query.key;
    var users = await User.find();
    var userFilter = users.filter((user)=>{
        return user.name.toLowerCase().indexOf(input)!==-1 ||
                user.phone.indexOf(input)!==-1;
    });
    res.render('users/index',{
        users:userFilter
    });
}
//  /user/create
userController.getCreate = function(req,res){
    res.render("users/create");
}
userController.postCreate = async function(req,res){
    var pathImage = req.file.path.split("/").slice(1).join("/");
    var newUser = {
        name: req.body.name,
        phone: req.body.phone,
        avatar: pathImage
    };
    await User.create(newUser);
    res.redirect('/users');
}
//  /user/id
userController.getId = async function(req,res){
    var id = req.params.id;
    //result return a array ~ filter
    var user = await User.find({_id:id});
    res.render('users/view',{
        user: user[0]
    });
}

export default userController
