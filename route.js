const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/students?/:id', (req, res) => {
    res.send(`Welcome: ${req.params.id}`);
});

app.get('/', (req, res) => {
    fs.readFile('route.html', 'utf8', (err, html) => {
        if (err) {
            res.status(500).send('Sorry, something went wrong');
        }
        res.send(html);
    });
});
