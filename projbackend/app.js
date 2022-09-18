const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const authRoutes = require("./routes/auth");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


//My Routes
app.use("/api", authRoutes.routes);


//PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`app is running at ${port}`);
  });
  