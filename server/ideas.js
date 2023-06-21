const express = require('express');
const ideas = express(); 
const { getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId } = require('./db');

ideas.get('api/ideas', (req, res, next) => {
    res.send(getAllFromDatabase(req.params));
});

ideas.post('api/ideas', (req, res, next) => {

});

ideas.get('api/ideas/:minionId', (req, res, next) => {

});

ideas.put('api/ideas/:minionId', (req, res, next) => {

});

ideas.delete('api/ideas/:minionId', (req, res, next) => {

});

module.exports = ideas;