import express from 'express'
import uploadRouter from './routes/route.js'

const app = express()

import './db_init.js'

app.use(express.json())

app.use('/', uploadRouter)

app.listen(8087, (err, done) => {
    if (err) {
        console.log("err server");
    } else {
        console.log("server listening >>> 8087");
    }
});