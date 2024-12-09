const express = require("express");
const path = require("path")
const { router } = require("./router");
const dbConfigs = require('./knexfile')
const knex = require('knex')(dbConfigs)
const port = 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use("/", router);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});