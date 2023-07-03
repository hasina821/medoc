const express = require('express');
const router = express.Router();
const MedicamentController = require('../controllers/medicament');
const EntreController = require('../controllers/MedocIn')

//poster un projet
router.post('/', MedicamentController.create)
router.get('/all', MedicamentController.listAll)

router.post('/all', EntreController.create)

module.exports = router;