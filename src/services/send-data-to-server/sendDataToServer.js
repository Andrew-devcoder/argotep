const sendDataToServer = async () => {
    try {
        const response = await fetch("http://localhost:3001/saveData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataTest), // dataTest - дані, які ви хочете відправити
        });

        if (!response.ok) {
            throw new Error("Помилка при відправці даних на сервер");
        }

        console.log("Дані успішно відправлені на сервер");
    } catch (error) {
        console.error(error.message);
    }
};
