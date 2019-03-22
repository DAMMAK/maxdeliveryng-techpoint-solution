The JS file below has a few errors, can you indentify and fix them?

```js
const express = require(express);
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");

/**
 * Assume that these are error free.
 */
const User = require("./models/user");
const logger = require("./utils/logger");

const mongoDB = process.env.MONGO_URI;

const app = express();

mongoose.connect(mongoDB, { useMongoClient: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;

app.use(bodyParser.json());

// handler to save user
app.get("/save", async (res, req, next) => {
  //let assume the required data from the request body is Name, DateofBirth, Gender
  const { Name, DateOfBirth, Gender } = req.body;
  let user = new User({ Name, DateOfBirth, Gender });
  try {
    user = await user.save();
  } catch (ex) {
    res.send(ex.errors).status(500);
    return logger.log(ex.errors);
  }
  res.status(200).send("success");
  return res.json(user);
});

const server = http.createServer(app);

server.listen(80, function() {
  db.on("error", function(error) {
    logger.log(error);
  });
});
```
