const Examen = require('../model/examenModel');
const Classe = require('../model/classeModel');


const { Op } = require('sequelize');

// Fonction pour ouvrir automatiquement les examens en fonction de l'heure actuelle
const ouvrirExamensAutomatiquement = async () => {
  try {
    const now = new Date();
    const examensAouvrir = await Examen.findAll({
      where: {
        date_debut: {
          [Op.lte]: now, // La date de début est inférieure ou égale à l'heure actuelle
        },
      },
    });
    // Ton code pour ouvrir les examens ici (par exemple, mettre à jour l'état des examens à "ouvert")
  } catch (error) {
    console.error('Erreur lors de l\'ouverture automatique des examens :', error);
  }
};

// Fonction pour fermer automatiquement les examens selon la date de fin
const fermerExamensAutomatiquement = async () => {
  try {
    const now = new Date();
    const examensAfermer = await Examen.findAll({
      where: {
        date_fin: {
          [Op.lte]: now, // La date de fin est inférieure ou égale à l'heure actuelle
        },
      },
    });
    // Ton code pour fermer les examens ici (par exemple, mettre à jour l'état des examens à "fermé")
  } catch (error) {
    console.error('Erreur lors de la fermeture automatique des examens :', error);
  }
};

const createExamen = async (req, res) => {
  try {
    const { id_classe, ...examenData } = req.body;

    if (!id_classe) {
      return res.status(400).json({ message: "Veuillez fournir l'identifiant de la Classe pour l'examen." });
    }

    // Check if the Class exists
    const classe = await Classe.findByPk(id_classe);
    if (!classe) {
      return res.status(400).json({ message: "La Classe spécifiée n'existe pas." });
    }

    if (![60, 90].includes(examenData.duree)) {
      return res.status(400).json({ message: "La durée doit être de 60 minutes ou 90 minutes." });
    }

    const dateDebut = new Date(examenData.date_debut);
    const dateFin = new Date(examenData.date_fin);
    const currentDate = new Date();

    if (dateDebut <= currentDate) {
      return res.status(400).json({ message: "La date de début de l'examen ne peut pas être dans le passé." });
    }

    if (dateFin <= dateDebut) {
      return res.status(400).json({ message: "La date de fin doit être postérieure à la date de début." });
    }

    // Create the exam with id_classe
    const nouvelExamen = await Examen.create({
      titre: examenData.titre,
      date_debut: examenData.date_debut,
      date_fin: examenData.date_fin,
      duree: examenData.duree,
      type_examen: examenData.type_examen,
      id_classe: id_classe, // Set the id_classe field
    });

    res.status(201).json(nouvelExamen);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};










// Contrôleur pour obtenir tous les examens
// const getExamens = async (req, res) => {
//   try {
//     // Appel des fonctions pour ouvrir et fermer les examens automatiquement
//     await ouvrirExamensAutomatiquement();
//     await fermerExamensAutomatiquement();

//     // Récupération de tous les examens avec le nom de la classe associée
//     const examens = await Examen.findAll({ include: Classe });
//     res.status(200).json(examens);
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur lors de la récupération des examens.' });
//   }
// };
const getExamens = async (req, res) => {
  try {
    const examens = await Examen.findAll();
    res.status(200).json(examens);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des examens.' });
  }
};
// Contrôleur pour obtenir un examen par son ID
const getExamenById = async (req, res) => {
  const { id } = req.params;
  try {
    const examen = await Examen.findByPk(id, { include: Classe });
    if (!examen) {
      res.status(404).json({ message: 'Examen non trouvé.' });
    } else {
      res.status(200).json(examen);
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'examen.' });
  }
};

// Contrôleur pour mettre à jour un examen
const updateExamen = async (req, res) => {
  const { id } = req.params;
  try {
    const [updatedRows] = await Examen.update(req.body, { where: { id } });
    if (updatedRows === 0) {
      res.status(404).json({ message: 'Examen non trouvé.' });
    } else {
      res.status(200).json({ message: 'Examen mis à jour avec succès.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'examen.' });
  }
};

// Contrôleur pour supprimer un examen
const deleteExamen = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRowCount = await Examen.destroy({ where: { id } });
    if (deletedRowCount === 0) {
      res.status(404).json({ message: 'Examen non trouvé.' });
    } else {
      res.status(200).json({ message: 'Examen supprimé avec succès.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'examen.' });
  }
};

module.exports = {
  createExamen ,
  getExamens,
  getExamenById,
  updateExamen,
  deleteExamen,
};
