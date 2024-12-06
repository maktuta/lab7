const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// Збереження вкладок
app.post('/saveTabs', (req, res) => {
    const tabsData = req.body;
    fs.writeFileSync('tabsData.json', JSON.stringify(tabsData));
    res.send({ message: 'Вкладки збережені' });
});

// Отримання вкладок
app.get('/getTabs', (req, res) => {
    try {
        const data = fs.readFileSync('tabsData.json');
        res.json(JSON.parse(data));
    } catch (err) {
        res.status(500).send({ error: 'Не вдалося завантажити вкладки' });
    }
});

app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});
