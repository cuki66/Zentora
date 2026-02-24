const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Simulasi Route Utama
app.get('/', (req, res) => {
  res.send('Shop Order Pick-up API is Running - Transparent & Professional');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
        
