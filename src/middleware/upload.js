const path = require('path');
const multer = require('multer');

const MIME_TYPE = {
  'img/png': 'png',
  'img/jpeg': 'jpeg',
  'img/jpg': 'jpg',
};
const MAX_SIZE = 1024 * 1024;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = MIME_TYPE[file.mimetype];
    let uploadError = null;

    // if (!isValid)
    //   uploadError = new Error(
    //     'Invalid image type. Accepts only valid images: jpg, jpeg, png'
    //   );

    cb(uploadError, path.join(__dirname, '../public/uploads'));
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const reg = new RegExp(`[${path.extname(file.originalname)} ]`, 'gi');
    console.log(reg);
    const filename = file.originalname
      .replace(reg, '')
      .toLowerCase()
      .replace(/[^\w]/gi, '');
    cb(null, `${filename}-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

module.exports = multer({ storage });
