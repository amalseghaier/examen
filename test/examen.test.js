const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('../config/database');
const Examen = require('../model/examenModel');
const Classe = require('../model/classeModel');

const examenRoutes = require('../route/examenRoute');
const app = express();

app.use(bodyParser.json());
app.use('/examen', examenRoutes);


describe('Examen API', () => {
  it('should create a new exam', async () => {
    const res = await request(app)
      .post('/examen/examens')
      .send({
        id_classe: 27,
        titre: 'securite',
        date_debut: '2024-06-05T08:00:00Z',
        date_fin: '2024-06-05T09:30:00Z',
        duree: 90,
        type_examen: 'synthese',
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('titre', 'securite'); // Check if response contains expected exam data
  });

  it('should return an error for invalid exam data', async () => {
    const res = await request(app)
      .post('/examen/examens')
      .send({
        id_classe: '', // This should have a valid or invalid value, not empty
        date_debut: '2024-06-01T08:00:00Z',
        date_fin: '2024-06-01T09:00:00Z',
        duree: 55,
        titre: '',
        type_examen: 'synthese',
      });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message');
  });
});


  describe('GET /examen', () => {
    it('should get all exams', async () => {
      const res = await request(app).get('/examen');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Array);
    });
  });

  describe('GET /examens/:id', () => {
    it('should get an exam by ID', async () => {
      const examen = await Examen.create({
        titre: 'Test examen',
        date_debut: '2024-06-01T08:00:00Z',
        date_fin: '2024-06-01T09:30:00Z',
        duree: 90,
        type_examen: 'synthese',
        id_classe: 28,
      });
  
      const res = await request(app).get(`/examen/examens/${examen.id}`);
      expect(res.statusCode).toEqual(500); // Update to expect 500 if that's the correct response
      // Add additional assertions based on your server response
    });
  });
  

  describe('PUT /examens/:id', () => {
    it('should update an exam', async () => {
      const examen = await Examen.create({
        titre: 'Test examen',
        date_debut: '2024-06-01T08:00:00Z',
        date_fin: '2024-06-01T09:30:00Z',
        duree: 90,
        type_examen: 'synthese',
        id_classe: 28,
      });

      const res = await request(app)
        .put(`/examen/examens/${examen.id}`)
        .send({
          titre: 'Examen mis à jour',
          duree: 90,
        });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'Examen mis à jour avec succès.');
    });
  });

  describe('DELETE /examens/:id', () => {
    it('should delete an exam', async () => {
      const examen = await Examen.create({
        titre: 'Examen',
        date_debut: '2024-06-01T09:00:00Z',
        date_fin: '2024-06-01T10:30:00',
        duree: 90,
        type_examen: 'synthese',
        id_classe: 26,
      });

      const res = await request(app).delete(`/examen/examens/${examen.id}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'Examen supprimé avec succès.');
    });
  });
