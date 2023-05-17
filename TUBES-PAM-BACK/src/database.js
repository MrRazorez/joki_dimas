const mongoose = require('mongoose');

// URL koneksi ke MongoDB
const mongoURI = 'mongodb://127.0.0.1:27017/TUBES-PAM-DATABASE'; // Ganti nama_database dengan nama database Anda

// Membuat koneksi ke MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB terhubung');
  })
  .catch((err) => {
    console.error('Kesalahan koneksi MongoDB:', err);
  });

// Setelah koneksi berhasil, simpan instance koneksi dalam variabel
const db = mongoose.connection;

// Tangkap event "disconnected" untuk memutus koneksi
db.on('disconnected', () => {
  console.log('Koneksi ke MongoDB terputus');
});

// Fungsi untuk memutus koneksi dari MongoDB
const disconnectFromMongoDB = () => {
  mongoose.disconnect()
    .then(() => {
      console.log('Terputus dari MongoDB');
      process.exit(0); // Keluar dari proses aplikasi dengan kode status 0
    })
    .catch((err) => {
      console.error('Kesalahan saat memutus koneksi dari MongoDB:', err);
      process.exit(1); // Keluar dari proses aplikasi dengan kode status 1 (gagal)
    });
};

module.exports = { mongoose, disconnectFromMongoDB };

