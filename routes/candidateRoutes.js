const express = require('express');
const { getAllCandidates, createCandidate } = require('../controllers/candidateController');
const router = express.Router();

router.get('/', getAllCandidates);
router.post('/', createCandidate);

module.exports = router;
