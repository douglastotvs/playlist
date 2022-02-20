const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send("Hello Word");
})

app.listen(port, console.log(`Servidor em Funcionamento http://localhost:${port}`));