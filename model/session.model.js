import mongoose from 'mongoose'

var schema = new mongoose.Schema({
    cart: Object
});

var Session = mongoose.model('Session', schema, 'session');

export default Session