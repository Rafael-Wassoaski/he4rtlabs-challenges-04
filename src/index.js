const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const api = require('./api/api');
const path = require("path");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../front-end/build')));
api(app);
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(path.resolve(__dirname, '../front-end/build')))
})

app.listen(port, () => {
    console.log('Aplicacao iniciada na porta ', port);
});
