import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import hospitalRoutes from "./Routes/hospitals.js";
import campaignRoutes from "./Routes/campaign.js";
import userRoutes from "./Routes/user.js";
import camp from "./Routes/campaignform.js"

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/hospital", hospitalRoutes);
app.use("/campaign", campaignRoutes);
app.use("/", camp);

const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  });
