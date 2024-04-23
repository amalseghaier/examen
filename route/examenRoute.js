const express = require('express');
const router = express.Router();
const examenController = require('../controller/examenController');

// Route pour créer un nouvel examen
router.post('/examens', examenController.createExamen);

// Route pour obtenir tous les examens
router.get('/examens', examenController.getExamens);

// Route pour obtenir un examen par son ID
router.get('/examens/:id', examenController.getExamenById);

// Route pour mettre à jour un examen
router.put('/examens/:id', examenController.updateExamen);

// Route pour supprimer un examen
router.delete('/examens/:id', examenController.deleteExamen);

module.exports = router;
