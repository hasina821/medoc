const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//On crée l'application express
const app = express();
const db = require('./service/connect');

app.use((req, res, next) => {
  //d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
  res.setHeader('Access-Control-Allow-Origin', '*');
  //d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  //d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//body-parser analyse le corps de la demande
app.use(bodyParser.json());
app.use('/public/images', express.static(path.join(__dirname, 'public/images')));

const MedocRoutes = require('./routes/medicaments');
app.use('/api/medicament', MedocRoutes);

const MedocInRoutes = require('./routes/MedocIn');
app.use('/api/in', MedocInRoutes);

const MedocOutRoutes = require('./routes/MedocOut');
app.use('/api/out', MedocOutRoutes);

const FournisseurRoutes = require('./routes/Fournisseur');
app.use('/api/fournisseur', FournisseurRoutes);

module.exports = app;
