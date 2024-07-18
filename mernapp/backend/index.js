const express = require('express');
const connectDB = require('./db.js'); 
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());
app.use('/api', require("./Routes/CreateUser.js"));
app.use('/api', require("./Routes/DisplayData.js"));
app.use('/api', require("./Routes/OrderData.js"));

app.get('/', (req, res) => {
    res.send('Hello World! ----');
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
});
 

