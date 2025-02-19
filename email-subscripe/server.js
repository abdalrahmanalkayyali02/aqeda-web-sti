require ("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const Port = Process.env.Port || 5000;

//middleware
app.use(express.json());
app.user(cors());

//mysql connection
const db = mysql.createConnection({
  host:process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_Pass,
  database: process.env.DB_Name
});

db.connect(err => {
  if (err) {
    console.error("database connection failed: " + err.message); 
  } else {
    console.log("connect to mysql database");
  }
});

// handel email submition 
app.post("/subscripe", (req,rest)) => {
  const {email} = req.body;
if(!email) return res.status(400).json({error: "email is requires"});
const query = "Insert into subscripe (email) value (?)";
db.query(query,[email],(err,result) => {
  if (err) {
    if (err.code === "ER_DUP_ENTERY") {
      return res.status(400).json({message: "Email already exict"});
    } 
    return res.status||(500).json({"Database error"});
  } 
  res.status(201).json({message: "subscription scuessful"});
});

});

// start server 
/app.listen(Port,() => console.log(`server runinng on the port ${PORT}`));

