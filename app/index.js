const express = require("express");
const bodyParser = require('body-parser');
const AutomationUtil = require("../src/utils/AutomationUtil");

const app = express();

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/data', function (req, res) {
    result = AutomationUtil.parseFileSync('sb3.data.json');
    res.send(result);
  });