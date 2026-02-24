const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number
  }],
  status: { 
    type: String, 
    enum: ['Pending', 'Confirmed', 'Processing', 'Ready for Pick-up', 'Completed'],
    default: 'Pending' 
  },
  // Fitur Transparansi: Timeline
  timeline: [{
    status: String,
    timestamp: { type: Date, default: Date.now },
    note: String
  }],
  pickupCode: { type: String, unique: true }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
