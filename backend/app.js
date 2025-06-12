const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const customerRoutes = require("./routes/customerRoutes");
const path = require("path");

dotenv.config();
connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://fittailor-frontend-qnus.onrender.com",
    credentials: true,
  })
);


app.use("/users", userRoutes);
app.use("/customer", customerRoutes);

const port = process.env.PORT;
app.listen(port, () => console.log(`server is runing on port ${port}`));
