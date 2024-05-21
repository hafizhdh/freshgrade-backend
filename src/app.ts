import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routes from "./routes/routes";

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})