package Oblig3;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import Oblig3.Ticket;
import Oblig3.TicketRepository;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    @Autowired
    private TicketRepository ticketRepository;

    @GetMapping("/")
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    @PostMapping("/")
    public Ticket addTicket(@RequestBody Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    @DeleteMapping("/")
    public ResponseEntity<Void> deleteAllTickets() {
        ticketRepository.deleteAll();
        return ResponseEntity.ok().build();
    }
}








