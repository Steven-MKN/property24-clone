const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const cookieParser = require("cookie-parser");
const path = require("path");
const morgan = require("morgan");

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// database connection
const dbURI =
  "mongodb+srv://NodeTestApp:HqZbska24nxxjgR@webstoretestcluster.lrgnb.mongodb.net/NodeTestApp";

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    app.listen(3000);
    console.log("listening on port 3000");
  })
  .catch((err) => console.log(err));

// write logs
app.use(morgan("tiny"));

// routes
app.use("/api", authRoutes);
app.use("/api/property", propertyRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
