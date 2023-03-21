const express = require('express');
const router = express.Router();
const LocationCntrl = require('../controllers/locationController');

router.get('/', LocationCntrl.getLocation)
router.post('/location', LocationCntrl.SaveLocation)
module.exports = router;