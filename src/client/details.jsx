import React from 'react';
import HeaderBar from "./headerbar";
import Pokemon from "./pokemon";

//Taken from and very inspired by https://github.com/arcuri82/web_development_and_api_design/blob/master/les07/server_client_together/src/client/edit.jsx
class Details extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            pokemon: null,
            error: null
        };

        this.pokemonId = new URLSearchParams(window.location.search).get("pokemonId");

        if(this.pokemonId === null){
            this.state.error = "Unspecified pokemon id";
        }
    }

    componentDidMount(){
        if(this.state.error === null) {
            this.fetchPokemon();
        }
    }

    async fetchPokemon(){

        const url = "/api/pokemons/" + this.pokemonId;

        let response;
        let payload;

        try {
            response = await fetch(url);
            payload = await response.json();
        } catch (err) {
            //Network error: eg, wrong URL, no internet, etc.
            this.setState({
                error: "ERROR when retrieving pokemon: " + err,
                pokemon: null
            });
            return;
        }

        if (response.status === 200) {
            this.setState({
                error: null,
                pokemon: payload
            });
        } else {
            this.setState({
                error: "Issue with HTTP connection: status code " + response.status,
                pokemon: null
            });
        }
    }

    render() {

        if(this.state.error !== null){
            return(
                <div>
                    <p>Cannot find pokemon. {this.state.error}</p>
                </div>
            );
        }

        if(this.state.pokemon === null){
            return(<p>Loading...</p>);
        }
        return(
            <div>
            <HeaderBar
                userId={this.props.userId}
                updateLoggedInUserId={this.props.updateLoggedInUserId}
            />
            <div>

               <Pokemon
                   name={this.state.pokemon.name}
                   type={this.state.pokemon.type}
                   number={this.state.pokemon.number}
                   details={this.state.pokemon.details}
                   pokemonId={this.pokemonId}
                   rating={this.state.pokemon.rating}
               />
            </div>
            </div>



        );

    }
}
export default (Details);