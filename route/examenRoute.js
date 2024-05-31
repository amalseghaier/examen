const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verifyToken = require('../Middleware/authMiddleware');
// const roleMiddleware = require('../Middleware/roleMiddleware');
const examenController = require('../controller/examenController');
const utilisateur = require ('../model/userModel')


// Routes protégées pour les enseignants
router.post('/examens', verifyToken, examenController.createExamen);
router.put('/examens/:id', verifyToken, examenController.updateExamen);
router.delete('/examens/:id', verifyToken, examenController.deleteExamen);
router.get('/examen', verifyToken, examenController.getExamens); // Endpoint pour obtenir tous les examens

module.exports = router;
