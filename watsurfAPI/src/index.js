const express      = require('express')
const cors         = require('cors');
const bodyParser   = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi    = require('swagger-ui-express');
const app          = express();

const port       = process.env.PORT || 3000;

const swaggerOpt = {
  swaggerDefinition: {
    info: {
      title: "Watsurf API",
      description: "API Restful for watsurf project",
      contact: {
        name: "/dev/null team"
      },
      servers: ['http://51.210.37.134:3000/', 'http://127.0.0.1:3000']
    }
  },
  apis: ["./routes/*.js"]
}



const mongoCli = require('./db/connection');
mongoCli.connect((err, cli) => {
  if(err) {
    throw err;
  }
  console.log("Connection to mongo ... OK");
})

const activityRouter = require('./routes/activity');
const spotRouter     = require('./routes/spot');
const userRouter     = require('./routes/user');
const swaggerJSDoc = require('swagger-jsdoc');

app.use(cors());
app.use(bodyParser.json());

const swaggerDocs = swaggerJSDoc(swaggerOpt);
app.use('/', activityRouter);
app.use('/', spotRouter);
app.use('/', userRouter);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
