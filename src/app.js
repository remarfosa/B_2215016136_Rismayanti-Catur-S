const express = require('express');
const app = express();
const controller = require('./controller'); 

app.use(express.json());

const port = process.env.PORT || 3000; 

// Rute GET untuk mendapatkan semua item
app.get('/api/items', controller.getItems);

// Rute POST untuk menambah item baru
app.post('/api/items', controller.createItem); 

// Rute PUT untuk memperbarui item
app.put('/api/items/:id', controller.updateItem);

// Rute DELETE untuk menghapus item berdasarkan ID
app.delete('/api/items/:id', controller.deleteItem); 

// start the server
app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
});

module.exports = app;
