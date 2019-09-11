/*//
First part is very inspired by
https://github.com/arcuri82/web_development_and_api_design/blob/master/les07/server_client_together/src/server/repository.js
 */

const pokemons = new Map();


let counter = 0;

function initWithPokemon(){

    pokemons.clear();
    counter = 0;

    createNewPokemon("Squirtle", "water", 1, "This is a water type pokemon lol", "1");
    createNewPokemon("Bulbasar", "grass", 2, "Grass type that is bad haha", "0");
    createNewPokemon("Charmander", "fire", 3, "Really cool fire man","0");
    createNewPokemon("asdasdasd", "grass", 4,"blabla blabla bla bla", "0");
    createNewPokemon("asaswsfgd", "grass", 5, "ahasdasjdasdjalksdjalkdjald aklsdjalksdjskl kadklasjlds", "0");

}

function createNewPokemon(name, type, number, details, rating){

    const id = "" + counter;
    counter++;

    const pokemon = {
        id: id,
        name: name,
        type: type,
        number: number,
        details: details,
        rating: rating,

    };

    pokemons.set(id, pokemon);

    return id;
}

function getPokemon(id){

    return pokemons.get(id);
}
function getType(type){

    return pokemons.get(type);
}

function getAllPokemon(){

    return Array.from(pokemons.values());
}
function getPokemonType(type){

    return pokemons.values().filter(type);
}
function deletePokemon(id){

    return pokemons.delete(id);
}
//Second half is very inspired by https://github.com/arcuri82/web_development_and_api_design/blob/master/les08/authentication/src/server/repository.js
const users = new Map();

function getUser(id){

    return users.get(id);
}

function verifyUser(id, password){

    const user = getUser(id);

    if(user === undefined){
        return false;
    }

    return user.password === password;
}

function createUser(id, password){

    if(getUser(id) !== undefined ){
        return false;
    }

    const user = {
        id: id,
        password: password
    };

    users.set(id, user);
    return true;
}


module.exports = {getUser, verifyUser, createUser, initWithPokemon, getPokemon, getAllPokemon, deletePokemon, getType};
