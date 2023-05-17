const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Simulasi data pengguna yang valid
const validUsers = [
  { id: 1, email: 'user1@gmail.com', password: 'password1' },
  { id: 2, email: 'user2@gmail.com', password: 'password2' },
];

// Fungsi untuk menghasilkan token JWT
function generateToken(user) {
  const currentDate = new Date();
  const tokenData = {
    id: user.id,
    email: user.email,
    loginDate: currentDate.toISOString() // Mengubah tanggal menjadi string dalam format ISO
  };
  return jwt.sign(tokenData, 'secretKey', { expiresIn: '1h' });
}

// Route untuk proses login
router.post('/login', function(req, res, next) {
  const { email, password } = req.body;
  console.log(req.body);
  console.log(email, password);

  // Cek apakah pengguna terdaftar dan passwordnya valid
  const user = validUsers.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Email atau password salah' });
  }

  // Generate token JWT
  const token = generateToken(user);

  // Kirim response dengan token
  res.json({ token });
});

module.exports = router;
