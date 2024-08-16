const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Send over any public files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, () => {
    console.log(`dreampAInter launched @ :${port}`);
})