import express, { json } from "express";
import fs, { writeFileSync } from "fs";
import path from "path";
import url from "url";
import Quotes from "../model/quotes.model.js";
import usedNumber from "../model/usedNumbers.model.js";
const router = express.Router();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFilePath = path.join(__dirname, "data.json");

function writeNewlyToDataFile() {
  fs.writeFileSync(dataFilePath, JSON.stringify({ quotes: [] }));
}

function WriteToDataFile(data) {
  const writingData = fs.readFileSync(dataFilePath, "utf-8");
  const newWritingData = JSON.parse(writingData).quotes;
  newWritingData.unshift(data);
  fs.writeFileSync(dataFilePath, JSON.stringify( {newWritindgData} ));
  console.log(newWritingData);
  return newWritingData;
}

function readDataFile(data) {
  const rawdata = fs.readFileSync(dataFilePath, "utf-8");
  const checkFile = rawdata.trim();
  return checkFile ? WriteToDataFile(data) : writeNewlyToDataFile();
}

router.get("/", async (req, res) => {
  try {
    const allQuotes = await Quotes.find({});
    res.status(200).json(allQuotes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/random", async (req, res) => {
  try {
    const totalCount = await Quotes.countDocuments();
    let randomNo;
    let checkRandomNo;

    do {
      randomNo = Math.floor(Math.random() * totalCount);

      checkRandomNo = await usedNumber.findOne({
        usedNumber: randomNo,
      });
      if (!checkRandomNo) {
        const newNumber = await usedNumber.create({ usedNumber: randomNo });
      } else {
        console.log(
          "The randomly generated number has been previously generated"
        );
      }
    } while (checkRandomNo);
    const dataExists = fs.statSync(dataFilePath);
    let message = "Hello";
    let newDataExists = readDataFile(message);
    if (dataExists.size !== 0) {
      WriteToDataFile(newDataExists);
      console.log("first");
    } else {
      console.log("Second");
      writeNewlyToDataFile();
    }
    // console.log(newDataExists);
    const randomDoc = await Quotes.findOne().skip(randomNo);
    res.status(200).json(randomDoc);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
