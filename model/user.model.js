import mongoose from 'mongoose'

var schema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    avatar: String,//path
});

var User = mongoose.model('User', schema, 'users');

export default User