import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, callback) => callback(null, __dirname + "/../public/images"),
    filename: (req, file, callback) => callback(null, file.fieldname + "-" + Date.now() + ".jpg")
});

export const upload = multer({ storage });