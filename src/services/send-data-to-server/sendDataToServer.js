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
