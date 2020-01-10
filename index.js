require('dotenv').config(); 

const db = require('./data/config')
const express = require('express');
const server = express();
server.use(express.json())

const PORT = 3000;

server.get('/', (req, res) => {
    res.send("<h1>Car Database Management</h1>")
})

server.get('/cars', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            res.status(500).json({message: 'There was an issue retrieving cars from the database.'})
        })
})

server.get('/cars/:id', (req, res) => {
    const {id} = req.params
    db('cars').where({id})
        .then(car => {
            if(vehicle) {
                res.status(200).json(car)
            } else {
                
            }
        })
})
