const express = require('express');
const router = express.Router();
const FournisseurController = require('../controllers/Fournisseur');

router.post('/', FournisseurController.create);
router.get('/all', FournisseurController.listAll);
router.get('/one/:id', FournisseurController.getOne);
router.put('/update/:id',FournisseurController.update);
router.delete('/delete/:id',FournisseurController.del);

module.exports = router;