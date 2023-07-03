const express = require('express');
const router = express.Router();
const SortieController = require('../controllers/MedocOut');

router.post('/', SortieController.create);
router.get('/all', SortieController.listAll);
router.get('/one/:id', SortieController.getOne);
router.put('/update/:id',SortieController.update);
router.delete('/delete/:id',SortieController.delete);

module.exports = router;