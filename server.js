const express = require('express');
const rollup  = require('express-middleware-rollup');
const path = require('path');

const app = express();

app.use(rollup({
  src: 'src',
  dest: 'public',
  root: __dirname,
  prefix: '/'
}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080, () => {
  console.log('App started and available at http://localhost:8080');
});
