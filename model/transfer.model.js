import mongoose from 'mongoose'

var schema = new mongoose.Schema({
    accountId: String,
    amount: Number,
    userId: String
});

var Transfer = mongoose.model('Transfer', schema, 'transfer');

export default Transfer