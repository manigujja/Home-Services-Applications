document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("bookingForm");

    if (form) {
        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = form.querySelector("input[type='text']").value.trim();
            const phone = form.querySelector("input[type='tel']").value.trim();
            const service = form.querySelector("select").value;

            if (name === "" || phone === "" || service === "Select Service") {
                alert("Please fill all required fields.");
                return;
            }

            const phonePattern = /^[0-9]{10}$/;

            if (!phonePattern.test(phone)) {
                alert("Enter valid 10-digit phone number.");
                return;
            }

            alert("Service Booked Successfully! We will contact you soon.");
            form.reset();
        });
    }

});
