document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('ticketForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        buyTicket();
    });
});

async function buyTicket() {
    const movieName = document.getElementById('movieName').value;
    const tickets = parseInt(document.getElementById('tickets').value, 10);
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const post = document.getElementById('post').value;

    const ticket = { movieName, tickets, firstName, lastName, phone, post };

    const response = await fetch('/api/tickets/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(ticket)
    });

    if (response.ok) {
        document.getElementById('ticketForm').reset();
        await fetchTickets();
    } else {
        alert('Failed to add ticket.');
    }
}

async function fetchTickets() {
    const response = await fetch('/api/tickets/');
    const tickets = await response.json();
    const list = document.getElementById('ticketsList');
    list.innerHTML = '';
    tickets.forEach(ticket => {
        const div = document.createElement('div');
        div.innerHTML = `Film: ${ticket.movieName}, Billetter: ${ticket.tickets}, Navn: ${ticket.firstName} ${ticket.lastName}, Telefon: ${ticket.phone}, Post: ${ticket.post}`;
        list.appendChild(div);
    });
}

async function deleteAllTickets() {
    const response = await fetch('/api/tickets/', {
        method: 'DELETE'
    });

    if (response.ok) {
        await fetchTickets();
    } else {
        alert('Failed to delete tickets.');
    }
}
