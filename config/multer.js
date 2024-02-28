import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, callback) => callback(null, __dirname + "/../public/images"),
    filename: (req, file, callback) => callback(null, file.fieldname + "-" + Date.now() + ".jpg")
});

const upload = multer({ storage });

export default upload;

// import { dirname, join } from 'path';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);