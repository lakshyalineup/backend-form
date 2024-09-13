const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.use('/api', require('./routes/userRoute'));
app.use('/api', require('./routes/cartRoute'));
app.use('/api/products', require('./routes/productRoutes'));

const PORT = process.env.PORT || 2312;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
