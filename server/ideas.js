const express = require('express');
const ideas = express();
const { getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId } = require('./db');
const checkMillionDollarIdea = require('./checkMillionDollarIdea');

ideas.param('ideaId', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
        req.body = idea;
        next();
    } else {
        res.status(404).send();
    }
});

ideas.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
});

ideas.post('/', (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body)
    res.status(201).send(newIdea);
});

ideas.get('/:ideaId', (req, res, next) => {
    res.status(200).send(req.idea);
});

ideas.put('/:ideaId', (req, res, next) => {
    const updateIdea = updateInstanceInDatabase('idea', req.body);
    res.status(201).send(updateIdea);
});

ideas.delete('/:ideaId', (req, res, next) => {
    const deleteIdea = deleteFromDatabasebyId('idea', req.params.ideaId); 
    if (deleteIdea) {
        req.status(204);
    } else {
        res.status(500);
    }
    res.send();
});

module.exports = ideas;