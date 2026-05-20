const unitsInput = document.getElementById("Units");
const result = document.getElementById("result");

document.getElementById("submit").addEventListener("click", () => {
  let units = Number(unitsInput.value);

  // Validation
  if (unitsInput.value === "" || units < 0) {
    alert("Enter valid units");
    return;
  }

  let bill = 0;

  // Bill Calculation
  if (units <= 50) {
    bill = units * 0.5;
  } else if (units <= 200) {
    bill = 50 * 0.5 + (units - 50) * 0.75;
  } else if (units <= 450) {
    bill = 50 * 0.5 + 150 * 0.75 + (units - 200) * 1.2;
  } else {
    bill = 50 * 0.5 + 150 * 0.75 + 250 * 1.2 + (units - 450) * 1.5;
  }

  // Extra Charge
  let surcharge = bill * 0.2;

  // Final Amount
  let total = bill + surcharge;

  // Show Result
  result.classList.remove("d-none");

  document.getElementById("slab1").innerHTML = `Electricity Units : ${units}`;

  document.getElementById("slab2").innerHTML =
    `Bill Amount : ₹${bill.toFixed(2)}`;

  document.getElementById("slab3").innerHTML =
    `20% Surcharge : ₹${surcharge.toFixed(2)}`;

  document.getElementById("slab4").innerHTML =
    `Total Amount : ₹${total.toFixed(2)}`;
});

// Reset Button
document.getElementById("reset").addEventListener("click", () => {
  unitsInput.value = "";

  result.classList.add("d-none");
});