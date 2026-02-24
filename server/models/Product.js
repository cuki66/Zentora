const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  // Fitur Shopee: Varian
  variants: [{
    name: String, // misal: "Warna" atau "Ukuran"
    options: [String], // misal: ["Merah", "Biru"] atau ["XL", "L"]
    stock: Number
  }],
  flashSale: {
    isDiscount: { type: Boolean, default: false },
    discountPrice: Number,
    expiryDate: Date
  }
}, { timestamps: true });
  
