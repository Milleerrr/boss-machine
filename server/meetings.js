const express = require('express');
const meetings = express(); 
const { createMeeting,
    getAllFromDatabase,
    addToDatabase,
    deleteAllFromDatabase } = require('./db');

meetings.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});

meetings.post('/', (req, res, next) => {
    const newMeeting = addToDatabase('meetings', createMeeting());
    if (newMeeting) {
        res.status(201);
    } else {
        req.status(404);
    }
    res.send();
});

meetings.delete('/', (req, res, next) => {
    const deleteMeeting = deleteAllFromDatabase('meetings');
    if (deleteMeeting) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
});

module.exports = meetings;