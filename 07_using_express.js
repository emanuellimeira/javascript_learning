const express = require('express');

const app = express();

// get = dois parametros (url, callback function)
app.get('/', (req, res) => {
	res.send("hey whas up from express")
});

app.listen(3001);