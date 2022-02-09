import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import bodyParser from "body-parser";
import cors from "cors";
import fileUpload from "express-fileupload";

const DB_URL =
  "mongodb+srv://user:user@cluster0.bdgn7.mongodb.net/TicketsData?retryWrites=true&w=majority";

const PORT = 5000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use("/api", router);
app.use(cors());
app.use(express.static('public'));
app.use(fileUpload({}));

app.get("/", (req, res) => {
  res.send("Welcome Home");
});

app.post("/", urlencodedParser, (req, res) => {
  const body = req.body;
  if (!body) {
    res.status(400);
  }
  res.json(body);
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`SERVER WORK ON PORT: ${PORT}`));
  } catch (e) {
    console.error(e);
  }
}

startApp();
