const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
      message: 'Hello World!'
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
