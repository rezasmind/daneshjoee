const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const path = require('path');



app.use(cors())
app.use(express.json())

app.get("/api",(req,res) => {
    res.json({ message: "Hello Reza" });

});

app.listen(port, () => {
    console.log("Server is running on port " + port);   
})