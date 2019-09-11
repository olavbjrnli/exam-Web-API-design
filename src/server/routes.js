
const express = require('express');
const router = express.Router();
const passport = require('passport');

const Repository = require('./repository');

//Taken and inspired by https://github.com/arcuri82/web_development_and_api_design/blob/master/les08/authentication/src/server/routes.js

router.post('/api/login', passport.authenticate('local'), (req, res) => {

    res.status(204).send();
});

router.post('/api/signup', function(req, res){

    const created = Repository.createUser(req.body.userId, req.body.password);

    if(! created){
        res.status(400).send();
        return;
    }

    /*
        The incoming HTTP request was not authenticated. However, once we
        create a valid new user, we should manually authenticate the request.
        Otherwise, user would need to make a separate "/api/login" call.
     */
    passport.authenticate('local')(req, res, () => {
        req.session.save((err) => {
            if (err) {
               //shouldn't really happen
                res.status(500).send();
            } else {
                res.status(201).send();
            }
        });
    });
});

router.post('/api/logout', function(req, res){

    req.logout();
    res.status(204).send();
});

/*
    Provide info on logged in user
 */
router.get("/api/user", (req, res) => {

    if(req.user){
        res.json({
            userId: req.user.id,
        });
        return;
    }

    res.status(401).send();
});
//Taken and inspired by https://github.com/arcuri82/web_development_and_api_design/blob/master/les07/server_client_together/src/server/app.js
router.get('/api/pokemons', (req, res) => {

        res.json(Repository.getAllPokemon());

});

router.get('/api/pokemons/:id', (req, res) => {

    const pokemon = Repository.getPokemon(req.params["id"]);

    if (pokemon === undefined || pokemon === null) {
        res.status(404);
        res.send()
    } else {
        res.json(pokemon);
    }

});
router.get('/api/pokemons/:type', (req, res) => {

    const pokemon = Repository.getType(req.params["type"]);

    if (pokemon === undefined || pokemon === null) {
        res.status(404);
        res.send()
    } else {
        res.json(pokemon);
    }
});

router.delete('/api/pokemons/:id', (req, res) => {

    const deleted = Repository.deletePokemon(req.params.id);
    if (deleted) {
        res.status(204);
    } else {

        res.status(404);
    }
    res.send();
});

module.exports = router;
