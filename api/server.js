import express from "express";
import quotesRoute from "./routes/quotes.route.js";
import mongoose from "mongoose";
import cron from "node-cron";
import axios from "axios";
const app = express();

app.use(express.json());
app.use("/api/quotes", quotesRoute);

cron.schedule("0 * * * *", async () => {
  try {
    const getAPI = await axios
      .get("http://localhost:3000/api/quotes/random")
      .then((res) => {
        console.log(res.data);
      });
  } catch (error) {
    console.log(error);
  }
});

mongoose
  .connect(
    "mongodb+srv://jerryawoyele:jerryawoyele@quotes-of-the-day.9to20.mongodb.net/quotes?retryWrites=true&w=majority&appName=Quotes-of-the-day"
  )
  .then(
    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    })
  );
