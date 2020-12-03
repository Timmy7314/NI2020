const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const mongoCli = require('./db/connection');
mongoCli.connect((err, cli) => {
  if(err) {
    throw err;
  }
  console.log("Connection to mongo ... OK");
})

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

app.use(cors());
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/', userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
