const form = document.querySelector("form");

function setFieldError(el, message) {
  if (!el) return;
  el.classList.add("is-invalid");

  // Create/update error element
  const existing = document.getElementById(`${el.id}-error`);
  if (existing) {
    existing.textContent = message;
    return;
  }

  const err = document.createElement("div");
  err.className = "field-error text-danger";
  err.id = `${el.id}-error`;
  err.textContent = message;

  // Prefer inserting after the element
  el.insertAdjacentElement("afterend", err);
}

function clearFieldError(el) {
  if (!el) return;
  el.classList.remove("is-invalid");
  const existing = document.getElementById(`${el.id}-error`);
  if (existing) existing.remove();
}

function isValidEmail(email) {
  // Simple email validation (good enough for form UI)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isAllLettersSpaces(str) {
  return /^[A-Za-z\s.'-]{2,}$/.test(str.trim());
}

function digitsOnly(str) {
  return String(str).replace(/\D/g, "");
}

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Grab fields
    const fullnameEl = document.getElementById("fullName");
    const emailEl = document.getElementById("email");
    const mobileEl = document.getElementById("Phone");
    const dobEl = document.getElementById("date");

    const qualificationEl = document.getElementById("Qualification");
    const gradeEl = document.getElementById("Grade");
    const courseEl = document.getElementById("preferred");
    const timingEl = document.getElementById("batch-timing");

    const addressEl = document.getElementById("residential");
    const cityEl = document.getElementById("city");
    const pincodeEl = document.getElementById("pincode");

    const guardianNameEl = document.getElementById("GfullName");
    const guardianNumberEl = document.getElementById("Gphone");

    const genderChecked = document.querySelector("input[name='gender']:checked");

    // Clear previous errors
    [
      fullnameEl,
      emailEl,
      mobileEl,
      dobEl,
      qualificationEl,
      gradeEl,
      courseEl,
      timingEl,
      addressEl,
      cityEl,
      pincodeEl,
      guardianNameEl,
      guardianNumberEl,
    ].forEach(clearFieldError);

    let hasError = false;

    const fullname = fullnameEl ? fullnameEl.value : "";
    const email = emailEl ? emailEl.value : "";
    const mobile = mobileEl ? digitsOnly(mobileEl.value) : "";
    const dob = dobEl ? dobEl.value : "";

    const qualification = qualificationEl ? qualificationEl.value : "";
    const grade = gradeEl ? gradeEl.value : "";
    const course = courseEl ? courseEl.value : "";
    const timing = timingEl ? timingEl.value : "";

    const address = addressEl ? addressEl.value : "";
    const city = cityEl ? cityEl.value : "";
    const pincode = pincodeEl ? digitsOnly(pincodeEl.value) : "";

    const guardianName = guardianNameEl ? guardianNameEl.value : "";
    const guardianNumber = guardianNumberEl ? digitsOnly(guardianNumberEl.value) : "";

    // Validate
    if (!isAllLettersSpaces(fullname)) {
      setFieldError(fullnameEl, "Enter a valid full name (letters only).");
      hasError = true;
    }

    if (!isValidEmail(email)) {
      setFieldError(emailEl, "Enter a valid email address.");
      hasError = true;
    }

    if (mobile.length !== 10) {
      setFieldError(mobileEl, "Enter 10 digit mobile number.");
      hasError = true;
    }

    if (!dob) {
      setFieldError(dobEl, "Select your date of birth.");
      hasError = true;
    } else {
      const selected = new Date(dob);
      const now = new Date();
      if (selected > now) {
        setFieldError(dobEl, "DOB cannot be in the future.");
        hasError = true;
      }
    }

    if (!genderChecked) {
      const maleEl = document.getElementById("male");
      if (maleEl) setFieldError(maleEl, "Select gender.");
      hasError = true;
    }

    if (!qualification) {
      setFieldError(qualificationEl, "Select your academic qualification.");
      hasError = true;
    }

    if (!grade) {
      setFieldError(gradeEl, "Select your grade/percentage.");
      hasError = true;
    }

    if (!course) {
      setFieldError(courseEl, "Select your preferred course.");
      hasError = true;
    }

    if (!timing) {
      setFieldError(timingEl, "Select your batch timing.");
      hasError = true;
    }

    if (!address || address.trim().length < 10) {
      setFieldError(addressEl, "Enter your residential address (min 10 characters).");
      hasError = true;
    }

    if (!city || city.trim().length < 2) {
      setFieldError(cityEl, "Enter a valid city.");
      hasError = true;
    }

    if (pincode.length !== 6) {
      setFieldError(pincodeEl, "Enter 6 digit pin code.");
      hasError = true;
    }

    if (!isAllLettersSpaces(guardianName)) {
      setFieldError(guardianNameEl, "Enter a valid guardian full name.");
      hasError = true;
    }

    if (guardianNumber.length !== 10) {
      setFieldError(guardianNumberEl, "Enter 10 digit guardian contact number.");
      hasError = true;
    }

    if (hasError) return;

    const payload = {
      fullname,
      email,
      mobile,
      dob,
      gender: genderChecked ? genderChecked.value : null,
      qualification,
      grade,
      course,
      timing,
      address,
      city,
      pincode,
      guardianName,
      guardianNumber,
    };

    console.log("Form Submitted Successfully:", payload);
  });
} else {
  console.error("Form element not found in the document.");
}
