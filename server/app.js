import express from "express";
import commentHandler from "./commentHandler.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:5173",
	})
);

app.route("/comments")
	.post(commentHandler)
	.get((req, res) => {
		res.status(200).json({
			message: "You are doing great!",
		});
	});

export default app;
