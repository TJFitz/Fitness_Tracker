const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/api_routes")(app);
require("./routes/html_routes")(app);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/workout",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
