var http = require('http');

http.createServer(function (req, res) {
  // Check the request URL to determine the operation
  if (req.url.startsWith('/add')) {
    handleCalculation(req, res, '+');
  } else if (req.url.startsWith('/sub')) {
    handleCalculation(req, res, '-');
  } else if (req.url.startsWith('/mul')) {
    handleCalculation(req, res, '*');
  } else if (req.url.startsWith('/div')) {
    handleCalculation(req, res, '/');
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('404 Not Found');
    res.end();
  }
}).listen(8080);

console.log("Server running at http://localhost:8080/");

function handleCalculation(req, res, operation) {
  var url = req.url.split('/');
  var var1 = Number(url[2]);
  var var2 = Number(url[3]);

  var result;
  switch (operation) {
    case '+':
      result = var1 + var2;
      break;
    case '-':
      result = var1 - var2;
      break;
    case '*':
      result = var1 * var2;
      break;
    case '/':
      result = var1 / var2;
      break;
  }

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`The result is: ${result}\n`);
  res.end();
}
