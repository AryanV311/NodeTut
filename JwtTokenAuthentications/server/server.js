import connectDb from "./config/db.js";
import express from "express";
import 'dotenv/config';
import cors from "cors";
import authRouter from "./routes/authRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", authRouter)


connectDb()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})
