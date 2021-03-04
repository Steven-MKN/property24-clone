const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const cookieParser = require("cookie-parser");
const path = require("path");
const morgan = require("morgan");
const cors = require('cors');

const app = express();
require("dotenv").config();

// write logs
app.use(morgan("common"));

app.use(cors({
  credentials: true, origin: 'http://localhost:3000'
}))

app.use((req, res, next) => {	
  
  res.header('Access-Control-Allow-Origin', req.headers.origin);       
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Accept, Authorization');   
  res.header('Access-Control-Allow-Credentials', true);    

  if (req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
    return res.status(200).send({})
  }

  next();
});

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// database connection
const dbURI = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@webstoretestcluster.lrgnb.mongodb.net/${process.env.MONGO_DB}`;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    app.listen(3001);
    console.log("listening on port 3001");
  })
  .catch((err) => console.log(err));

// routes
app.use("/api", authRoutes);
app.use("/api/property", propertyRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
