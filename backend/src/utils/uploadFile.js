// File upload helper (Cloudinary)
const cloudinary = require('../config/cloudinary');

const uploadFile = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'socialMedia',
  });
};

module.exports = uploadFile;
