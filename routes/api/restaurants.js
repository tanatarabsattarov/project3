const express = require('express');
const router = express.Router();
const restaurantController = require('../../controllers/restaurantControllers');
router.post('/register', restaurantController.create);
router.post('/authenticate', restaurantController.authenticate);
module.exports = router;