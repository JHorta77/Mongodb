// const express = require("express");
// const mongoose = require("mongoose")
// const exphbs = require("express-handlebars");
// const bodyParser = require("body-parser");

// const PORT = process.env.PORT || 3000;

// const app = express();

// const routes = require("./routes");

// app.use(express.static("public"));

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(routes);

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nyt_db";

// mongoose.connect(MONGODB_URI);

// app.listen(PORT, function () {
//     console.log("Listening on port: " + PORT);
// });
