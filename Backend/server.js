const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const staticFiles = path.join(__dirname, '../frontend');

const frontPath = app.use(express.static(staticFiles));


app.get('/', (req, res) => {
    res.send(path.join(frontPath, 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Serever running at PORT:${PORT}`);
})

