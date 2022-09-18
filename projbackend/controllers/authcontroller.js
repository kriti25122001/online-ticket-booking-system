const firebase = require('../firebase/firebase_connect');
const firestore = firebase.firestore();
const User = require('../models/users');


const addUser = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('users').doc().set(data);
        res.send('Signup Succesfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const signin = async(req,res,next) => {
    try{

        const { email, password } = req.body;
        const data = await firestore.collection('users').get();
        if(data.empty) {
            res.status(404).send('No Users found');
        }else {
            data.forEach(doc => {
                 if(doc.data().email == email && doc.data().password == password)
                 {
                    const user = new User.User(
                        doc.id,
                        doc.data().name
                    );
                    res.send(user);
                 }
            });
            res.status(404).send('Please check your id and password');
        }

    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('users').doc(id);
        const data = await user.get();
        if(!data.exists) {
            res.status(404).send('User dose not exist');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addBooking = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const user =  await firestore.collection('users').doc(id).collection('bookings');
        await user.doc().set(data);
        res.send('Booked Successfully');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllBookings = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('users').doc(id);
        const data = await user.collection('bookings').get();
        const bookingsArray = [];
        if(data.empty) {
            res.status(404).send('No bookings found');
        }else {
            data.forEach(doc => {
                const booking = new User.Bookings(
                    doc.id,
                    doc.data().name,
                    doc.data().slot,
                    doc.data().seats,
                );
                bookingsArray.push(booking);
            });
            res.send(bookingsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteBooking = async (req, res, next) => {
    try {
        const id = req.params.id;
        const bookingid = req.params.bookingid;
        await firestore.collection('users').doc(id).collection('bookings').doc(bookingid).delete();
        res.send('Booking deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addUser,
    getUser,
    addBooking,
    getAllBookings,
    deleteBooking,
    signin
}