const express = require('express');
const router = express.Router();

// ? |---| '/users routes |---|
/**
 * @route   GET
 * @desc    Get users
 * @access  Public
 * @param {int} first number of records to return
 * @param {int} last number of records counting backwards
 * @param {string} before cursor
 * @param {string} after cursor
 */
// router.route('/users').get(Users.get);


module.exports = router;
