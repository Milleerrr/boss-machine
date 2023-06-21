const express = require('express');
const minions = express(); 
const { getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase } = require('./db');

minions.get('api/minions', (req, res, next) => {
    res.send(getAllFromDatabase(req.params));
});

minions.post('api/minions', (req, res, next) => {

});

minions.get('api/minions/:minionId', (req, res, next) => {

});

minions.put('api/minions/:minionId', (req, res, next) => {

});

minions.delete('api/minions/:minionId', (req, res, next) => {

});

module.exports = minions;