//require를 통해 http를 가져오기
const http = require("http");
const fs = require("fs");

const jsonData = fs.readFileSync("./financeDB_testData(samsung).json", "utf-8");
//financeDB_testData(samsung).json 파일을 읽음
const samsungData = JSON.parse(jsonData);
const SSdata = samsungData.samsung;

//samsungData.samsung의 값만을 가져옴
const samsungDataAll = (property) =>
  SSdata.map((value) => [value[property]]).join("\n");

const samsungDataObject = {
  no: samsungDataAll("no"),
  open: samsungDataAll("open"),
  high: samsungDataAll("high"),
  low: samsungDataAll("low"),
  close: samsungDataAll("close"),
  volume: samsungDataAll("volume"),
  day: samsungDataAll("day"),
};
//createServer를 이용하여 서버를 생성
const server = http.createServer((request, response) => {
  //매개변수 request의 요청방식을 GET으로 요청
  if (request.method === "GET") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Example Page</title>
    </head>
    <body>
      <div id="root" style = "width : 100vw; height : 100vh;"> 
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
  }
});
//서버 포트 대기 요청
server.listen(3050, (err) => {
  if (err) {
  } else {
    //포트가 연결되었을시, 콘솔로 띄우기
    console.log("3050 포트 열림");
  }
});
