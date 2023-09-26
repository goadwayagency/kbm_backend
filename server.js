const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
// const verifyToken = require("./auth/authMiddleware");
// const multer = require('multer');
const usersRoutes = require('./api/users/usersRoutes');


const path = require('path'); // Add this line
const { error } = require('console');

// const storage = multer.diskStorage({
//   destination: path.join(__dirname, './public/uploads'),
//   filename: (req, file, callback) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     const extension = path.extname(file.originalname);
//     callback(null, uniqueSuffix + extension);
//   },
// });

  
  
const allowedOrigins = [ 'http://localhost:3000','https://kickboxingmorocco.club'];

app.use(cors({
  origin: allowedOrigins
}));

// app.set('views', path.join(__dirname, 'views')); 
// app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use('/api/users', usersRoutes);




server.listen(4000)