fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((json) => addCountry(json));

let card = "";
function addCountry(country) {
  for (let i = 0; i < country.length; i++) {
    card += `<div class="countryCard">
      <img src="${country[i].flags.svg}"/>
      <div class="title">
          <div class="country"><h2>${country[i].name.common}</h2></div>
          <div class="region"><h3>(${country[i].region})</h3></div>
          <div class="capital"><h2>${country[i].capital}</h2></div>
      </div>
      <div class="info">
          <p class="population"><span>Population:</span> ${country[i].population}</p>`;

    for (const key in country[i].languages) {
      console.log(`${country[i].timezones}`);
      card += `<p class="languages"><span>Languages:</span> ${country[i].languages[key]}</p>`;
    }

    card += `<p class="timezones"><span>Timezones:</span> ${country[i].timezones}</p>
      </div>
    </div>`;
  }
  document.getElementById("cards").innerHTML = card;
}
