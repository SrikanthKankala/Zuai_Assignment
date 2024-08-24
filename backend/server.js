const app = require('./app');

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });




// C:\zuai-project\backend\server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRouter = require('./routes/posts'); // Your routes file

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS to allow frontend requests

// Base path '/api'
app.use('/api/posts', postsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
