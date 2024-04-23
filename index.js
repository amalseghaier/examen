const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./model/examenModel');
const examenRoutes = require('./route/examenRoute');

const app = express();
const PORT = process.env.PORT || 3004;

app.use(bodyParser.json());
app.use('/api/examen', examenRoutes);

sequelize.sync().then(() => {
  console.log('Examen model synced with database');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Error syncing Examen model:', error);
});





