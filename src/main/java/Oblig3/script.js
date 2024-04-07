document.addEventListener('DOMContentLoaded', function () {
    const buyTicketButton = document.getElementById('buyTicket');
    const deleteTicketsButton = document.getElementById('deleteTickets');
    const ticketList = document.getElementById('ticketList');

    const tickets = [];

    buyTicketButton.addEventListener('click', function () {
        const movie = document.getElementById('movie').value;
        const quantity = document.getElementById('quantity').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        // Input-validering
        if (!movie || !quantity || !firstName || !lastName || !phone || !email) {
            alert('Vennligst fyll ut alle feltene.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Vennligst skriv inn en gyldig e-postadresse.');
            return;
        }

        if (!validatePhone(phone)) {
            alert('Vennligst skriv inn et gyldig telefonnummer.');
            return;
        }

        const ticket = {
            movie: movie,
            quantity: quantity,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email
        };

        tickets.push(ticket);
        displayTickets();
        resetForm();
    });

    deleteTicketsButton.addEventListener('click', function () {
        tickets.length = 0;
        displayTickets();
    });

    function displayTickets() {
        ticketList.innerHTML = '';
        tickets.forEach(function (ticket, index) {
            const ticketDiv = document.createElement('div');
            ticketDiv.classList.add('ticket');
            ticketDiv.innerHTML = `
                <p><strong>Billett ${index + 1}:</strong></p>
                <p>Film: ${ticket.movie}</p>
                <p>Antall: ${ticket.quantity}</p>
                <p>Navn: ${ticket.firstName} ${ticket.lastName}</p>
                <p>Telefon: ${ticket.phone}</p>
                <p>E-post: ${ticket.email}</p>
            `;
            ticketList.appendChild(ticketDiv);
        });
    }

    function resetForm() {
        document.getElementById('movie').selectedIndex = 0;
        document.getElementById('quantity').value = '';
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
    }

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^\d{8}$/;
        return re.test(phone);
    }
});

