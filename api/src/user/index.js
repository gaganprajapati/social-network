const express = require('express');
const router = express.Router();
const { getAllUsers, getUser, getFriends } = require('./user.controller');

router.get('/:page/:count', getAllUsers);
router.get('/:id', getUser);
router.get('/:id/friends/:page/:count', getFriends);

module.exports = router;