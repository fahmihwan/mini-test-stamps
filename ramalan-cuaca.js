const api = {
    apiKey: "bcf64538ec96e5af587b0e90c3308477",
    cityName: "Jakarta,id",
};

async function fetchData() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${api.cityName}&appid=${api.apiKey}&units=metric`
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const res = await response.json();
        return res.list;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

fetchData().then((data) => {
    if (data) {
        const options = {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
        };

        let listData = data.map((d) => {
            const date = new Date(d.dt * 1000);
            return {
                date: date.toISOString().substring(0, 10),
                results: `${date.toLocaleDateString("en-US", options)}: suhu ${d.main.temp}°C`,
            };
        });

        const results = [];
        const checkDate = [];
        for (let i = 0; i < listData.length; i++) {
            const currentObject = listData[i];
            const currentDate = listData[i].date;

            if (checkDate.indexOf(currentDate) == -1) {
                results.push(currentObject);
                checkDate.push(currentDate);
            }
        }

        console.log("Weather Forecast : ");
        results.forEach((d) => console.log(d.results));
    }
});
