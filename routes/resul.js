const express = require('express');
const router = express.Router();
const resultatsController = require('../resultatsController/resultatsController');

// Définir les routes pour la gestion des résultats
router.post('/', resultatsController.creerResultat);
router.get('/', resultatsController.listerResultats);
router.get('/:id', resultatsController.getResultatById);
router.put('/:id', resultatsController.modifierResultat);
router.delete('/:id', resultatsController.supprimerResultat);

module.exports = router;
