import express from "express";

import cors from "cors";
const app = express();

const corsOptions = {
	origin: process.env.CLIENT_URL,
	credentials: true,
	allowedHeaders: ["sessionId", "Content-Type"],
	exposedHeaders: ["sessionId"],
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: false,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT ?? "5000", () => {
	console.log(`Server started at port ${process.env.PORT ?? "5000"}`);
});
