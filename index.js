const http = require("http");
const fs = require("fs");

const port = 8000;


const fileHandle = (req, res) => {
  let fileName = "";
  console.log(req.url)
  switch (req.url) {
    
    case "/":
      fileName = "./index.html"

      break;
    case "/blog":
      fileName = "./blog.html"
      break;
    default:
      fileName = "./about.html"
      break;
  };
 
  fs.readFile(fileName, (err, file) => {
    console.log(err)
    console.log(file)
    if (err) {
      res.end("file Not Found");
    } else {
      res.end(file);
    }
  });

};
const MyServer = http.createServer(fileHandle);
//

// const MyServer=http.createServer((req,res)=>{
//     console.log(req)
//     console.log("request recive");
//     res.end("hello.. user")
// });
MyServer.listen(port, (err) => {
  if (err) {
    console.log("server is not working")
  }
  console.log(`server is listening on ${port}`);
})
