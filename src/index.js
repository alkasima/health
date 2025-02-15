// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running deploy using gihub action' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
