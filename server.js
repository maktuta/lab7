const express = require('express');
const fs = require('fs');
const app = express();

// Використання порту зі змінної середовища або за замовчуванням 8080
const port = process.env.PORT || 8080;

// Налаштування статичних файлів
app.use(express.static('public'));

// Головна сторінка (index.html)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Маршрут для index2.html
app.get('/index2', (req, res) => {
    res.sendFile(__dirname + '/public/index2.html');
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});
