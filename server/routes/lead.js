const express = require('express');

const router = express.Router();
const { postLead, getLead } = require('../controllers/lead');

router.post('/', postLead);
router.get('/', getLead);

module.exports = router;
