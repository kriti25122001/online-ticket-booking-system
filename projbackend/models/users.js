class User {
    constructor(id, name, email, password, bookings) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.password = password;
            this.bookings = bookings;
    }
}

class Bookings {
    constructor(id,name,slot,seats)
    {
        this.id = id;
        this.name = name;
        this.slot = slot;
        this.seats = seats;
    }
}

module.exports = {User , Bookings};