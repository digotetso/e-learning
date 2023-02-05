const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const { readdirSync } = require("fs");
// Create express appp

const app = express();

// Connect the database
mongoose
  .connect(process.env.DATABASE, {
    /* configuration object */
  })
  .then(() => console.log("DB connected..."))
  .catch((err) => console.log(err.message));

// Middlewares - function to be excute between request and response and have acces to `req` and `res` objects
// Code get excuted before sending response to the client

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Require all files from "./routes" directory
readdirSync("./routes").map((r) => {
  app.use("/api", require(`./routes/${r}`));
});

const port = process.env.PORT || 8000;

app.listen(port, (req, res) => console.log(`Server running on port ${port}`));
