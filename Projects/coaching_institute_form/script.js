document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Clear all error messages
        document.querySelectorAll('.error').forEach(span => span.textContent = '');

        // Full Name
        const fullName = document.getElementById('fullName').value.trim();
        if (!fullName) {
            document.getElementById('error-fullName').textContent = 'Full name is required.';
            isValid = false;
        }

        // Email
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            document.getElementById('error-email').textContent = 'A valid email is required.';
            isValid = false;
        }

        // Phone
        const phone = document.getElementById('Phone').value.trim();
        const phoneRegex = /^\d{10}$/;
        if (!phone || !phoneRegex.test(phone)) {
            document.getElementById('error-Phone').textContent = 'A valid 10-digit phone number is required.';
            isValid = false;
        }

        // Date of Birth
        const dob = document.getElementById('date').value;
        if (!dob) {
            document.getElementById('error-date').textContent = 'Date of birth is required.';
            isValid = false;
        }

        // Gender
        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            document.getElementById('error-gender').textContent = 'Gender selection is required.';
            isValid = false;
        }

        // Qualification
        const qual = document.getElementById('Qualification').value;
        if (!qual) {
            document.getElementById('error-Qualification').textContent = 'Academic qualification is required.';
            isValid = false;
        }

        // Percentage
        const perc = document.getElementById('percentage').value;
        const percNum = parseFloat(perc);
        if (!perc || isNaN(percNum) || percNum < 0 || percNum > 100) {
            document.getElementById('error-percentage').textContent = 'A valid percentage (0-100) is required.';
            isValid = false;
        }

        // Preferred Course
        const pref = document.getElementById('preferred').value;
        if (!pref) {
            document.getElementById('error-preferred').textContent = 'Preferred course selection is required.';
            isValid = false;
        }

        // Batch Timing
        const batch = document.getElementById('batch-timing').value;
        if (!batch) {
            document.getElementById('error-batch-timing').textContent = 'Batch timing selection is required.';
            isValid = false;
        }

        // Residential Address
        const res = document.getElementById('residential').value.trim();
        if (!res) {
            document.getElementById('error-residential').textContent = 'Residential address is required.';
            isValid = false;
        }

        // City
        const city = document.getElementById('city').value.trim();
        if (!city) {
            document.getElementById('error-city').textContent = 'City is required.';
            isValid = false;
        }

        // Pincode
        const pin = document.getElementById('pincode').value.trim();
        const pinRegex = /^\d{6}$/;
        if (!pin || !pinRegex.test(pin)) {
            document.getElementById('error-pincode').textContent = 'A valid 6-digit pincode is required.';
            isValid = false;
        }

        // Guardian Name
        const gname = document.getElementById('GfullName').value.trim();
        if (!gname) {
            document.getElementById('error-GfullName').textContent = 'Guardian\'s full name is required.';
            isValid = false;
        }

        // Guardian Phone
        const gphone = document.getElementById('Gphone').value.trim();
        if (!gphone || !phoneRegex.test(gphone)) {
            document.getElementById('error-Gphone').textContent = 'A valid 10-digit guardian phone number is required.';
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            // Uncomment the next line if you want to actually submit the form
            // form.submit();
        }
    });
});