const input = document.getElementById("input");
const container = document.getElementById("container");

fetch("file.json")
  .then((page) => page.json())
  .then((data) => {
    let output = "";
    data.forEach((element) => {
      output += `
      <div class='country-info hidden' id='country-info'>
         <div class='capital'>
            <span class='country'>${element.name}</span>(<span class='abbr'>${element.abbr}</span>) <span>${element.capital}</span>
         </div>
         <div class='lat-long'>
            Lat: ${element.lat}/Long:${element.long}
         </div>
      </div>
      `;
    });
    container.innerHTML = output;
    const countryName = document.querySelectorAll(".country");
    const abbrName = document.querySelectorAll(".abbr");

    console.log(countryName[0].innerText.slice(0, 0));
    function filterCountry() {
      for (let j = 0; j < countryName.length; j++) {
        if (
          input.value.length > 0 &&
          abbrName[j].innerText.toLowerCase().slice(0, input.value.length) ==
            input.value.toLowerCase()
        ) {
          abbrName[j].parentElement.parentElement.classList.remove("hidden");
        } else if (
          countryName[j].innerText
            .toLowerCase()
            .slice(0, input.value.length) !== input.value.toLowerCase()
        ) {
          container.style.display = "block";
          countryName[j].parentElement.parentElement.classList.add("hidden");
          console.log("first");
        } else if (
          input.value.length > 0 &&
          countryName[j].innerText
            .toLowerCase()
            .slice(0, input.value.length) === input.value.toLowerCase()
        ) {
          container.style.display = "block";
          countryName[j].parentElement.parentElement.classList.remove("hidden");
          console.log("second");
        } else if (input.value === "") {
          container.style.display = "none";
        }
      }
    }
    input.addEventListener("keyup", filterCountry);
  });
