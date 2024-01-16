const express = require("express");
const app = express();
const mongoose = require("./database/mongoose");


app.listen(3000, () =>{
    console.log("Server running at port 3000 !!");
});