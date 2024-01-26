const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs/promises");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());

// Парсер JSON для обробки POST-даних
app.use(bodyParser.json());

const readDataFromFile = async () => {
    try {
        const data = await fs.readFile("data.json", "utf-8");
        return JSON.parse(data);
    } catch (error) {
        // Якщо файл не існує або сталася інша помилка, повертаємо пустий масив
        return [];
    }
};

const writeDataToFile = async (data) => {
    await fs.writeFile("data.json", JSON.stringify(data, null, 2));
};

// запит
app.post("/saveData", async (req, res) => {
    try {
        const newData = req.body;
        await writeDataToFile(newData);

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

app.post("/getData", async (req, res) => {
    try {
        const data = await fs.readFile("data.json", "utf-8");
        const jsonData = JSON.parse(data);

        res.status(200).json({
            success: true,
            data: jsonData,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Виникла помилка при отримання даних.",
        });
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущено на порту ${port}`);
});
