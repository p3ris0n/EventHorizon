const express = require('express');
const router = express.Router();
const triggerController = require('../controllers/trigger.controller');

router.post('/', triggerController.createTrigger);
router.get('/', triggerController.getTriggers);
router.delete('/:id', triggerController.deleteTrigger);

module.exports = router;
