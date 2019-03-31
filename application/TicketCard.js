class Card {
    constructor(observable) {
        this.tickets = [];
        this.observable = observable;
        this.deleteTicket = this.deleteTicket.bind(this);
        this.addTicket = this.addTicket.bind(this);
    }

    deleteTicket(row, seat) {
        let data = {
            row: row,
            seat: seat
        };
        this.tickets = this.tickets.filter(ticket => {
            return (ticket.row == row && ticket.seat == seat) ? false : ticket;
        });
        this.calculateTotalPrice();
        document.querySelector('.card_item[data-row="' + row + '"][data-seat="' + seat + '"]').remove();
        this.observable.sendMessage('deleteTicket', data)
    }

    addTicket(data) {
        this.tickets.push({...data})
        let card = document.querySelector('.card_wrap');
        let itemwrap = document.querySelector('.card_item_wrap');
        let item = document.createElement('div');
        item.className = 'card_item';
        item.dataset.row = data.row;
        item.dataset.seat = data.seat;
        item.innerHTML =
            `<div>row: ${data.row}</div>
             <div>seat: ${data.seat}</div>
             <div>price: ${data.price}</div>
             <div class="delete">x</div>
             `;
        item.querySelector('.delete').onclick = () => {
            this.deleteTicket(data.row, data.seat);
        };
        itemwrap.prepend(item);
        card.prepend(itemwrap);
        this.calculateTotalPrice();
        setTimeout(()=>this.deleteTicket(data.row,data.seat), 60000);
    }


    calculateTotalPrice() {
        let totalItem = document.querySelector('.total');
        totalItem.innerText = null;
        totalItem.innerText = this.tickets.reduce((sum, cur) => sum + Number(cur.price), 0);
    }
    addToStorage(){
        if (this.tickets.length>0){
            let boughtTickets = JSON.parse(localStorage.getItem('cinemaTickets'));
            this.tickets.forEach(item=>boughtTickets.push(item))
            localStorage.setItem('cinemaTickets', JSON.stringify(boughtTickets));
        }else{
            alert('vi ni4ego ne vibrali')
        }
    }

    render() {
        const app = document.getElementById('app');
        let totalPrice = `<div class="total_wrap"><div> VSEGO: <b class="total">0</b></div> <div class="buy">КУПИТЬ</div></div>`;
        let card = document.createElement('div');
        let itemwrap = document.createElement('div');
        card.className = 'card_wrap';
        itemwrap.className = 'card_item_wrap';
        card.innerHTML = totalPrice;

        app.appendChild(itemwrap);
        app.appendChild(card);
        app.querySelector('.buy').onclick = ()=>{
            this.addToStorage();
        }
    }
}

export default Card;