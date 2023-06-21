const minions = require('express').Router();

const { getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId } = require('./db');

minions.param('minionId', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);
    if (minion) {
        req.minion = minion;
        next();
    } else {
        res.status(404).send();
    }
});

minions.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
});

minions.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

minions.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
});

minions.put('/:minionId', (req, res, next) => {
    const updateMinion = updateInstanceInDatabase('minions', req.body);
    res.send(updateMinion);
});

minions.delete('/:minionId', (req, res, next) => {
    const minionId = req.params.minionId;
    const minion = deleteFromDatabasebyId('minions', minionId)
    if (minion) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
});

module.exports = minions;