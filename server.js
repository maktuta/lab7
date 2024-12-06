const express = require('express');
const fs = require('fs');
const app = express();

// Використання порту зі змінної середовища або за замовчуванням 3000
const port = process.env.PORT || 3000;

app.use(express.static('public'));

// Приклади маршрутів
app.get('/', (req, res) => {
    res.send('Сервер працює!');
});

app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});
