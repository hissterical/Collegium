require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

connectDB();

const app = express();
app.use(express.json());

//cors
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*"); 
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization"); 
//     next();
// });
const cors = require('cors');
app.use(cors()); 

// routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.get('/', (req, res) => {
    res.send("Hello world");
});

// RUNRUNRUN
const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
