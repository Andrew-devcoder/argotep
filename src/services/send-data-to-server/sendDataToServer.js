export const sendDataToServer = async (array) => {
    try {
        const sendData = { array: [...array] };
        const response = await fetch("http://localhost:3001/saveData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sendData),
        });

        if (response.ok) {
            console.log("Data saved successfully!");
        } else {
            console.error("Failed to save data.");
        }
    } catch (error) {
        console.error("Error while saving data:", error);
    }
};

export const getDataFromServer = async () => {
    try {
        const response = await fetch("http://localhost:3001/getData"); // Замініть URL на ваш

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log("Data from server:", data);

        // Тут ви можете робити що-небудь із отриманими даними, наприклад, оновлювати стан
        // set({ array: data });
    } catch (error) {
        console.error("Error while fetching data from server:", error);
    }
};
