const {Schema, model} = require("mongoose");

const paymentMethodSchema = new Schema({
    number:{
        type: String,
        minLength: 16,
        maxLenght: 16,
        required: true    
    },
    expirationMonth:{
        type: String,
        minLength: 2,
        maxLenght: 2,
        required: true
    },
    expirationYear:{
        type: String,
        minLength: 2,
        maxLenght: 2,
        required: true
    },
    cvv:{
        type: String,
        minLength: 3,
        maxLenght: 3,
        required: true
    },
    emisor:{
        type: String,
        enum: ["visa", "mastercard", "amex"]
    }
}, {
    timestamps: true
})

const paymentMethod = ("PaymentMethod", PaymentMethodSchema)

module.exports = PaymentMethod