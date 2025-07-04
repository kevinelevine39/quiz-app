const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors()); // Autorise les requêtes depuis le frontend

// Route pour récupérer les questions
app.get('/questions', (req, res) => {
    const questions = JSON.parse(fs.readFileSync('./questions.json'));
    res.json(questions);
});
// Route pour la racine
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon API de quiz ! Accède à /questions pour voir les données.');
});

// Démarrer le serveur
app.listen(3000, () => console.log('Backend running on http://localhost:3000'));