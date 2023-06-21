const meetings = require('express').Router();

const { createMeeting,
    getAllFromDatabase,
    addToDatabase,
    deleteAllFromDatabase } = require('./db');

meetings.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});

meetings.post('/', (req, res, next) => {
    let newMeeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeeting);
});

meetings.delete('/', (req, res, next) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send();
});

module.exports = meetings;