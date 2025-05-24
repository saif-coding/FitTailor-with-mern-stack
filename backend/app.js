const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const customerRoutes = require("./routes/customerRoutes");
const dressRoutes = require("./routes/dressRoutes");
const path = require("path");

dotenv.config();
connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/users", userRoutes);
app.use("/customer", customerRoutes);
app.use("/dress", dressRoutes);

const port = process.env.PORT;
app.listen(port, () => console.log(`server is runing on port ${port}`));
