const country1 = document.querySelector("#country1");
const country2 = document.querySelector("#country2");

const flag1 = document.querySelector("#flag1");
const flag2 = document.querySelector("#flag2");

const convertBtn = document.querySelector("#convertBtn");
const swapBtn = document.querySelector("#swapBtn");

const orgAmount = document.querySelector("#orgAmount");

const newAmount = document.querySelector("#newAmount");

const error = document.querySelector("#error");

const loading = document.querySelector("#loading");

let countriesData = [];

// Load countries
async function loadCountries() {
  let response = await fetch("./codes.json");

  let data = await response.json();

  countriesData = data;

  let uniqueCountries = []; 

  data.forEach((country) => {
    if (
      country.Currency_Code !== "" &&
      !uniqueCountries.includes(country.Country)
    ) {
      uniqueCountries.push(country.Country);

      let value = `${country.Currency_Code.toLowerCase()},${country.Country_Code}`;

      let option1 = document.createElement("option");

      option1.value = value;

      option1.innerText = country.Country;

      let option2 = option1.cloneNode(true);

      country1.append(option1);

      country2.append(option2);
    }
  });

  // Default Countries
  setDefaultCountry(country1, "usd,US");

  setDefaultCountry(country2, "inr,IN");

  updateFlag(country1, flag1);

  updateFlag(country2, flag2);
}

// Set default country
function setDefaultCountry(select, value) {
  select.value = value;
}

// Update Flag
function updateFlag(select, flag) {
  let value = select.value;

  if (!value) return;

  let countryCode = value.split(",")[1];

  flag.src = `https://flagsapi.com/${countryCode}/flat/64.png`;

  flag.onerror = () => {
    flag.src = "https://cdn-icons-png.flaticon.com/512/44/44386.png";
  };
}

// Events
country1.addEventListener("change", () => {
  updateFlag(country1, flag1);

  error.innerText = "";
});

country2.addEventListener("change", () => {
  updateFlag(country2, flag2);

  error.innerText = "";
});

// Convert Currency
convertBtn.addEventListener("click", async () => {
  error.innerText = "";

  newAmount.innerHTML = "";

  let amount = orgAmount.value;

  // Validation
  if (country1.value === "") {
    error.innerText = "Please select a 'From' country.";
    return;
  }

  if (country2.value === "") {
    error.innerText = "Please select a 'To' country.";
    return;
  }

  if (amount === "") {
    error.innerText = "Please enter an amount.";
    return;
  }

  if (amount <= 0) {
    error.innerText = "Amount must be greater than zero.";
    return;
  }

  loading.classList.remove("d-none");

  convertBtn.innerText = "Loading...";

  try {
    let fromCurrency = country1.value.split(",")[0];

    let toCurrency = country2.value.split(",")[0];

    // Same currency
    if (fromCurrency === toCurrency) {
      newAmount.innerHTML = `${Number(amount).toFixed(2)} ${toCurrency.toUpperCase()}`;

      loading.classList.add("d-none");

      convertBtn.innerText = "Convert";

      return;
    }

    // API Call
    let response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`,
    );

    let data = await response.json();

    let rate = data[fromCurrency][toCurrency];

    let finalAmount = amount * rate;

    newAmount.innerHTML = `
        <div>
            ${finalAmount.toFixed(2)}
            ${toCurrency.toUpperCase()}
        </div>

        <small>
            1 ${fromCurrency.toUpperCase()}
            =
            ${rate}
            ${toCurrency.toUpperCase()}
        </small>
        `;
  } catch (error) {
    newAmount.innerHTML = `
        <span class="text-danger">
            Something went wrong.
            Please try again.
        </span>
        `;
  }

  loading.classList.add("d-none");

  convertBtn.innerText = "Convert";
});

// Swap Countries
swapBtn.addEventListener("click", () => {
  let temp = country1.value;

  country1.value = country2.value;

  country2.value = temp;

  updateFlag(country1, flag1);

  updateFlag(country2, flag2);

  if (orgAmount.value !== "") {
    convertBtn.click();
  }
});

// Start App
loadCountries();
