import sharp from "sharp"

export const imgCompress = (req, res, next) => {
    console.log(process.cwd());
    sharp(req.file.buffer)
        .resize(300, 200)
        .toFile(`uploads/compressed/${Date.now() + '-' + req.file.originalname}`, (err, info) => {
            console.log('error >>>', err)
        });

    res.status(200).json("compression successfull")
}   