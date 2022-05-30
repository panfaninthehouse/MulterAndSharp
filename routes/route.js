import express from "express";
import { imgCompress } from "../controllers/sharp.js";
import { upload } from "../controllers/upload.controller.js"; const route = express.Router()

route.post('/upload-single', upload.single('image'), imgCompress)
route.post('/upload-multiple', upload.array('images', 4), (req, res) => {
    res.send('multiple files uploaded')
})

export default route