const express = require("express");
const http = require("http");
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const envResult = dotenv.config();
if (envResult.error) {
  throw envResult.error;
}

const appConfig = require("./core/app.config");
const userRoute = require("./src/user");

const app = express();

app.use(cors(appConfig.CORS_OPTIONS));
app.use(
    bodyParser.json({
      limit: '50mb'
    })
  );


app.use("/api/user", userRoute);

http.createServer(app).listen(appConfig.PORT, () => {
  console.info("HTTP server started listening on port: %s", appConfig.PORT);
});
