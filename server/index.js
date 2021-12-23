import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

// from tutorial
// import multer from 'multer'
// import path from 'path'
// import GridFsStorage from 'multer-gridfs-storage'
// import Grid from 'gridfs-stream'
// import crypto from 'crypto'
// END from tutorial

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true})) // req.body
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors())

const CONNECTION_URL = "mongodb+srv://danel:danel@cluster0.ek9pq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" //the url to connect the database
const PORT = process.env.PORT || 5000 //the port the server working on

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch((error) => console.log(error))



























// from tutorial
// const conn = mongoose.createConnection(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})

// let gfs;

// conn.once('open', function() {
//     gfs = Grid(conn.db, mongoose.mongo);
//     gfs.collection('uploads');
// })

// var storage = new GridFsStorage({
//     url: CONNECTION_URL,
//     file: (req, file) => {
//       return new Promise((resolve, reject) => {
//         crypto.randomBytes(16, (err, buf) => {
//           if (err) {
//             return reject(err);
//           }
//           const filename = buf.toString('hex') + path.extname(file.originalname);
//           const fileInfo = {
//             filename: filename,
//             bucketName: 'uploads'
//           };
//           resolve(fileInfo);
//         });
//       });
//     }
//   });
//   const upload = multer({ storage });


  // TAMSHIH KAN

// END from tutorial