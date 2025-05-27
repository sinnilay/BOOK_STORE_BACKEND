const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api", bookRoutes);

app.get("/", (req, res) => {
  res.send("Book Store API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
