package Oblig3;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TicketController {
    private List<Ticket> tickets = new ArrayList<>();

    @PostMapping("/tickets")
    public void createTicket(@RequestBody Ticket ticket) {
        tickets.add(ticket);
    }

    @GetMapping("/tickets")
    public List<Ticket> getTickets() {
        return tickets;
    }

    @DeleteMapping("/tickets")
    public void deleteTickets() {
        tickets.clear();
    }
}


