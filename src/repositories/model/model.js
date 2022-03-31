const mongoose = require('mongoose');
const { Schema } = mongoose;

const balanceSchema = new Schema({
    _id: String,
    description: String,
    price: Number,
    category: String,
    paymentType: String,
    operationType: String,    
}, {
    timestamps: {} 
});

const balance = mongoose.model('balance', balanceSchema); // modelo do mongoose (ORM que vai direto no mongo)

module.exports = {
    balance
};