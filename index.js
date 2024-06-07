const express = require('express');

const client = require('prom-client')
const bodyParser = require('body-parser');
const cors = require('cors'); // Importez le middleware cors
const sequelize = require('./model/examenModel');
const examenRoutes = require('./route/examenRoute');

const app = express();
const PORT = process.env.PORT || 3019;

app.use(bodyParser.json());

// Utilisez le middleware cors pour autoriser les requêtes depuis toutes les origines
app.use(cors());

app.use('/examen', examenRoutes);

sequelize.sync().then(() => {
  console.log('Examen model synced with database');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Error syncing Examen model:', error);
});


// Enable Prometheus metrics collection
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Create a histogram metric for examen-ms service
const examenRequestDurationMicroseconds = new client.Histogram({
  name: 'examen_request_duration_seconds',
  help: 'Duration of examen-ms service HTTP requests in microseconds',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
});

// Register the histogram for examen-ms service
register.registerMetric(examenRequestDurationMicroseconds);

// Middleware to measure request duration for examen-ms service
app.use((req, res, next) => {
  const end = examenRequestDurationMicroseconds.startTimer();
  res.on('finish', () => {
    end({ method: req.method, route: req.url, code: res.statusCode });
  });
  next();
});

// Route to expose Prometheus metrics
app.get('/metrics', async (req, res) => {
  try {
    const metrics = await register.metrics();
    res.set('Content-Type', register.contentType);
    res.end(metrics);
  } catch (error) {
    console.error('Error generating metrics:', error);
    res.status(500).send('Error generating metrics');
  }
});




