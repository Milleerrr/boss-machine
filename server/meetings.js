const express = require('express');
const meetings = express(); 
const {  createMeeting,
    getAllFromDatabase,
    addToDatabase,
    deleteAllFromDatabase } = require('./db');

meetings.get('api/meetings', (req, res, next) => {
    res.send(getAllFromDatabase(req.params));
});

meetings.post('api/meetings', (req, res, next) => {

});

meetings.delete('api/meetings/:minionId', (req, res, next) => {

});

module.exports = meetings;