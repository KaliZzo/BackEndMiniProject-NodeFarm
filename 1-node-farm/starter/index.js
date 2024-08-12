const fs = require("fs");
const http = require("http");
 const url = require('url');


//SERVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
  const dataObj = JSON.parse(data);

const server = http.createServer((req, res)=>{
  console.log(req.url);
  const pathName = req.url;
  if(pathName === '/overview' || pathName === '/'){
    res.end('This is a overview');
  } 
  else if(pathName === '/product'){
    res.end('This is the Product');
  }
  else if(pathName === '/api'){
      res.writeHead(200,{'Content-Type':'application/json'})
      res.end(data);

  }
  else{
    res.writeHead(404,{
      'Content-Type': 'text/html',
      'my-own-header':'Hello-world'
    });
      res.end('<h1>Page not Found!</h1>')
  }
  

  // res.end('Hello from the server!');
});

server.listen(8000, '127.0.0.1',()=> {
  console.log('Listening to requests on port  8000');
})

