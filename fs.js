const fs = require('fs');

// create a file names welcome .txt 

fs.writeFile('welcome.txt', 'Welcome to Node.js!', (err) => {
  if (err) throw err;
  console.log('File created!');
});

// read data from hello.txt


