const express = require('express');
const bodyParser = require('body-parser');
const mainCtrl = require('./controllers/mainCtrl.js');
const middleware = require('./controllers/middleware.js');
const app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/latestjob', mainCtrl.getLatestJob);
app.get('/hobbies', mainCtrl.getHobbies);


 

const PORT = 3001;
app.listen(PORT, () => {
  console.log('listening on port: ', PORT);
})
