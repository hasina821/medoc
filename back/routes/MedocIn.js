const express = require('express');
const router = express.Router();
const EntreController = require('../controllers/MedocIn');

router.post('/', EntreController.create);
router.get('/all', EntreController.listAll);
router.get('/one/:id', EntreController.getOne);
router.put('/update/:id',EntreController.update);
router.delete('/delete/:id',EntreController.delete);

module.exports = router;