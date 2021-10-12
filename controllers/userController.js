const { validationResult } = require("express-validator");

// Export des fonctions du controller
module.exports = {
		// Fonction d'affichage de la page signup
    getSignupPage: (req, res) => {
        res.render('signup');
    },
		// Fonction d'enregistrement d'un utilisateur
    signupUser: (req, res) => {
        const errors = validationResult(req); // Récupération du résultat de la validation des données
        if (errors.isEmpty() === false) { // S'il y a des erreurs, alors renvoyer ces erreurs
            res.status(500).json({errors: errors.array()});
            return;
        }
        console.log(req.body);
        res.send('OK');
    }
}