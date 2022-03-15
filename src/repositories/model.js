const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid')
const { Schema } = mongoose;

const balanceSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4()
    },
    descripition: String,
    price: Number,
    category: String,
    paymentType: String,
    operationType: String,    
}, {
    timestamps: {} 
});

const balance = mongoose.model('balance', balanceSchema);

module.exports = {
    balance
};