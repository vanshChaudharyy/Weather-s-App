const search = document.getElementById("search");
const searchInput = document.getElementById("searchInput");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const tempfeel = document.getElementById("tempfeel");
const tempmin = document.getElementById("tempmin");
const tempmax = document.getElementById("tempmax");
const cloudSunny = document.getElementById("cloud-sunny");
const searchfunc = (e) => {
  e.preventDefault();
  console.log();
  if (searchInput.value === "") {
    cloudSunny.innerText = "Enter a Valid City Name";
  } else {
    let cityURL = searchInput.value;
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityURL}&units=metric&appid=a9e16129646e9ddeb7394a856a0fcb9c`
    )
      .then((response) => response.json())
      .then((data) => {
        let arrayData = [data];
        city.innerText = `${arrayData[0].name}, ${arrayData[0].sys.country}`;
        temp.innerText = `Temprature: ${arrayData[0].main.temp} ℃`;
        tempfeel.innerText = `Feels Like: ${arrayData[0].main.feels_like} ℃`;
        tempmin.innerText = `Min Temp: ${arrayData[0].main.temp_min} ℃`;
        tempmax.innerText = `Max Temp: ${arrayData[0].main.temp_max} ℃`;
        // console.log(arrayData)
        if (arrayData[0].weather[0].main === "Clear") {
          cloudSunny.innerHTML =
            "<i class='fas  fa-sun weather-icon mx-auto' style='color: #eccc68;'></i>";
        } else if (arrayData[0].weather[0].main === "Clouds") {
          cloudSunny.innerHTML =
            "<i class='fas  fa-cloud weather-icon' style='color: #f1f2f6;'></i>";
        } else if (arrayData[0].weather[0].main === "Rain") {
          cloudSunny.innerHTML =
            "<i class='fas  fa-cloud-rain weather-icon' style='color: #a4b0be;'></i>";
        } else {
          cloudSunny.innerHTML =
            "<i class='fas  fa-cloud weather-icon' style='color:#f1f2f6;'></i>";
        }
      }).catch(
          (error)=>{
            //   console.log(error)
            cloudSunny.innerText = `Check Your  City Name`;
          }
      )
  }
  //   alert("noni");
};
search.addEventListener("click", searchfunc);
