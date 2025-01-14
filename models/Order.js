const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    products: [{ productId: { type: Schema.Types.ObjectId, ref: 'Product' }, quantity: Number }],
    status: { type: String, enum: ['recibida', 'entregado'], default: 'recibida' },
    total: Number
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
