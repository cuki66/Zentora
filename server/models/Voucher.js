const voucherSchema = new mongoose.Schema({
  code: { type: String, unique: true, uppercase: true },
  discountType: { type: String, enum: ['Fixed', 'Percentage'] },
  value: Number,
  minPurchase: Number,
  usageLimit: Number,
  usedCount: { type: Number, default: 0 },
  expiredAt: Date
});
    
