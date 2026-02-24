const mongoose = require('mongoose');

const ZentoraTransactionSchema = new mongoose.Schema({
  orderID: { type: String, required: true, unique: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  statusLogs: [
    {
      action: String,       // Contoh: "Order Created", "Pick-up Confirmed"
      timestamp: { type: Date, default: Date.now },
      actor: String,        // Siapa yang melakukan (System, Seller, atau Buyer)
      ipAddress: String     // Profesional: Mencatat IP untuk keamanan/audit
    }
  ],
  pickupPin: { type: String, required: true }, // Unik: PIN rahasia untuk ambil barang
  escrowStatus: { type: String, enum: ['Held', 'Released', 'Refunded'], default: 'Held' }
});

module.exports = mongoose.model('Transaction', ZentoraTransactionSchema);
           
