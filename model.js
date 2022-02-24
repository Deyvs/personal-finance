const mongoose = require('mongoose');
const { Schema } = mongoose;

const balanceSchema = new Schema({
    descripition:String,
    price: Number,
    category: String,
    paymentType: String,
    operationType: String,
    createdAt: Date
});

const balance = mongoose.model('balance', balanceSchema);

module.exports = {
    balance
};