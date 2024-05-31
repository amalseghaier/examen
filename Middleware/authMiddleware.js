const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).send({ message: 'No token provided.' });
  }

  const token = authHeader.split(' ')[1]; // Extract the token from the header

  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized!' });
    }

    req.user = decoded; // Attach user data to request object
    next();
  });
};

module.exports = verifyToken;
