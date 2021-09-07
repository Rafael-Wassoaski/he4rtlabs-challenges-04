const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const api = require('./api/api');
const path = require("path");

app.use(express.static(path.resolve(__dirname, '../front-end/build')));
api(app);
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(path.resolve(__dirname, '../front-end/build')))
})

app.listen(port, () => {
    console.log('Aplicacao iniciada');
});
