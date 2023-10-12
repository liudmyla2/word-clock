function updateTime() {
  // Mukachevo
  let mukachevoElement = document.querySelector("#mukachevo");
  let mukachevoDateElement = mukachevoElement.querySelector(".date");
  let mukachevoTimeElement = mukachevoElement.querySelector(".time");
  let mukachevoTime = moment().tz("Europe/Mukachevo");

  mukachevoDateElement.innerHTML = moment()
    .tz("Europe/Mukachevo")
    .format("MMMM Do YYYY");
  mukachevoTimeElement.innerHTML = mukachevoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  // London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
     <div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
