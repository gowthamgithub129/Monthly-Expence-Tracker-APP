const http = require('http');

const server = http.createServer((req, res) => {
  console.log('GOWTHAM');
  res.end(); 
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
