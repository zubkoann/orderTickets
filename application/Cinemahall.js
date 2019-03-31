class Cinemahall {
    constructor({rows, seats}, price, observable) {
        this.rows = rows;
        this.seats = seats;
        this.price = price;
        this.observable = observable;
        this.clickHandler = this.clickHandler.bind(this);
    }
    deleteSelectedItem({row,seat}){
        document.querySelector('.seat[data-row="'+row+'"][data-seat="'+seat+'"]').classList.remove('selected')
    }
    clickHandler(e){
        if(e.target.classList.contains('selected')){
            alert('yge zanyato!');
        }else{
            e.target.classList.add('selected');
            let data={
                row: e.target.dataset.row,
                seat:e.target.dataset.seat,
                price: e.target.dataset.price
            }
            this.observable.sendMessage('addToCard', data)
        }
    }
    render() {
        const app = document.getElementById('app');
        let hall = document.createElement('div');
        let screen = '<div class = "screen"> </div>'
        hall.className = 'hall_wrap';
        hall.innerHTML = screen;
        for (let i = 0; i < this.rows; i++) {
            let rowItem = document.createElement('div');
            rowItem.className = 'row';
            for (let j = 0; j < this.seats; j++) {
                let seatItem = document.createElement('div');
                seatItem.className = 'seat';
                seatItem.dataset.row = i + 1;
                seatItem.dataset.seat = j + 1;
                seatItem.innerText = j + 1;
                if (i <= 8) {
                    seatItem.classList.add('low');
                    seatItem.dataset.price = this.price.low;
                } else {
                    seatItem.classList.add('high');
                    seatItem.dataset.price = this.price.high;
                }
                seatItem.onclick = this.clickHandler;
                rowItem.append(seatItem);
            }
            hall.append(rowItem);
        }
        app.append(hall)
    }
}

export default Cinemahall;