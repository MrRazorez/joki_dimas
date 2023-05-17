const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const Product = require('../model/Product');
const upload = require('../src/upload');

router.get('/api/products', async function(req, res) {
  try {
    const products = await Product.find();
    res.json({product: products});
  } catch {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
});

router.get('/api/image/:filename', function(req, res) {
  const filename = req.params.filename;
  const filePath = path.join('./uploads/', filename);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Terjadi kesalahan server' });
    } else {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.end(data);
    }
  });
});

router.post('/api/products', upload.array('images', 5), async (req, res) => {
  try {
    const { name, description, price, lokasi } = req.body;
    const images = req.files.map((file) => file.filename);

    const product = new Product({
      _id: new mongoose.Types.ObjectId().toString(),
      name,
      image: images[0],
      images,
      description,
      price,
      lokasi,
    });

    await product.save();
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
});

module.exports = router;
