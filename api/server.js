const express = require("express");
const http = require("http");
const app = express();
const cors = require('cors');
const appConfig = require("./core/app.config");
const locationRoute = require("./location/");

app.use(cors(appConfig.CORS_OPTIONS));

app.use("/api/location", locationRoute);

http.createServer(app).listen(appConfig.PORT, () => {
  console.info("HTTP server started listening on port: %s", appConfig.PORT);
});