const express = require('express');
const router = express.Router();
const examenController = require('../controller/examenController');

// Route pour créer un nouvel examen
router.post('/examens', examenController.createExamen);

// Route pour obtenir tous les examens
router.get('/', examenController.getExamens);

// Route pour obtenir un examen par son ID
router.get('/examens/:id', examenController.getExamenById);

// Route pour mettre à jour un examen
router.put('/examens/:id', examenController.updateExamen);

// Route pour supprimer un examen
router.delete('/examens/:id', examenController.deleteExamen);
// Route pour autoriser les étudiants d'une classe à passer un examen réel
router.post('/autoriser-examen-classe/:id_examen/:id_classe', async (req, res) => {
    const { id_examen, id_classe } = req.params;
    try {
      // Obtenir la liste des étudiants de la classe
      const etudiantsClasse = await Etudiant.findAll({ where: { id_classe } });
      if (!etudiantsClasse || etudiantsClasse.length === 0) {
        return res.status(404).json({ message: 'Aucun étudiant trouvé pour cette classe.' });
      }
  
      // Autoriser chaque étudiant à passer l'examen réel
      for (const etudiant of etudiantsClasse) {
        // Vérifier si l'étudiant est déjà autorisé à passer l'examen
        const autorisationExamen = await AutorisationExamen.findOne({
          where: { id_etudiant: etudiant.id, id_examen }
        });
        if (!autorisationExamen) {
          // Si l'étudiant n'est pas déjà autorisé, l'autoriser à passer l'examen
          await AutorisationExamen.create({ id_etudiant: etudiant.id, id_examen });
        }
      }
  
      res.status(200).json({ message: 'Étudiants de la classe autorisés à passer l\'examen réel.' });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de l\'autorisation de l\'examen pour la classe.', error: error.message });
    }
  });
  

module.exports = router;
