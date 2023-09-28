const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const multer = require('multer');
const usersRoutes = require('./api/users/usersRoutes');
require('dotenv').config();

const path = require('path'); // Import the path module

const storage = multer.diskStorage({
  destination: path.join(__dirname, './public/uploads'),
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    callback(null, uniqueSuffix + extension);
  },
});

const upload = multer({ storage });

const allowedOrigins = ['http://localhost:3000', 'https://kickboxingmorocco.club'];

app.use(cors({
  origin: allowedOrigins,
}));

app.use(express.static('public'));
app.use(express.json());
app.use('/api/users', usersRoutes);

const port = process.env.PORT || 4000; // Use the provided PORT or default to 4000

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

server.on('error', (error) => {
  console.error('Server error:', error);
});
