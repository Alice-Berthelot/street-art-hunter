const express = require('express');
const app = express();
const path = require("path");
const router = require("./routes/router");

app.use(express.json()); 

// CORS
const cors = require("cors");

app.use(
  cors({
    origin: [
      process.env.CLIENT_URL,
    ],
  })
);

// ROUTES
app.use("/api", router);

// EXPRESS STATIC (read multimedia files)
const imagesPath = path.join(__dirname, "../public/assets/images");
const uploadedImagesPath = path.join(__dirname, "../public/assets/images/upload");

app.use(express.static(imagesPath));

app.get("*.*", express.static(uploadedImagesPath, { maxAge: "1y" }));

app.get("*", (_, res) => {
  res.sendFile(path.join(imagesPath, "/index.html"));
});


module.exports = app;