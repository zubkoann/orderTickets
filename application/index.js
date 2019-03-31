import {Observer, Observable} from "./Observer";
import Cinemahall from "./Cinemahall";
import Card from "./TicketCard";

document.addEventListener("DOMContentLoaded", function () {
    let hallConfig = {
        rows: 10,
        seats: 14
    };
    let priceConfig = {
        low: 70,
        high: 160
    }

    class Cinema {
        constructor(hallConfig, priceConfig, card) {
            this.hallConfig = hallConfig;
            this.priceConfig = priceConfig;
            this.card = card;
            this.observable = new Observable();
            this.cinemahall = new Cinemahall(this.hallConfig, this.priceConfig,this.observable);
            this.card = new Card(this.observable);
        }
        initObserver(){
            let addTicketToCard = new Observer('addToCard', (msg)=> this.card.addTicket(msg));
            this.observable.addObserver(addTicketToCard);
            let deleteTicketFromHall = new Observer('deleteTicket',(msg)=> this.cinemahall.deleteSelectedItem(msg));
            this.observable.addObserver(deleteTicketFromHall)
        }
        init() {
            let boughtTickets = JSON.parse(localStorage.getItem('cinemaTickets'));
            this.cinemahall.render();
            this.card.render();
            if (boughtTickets) boughtTickets.forEach(item=>{
                // this.card.addTicket(item);
                document.querySelector('.seat[data-row="'+item.row+'"][data-seat="'+item.seat+'"]').classList.add('selected')
            });
            this.initObserver();
        }
    }
    let cinema=new Cinema(hallConfig,priceConfig, Card)
    cinema.init();
})

