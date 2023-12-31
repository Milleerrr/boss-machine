const ideas = require('express').Router();

const { getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId } = require('./db');

const checkMillionDollarIdea = require('./checkMillionDollarIdea');

ideas.param('id', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
        req.idea = idea;
        next();
    } else {
        res.status(404).send();
    }
});

ideas.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
});

ideas.post('/', checkMillionDollarIdea, (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body)
    res.status(201).send(newIdea);
});

ideas.get('/:id', (req, res, next) => {
    res.send(req.idea);
});

ideas.put('/:id', checkMillionDollarIdea, (req, res, next) => {
    const updateIdea = updateInstanceInDatabase('ideas', req.body);
    res.send(updateIdea);
});

ideas.delete('/:id', (req, res, next) => {
    const deleteIdea = deleteFromDatabasebyId('ideas', req.params.id); 
    if (deleteIdea) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
});

module.exports = ideas;