require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const itemRoutes = require("./routes/items");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/shop", itemRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
