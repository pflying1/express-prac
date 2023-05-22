const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Example Page</title>
    </head>
    <body>
      <div id="root" style="width: 100vw; height: 100vh;">
        <div>NO.${samsungDataObject.no}</div>
        </br>
        <div>OPEN.${samsungDataObject.open}</div>
        </br>
        <div>HIGH.${samsungDataObject.high}</div>
        </br>
        <div>LOW.${samsungDataObject.low}</div>
        </br>
        <div>CLOSE.${samsungDataObject.close}</div>
        </br>
        <div>VOLUME.${samsungDataObject.volume}</div>
        </br>
        <div>DAY.${samsungDataObject.day}</div>
        </br>
      </div>
    </body>
    </html>`);
});

app.listen(3050, () => {
  console.log("3050 포트 열림");
});
