/* app.js */
const express = require("express");
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
// get and use the routes
const indexRouter = require("./routes/indexRouter");
const categoryRouter = require("./routes/categoryRouter");
const brandRouter = require("./routes/brandRouter");

app.use("/", indexRouter);
app.use("/category", categoryRouter);
app.use("/brand", brandRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}`));
