const session = 9468; // Replace with actual session key or dynamic value

function getDataDriver(){
    const driverNumber = document.getElementById("driverNumber").value;
    console.log("Driver num (from input): ",driverNumber);

    getRequestDriverData(driverNumber, session);
}

async function getRequestDriverData(number = "", session = "") {
    const driverURL = `https://api.openf1.org/v1/drivers?driver_number=${number}&session_key=${session}`;

    try {
        const response = await fetch(driverURL);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log("Pełna odpowiedź z API: ", data);

        if (data.length === 0) {
            console.log("Brak danych");
            return null; // Return null if there's no data
        }

        console.log("Driver name (from API): ", data[0].full_name);
        console.log("Driver number (from API): ", data[0].driver_number);
        console.log("Driver team (from API): ", data[0].team_name);
        console.log("Driver acronym (from API): ", data[0].name_acronym);
        console.log("Driver nationality (from API): ", data[0].country_code);

    } catch (error) {
        console.error("Błąd podczas pobierania danych:", error); // Log error
        return null; // Return null in case of error
    }


}