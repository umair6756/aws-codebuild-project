
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Hafiz Umair Your node app running on port ' + port);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});