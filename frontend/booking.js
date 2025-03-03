document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");
    const bookingMessage = document.getElementById("bookingMessage");

    bookingForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const bookingData = {
            navn: document.getElementById("navn").value,
            epost: document.getElementById("epost").value,
            telefon: document.getElementById("telefon").value,
            tjeneste: document.getElementById("tjeneste").value,
            dato: document.getElementById("dato").value,
            tid: document.getElementById("tid").value,
        };

        try {
            // Send forespørsel til backend
            const response = await axios.post("http://localhost:5000/api/book", bookingData);
            
            bookingMessage.textContent = response.data.message;
            bookingMessage.style.color = "green";
            bookingForm.reset();
        } catch (error) {
            if (error.response) {
                bookingMessage.textContent = error.response.data.message || "Noe gikk galt!";
            } else {
                bookingMessage.textContent = "Kunne ikke koble til serveren.";
            }
            bookingMessage.style.color = "red";
            console.error("Feil ved sending av forespørsel:", error);
        }
    });
});
