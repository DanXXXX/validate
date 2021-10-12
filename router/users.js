const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const expressValidator = require('express-validator');
const passwordValidator = require('password-validator');

// Requête d'affichage de la page signup
router.get('/signup', userController.getSignupPage);


// Requête d'envoi des informations du formulaire
router.post(
    '/signup',
    expressValidator.body('email').isEmail(), // vérification de l'email
    expressValidator.body('password').custom((value) => { // vérification du password
        const passwordValidationSchema = new passwordValidator();
        passwordValidationSchema.is().min(10);
        return passwordValidationSchema.validate(value);
    }),
    userController.signupUser
);

module.exports = router;