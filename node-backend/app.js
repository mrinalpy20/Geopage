const express = require("express");
const bodyparser = require("body-parser");
const placesRoutes = require("./routes/places-routes");
const userRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");
const app = express();
const port = 5000;

app.use(bodyparser.json());

app.use("/api/places", placesRoutes);

app.use("/api/users", userRoutes);
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred" });
});

app.listen(port, () => {
  console.log("listening on port 5000");
});
