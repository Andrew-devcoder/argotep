const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs/promises");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());

// Парсер JSON для обробки POST-даних
app.use(bodyParser.json());

// запит
app.post("/saveData", async (req, res) => {
    try {
        const data = req.body;

        // Збереження даних у файл
        await fs.writeFile("data.json", JSON.stringify(data));

        res.status(200).json({
            success: true,
            message: "Дані успішно збережено",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Виникла помилка при збереженні даних.",
        });
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущено на порту ${port}`);
});
