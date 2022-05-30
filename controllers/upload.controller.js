import multer from "multer"
import path from 'path'

// JUST FOR MULTER
// const customStorage = multer.diskStorage({
//     filename: (req, file, cb) => {
//         // cb(null, file.originalname) 
//         // problem: same name aauda replace huncha 

//         cb(null, Date.now() + '-' + file.originalname)
//     },
//     destination: (req, file, cb) => {
//         cb(null, path.join(process.cwd(), 'uploads'))
//     }
// })
// export const upload = multer({
//     storage: customStorage
// })

// FOR MULTER AND SHARP
const storage = multer.memoryStorage()
export const upload = multer({ storage })

