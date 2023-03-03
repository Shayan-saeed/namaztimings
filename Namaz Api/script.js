
function getNamazTimings() {
    const iCity = document.querySelector("#iCity").value;
    // const iCountry = document.querySelector("#iCountry").value;

    axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${iCity}&country=""&method=1`)
    .then(function (response) {
        // handle success
        const data = response.data;
        console.log(data);

        // document.querySelector("#date").innerText = data.data.date.gregorian.date;
        document.querySelector("#day").innerText =`Day : ${data.data.date.gregorian.weekday.en}`;
        // document.querySelector("#date").innerHTML = data.data.date.hijri.date;
        // document.querySelector("#date").innerHTML = data.data.date.hijri.day;

        document.querySelector("#namaz1").innerText = `Fajr : ${data.data.timings.Fajr}`
        document.querySelector("#namaz2").innerText = `Dhuhr :  ${data.data.timings.Dhuhr}`;
        document.querySelector("#namaz3").innerText = `Asr : ${data.data.timings.Asr}`;
        document.querySelector("#namaz4").innerText = `Maghrib: ${data.data.timings.Maghrib}`;
        document.querySelector("#namaz5").innerText = `Isha : ${data.data.timings.Isha}`;
    })
}