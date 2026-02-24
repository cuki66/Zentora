router.post('/complete-pickup', async (req, res) => {
  const { orderID, inputPin } = req.body;
  const order = await Order.findOne({ orderID });

  if (order.pickupPin === inputPin) {
    // Dana dilepaskan dari Escrow ke Saldo Penjual
    await releaseFunds(order.seller, order.amount);
    
    // Update log transparansi
    order.statusLogs.push({ action: "Transaction Completed via Secure PIN", actor: "Buyer" });
    await order.save();
    
    res.status(200).json({ message: "Pick-up Sukses! Dana diteruskan ke penjual." });
  } else {
    res.status(400).json({ error: "PIN Salah. Keamanan Zentora terjaga." });
  }
});
  
