const { Schema, model } = require('mongoose');

const orderSchema = new Schema({}, { timestamps: true });

const Order = model('Order', orderSchema);

module.exports = Order;