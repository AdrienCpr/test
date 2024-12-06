const express = require('express');


// Next initialize the application
const app = express();

// routing path
app.get('/', (req, res) => {
    res.send('Déploiement continue');
});

// Start the server
app.listen(4000, () => {
    console.log('Server started on port 4000');
});