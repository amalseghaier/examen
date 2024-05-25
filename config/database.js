const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql', // Utilisation de MySQL
  host: process.env.DB_HOST || 'localhost', // L'hôte de la base de données (utilisation de la variable d'environnement si disponible)
  port: process.env.DB_PORT || 3306, // Le port de la base de données (utilisation de la variable d'environnement si disponible)
  username: process.env.DB_USER || 'root', // Le nom d'utilisateur de la base de données (utilisation de la variable d'environnement si disponible)
  password: process.env.DB_PASSWORD || 'mysqlserver', // Le mot de passe de la base de données (utilisation de la variable d'environnement si disponible)
  database: process.env.DB_DATABASE || 'examen', // Le nom de la base de données (utilisation de la variable d'environnement si disponible)
});

// Vérification de la connexion à la base de données
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
