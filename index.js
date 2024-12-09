// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Adjust path as necessary

const app = express();
const PORT = process.env.PORT || 4545;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://suraj:Og63m5YlQaO1cCSs@cluster0.6hqfg9t.mongodb.net/')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Use routes
app.use('/api', userRoutes);

app.get('/', (req, res)=>{
  res.send("Server Running..")
})


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
