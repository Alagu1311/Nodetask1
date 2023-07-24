const express = require("express");
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "timestamps");
const app = express();
 app.use(express.json())
app.get("/timestamp", (req, res) => {
  let date = new Date();
  const timeStampDate = ` Last updated : ${date.toUTCString().slice(0, -3)}`;
  fs.writeFileSync(
    `${path.join(dirPath, "current-date-time.txt")}`,
    timeStampDate,
    (err) => {
      if (err) {
        console.log("err", err);
      }
    }
  );
  res.sendFile(path.join(dirPath, "current-date-time.txt"));
});
app.listen(9000, () => console.log("timestamp"))
//http..//localhost:9000