const multer = require('multer');
const fs = require('fs');

// Membuat folder "uploads" jika belum ada
const uploadFolder = './uploads/';
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadFolder);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const fileExtension = getFileExtension(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + '.' + fileExtension);
    },
});
  
function getFileExtension(filename) {
    // Memisahkan nama file dan ekstensinya
    const parts = filename.split('.');
    return parts[parts.length - 1];
}
  
const upload = multer({ storage: storage });

module.exports = upload;