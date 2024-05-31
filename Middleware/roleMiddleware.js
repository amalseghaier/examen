// const roleMiddleware = (role) => (req, res, next) => {
//     const utilisateur = req.user; // Assuming req.user contains the decoded JWT payload
  
//     if (!utilisateur || utilisateur.type_utilisateur !== role) {
//       return res.status(403).send({ message: 'Unauthorized access.' });
//     }
  
//     next();
//   };
  
//   module.exports = roleMiddleware;
  