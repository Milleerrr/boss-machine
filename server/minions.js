const express = require('express');
const minions = express();
const { getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId } = require('./db');

minions.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('mininos'));
});

minions.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

minions.get('/:minionId', (req, res, next) => {
    // Use getFromDatabaseById 
});

minions.put('/:minionId', (req, res, next) => {
    // Use getFromDatabaseById, updateInstacneInDatabase
});

minions.delete('/:minionId', (req, res, next) => {
    // Use deleteFromDatabaseById
});

module.exports = minions;