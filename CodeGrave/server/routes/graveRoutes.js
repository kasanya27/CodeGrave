const express = require('express');
const router = express.Router();
const { getAllGraves, createGrave } = require('../controllers/graveController');

router.get('/', getAllGraves);
router.post('/', createGrave);

module.exports = router;