const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let monsters = [];

app.get('/api/monsters', (req, res) => {
    res.json(monsters);
});

app.post('/api/monsters', (req, res) => {
    const monster = req.body;
    monster.id = monsters.length + 1;
    monsters.push(monster);
    res.status(201).json(monster);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});