const path = require("path");
require("dotenv").config({ path: "../.env" });
/* ==== External Modules ==== */
const express = require("express");
const expressFileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
const cors = require("cors");
/* ==== Internal Modules ==== */

/* ==== Instanced Modules  ==== */
const app = express();
const routes = require("./routes");
/* ==== Configuration ==== */
const config = require("@rendevous/config");
cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET,
});
/* ==== Middleware ==== */
app.use(cors());
app.use(express.static(path.join("build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressFileUpload({createParentPath: true}));

/* ====  Routes & Controllers  ==== */
app.use("/api", routes);

app.all("/api/*", (req, res, next) => {
	res.send("Invalid API Route");
});



app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

/* ====  Server Listener  ==== */
app.listen(config.PORT, () => {
	console.log(`Rendevous is live. Connected at http://localhost${config.PORT}`);
});
