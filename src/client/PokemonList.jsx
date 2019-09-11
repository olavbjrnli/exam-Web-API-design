import React from 'react';
import { Link, withRouter} from "react-router-dom";


//Class is very inspired by https://github.com/arcuri82/web_development_and_api_design/blob/master/les07/server_client_together/src/client/home.jsx
class Pokemonlist extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            pokemon: null,
            error: null,
            value: 2,
        };
    }
    componentDidMount() {
        this.fetchPokemon();

    }
    async fetchPokemon() {


        const url = "/api/pokemons";

        let response;
        let payload;

        try {
            response = await fetch(url);
            payload = await response.json();
        } catch (err) {
            //Network error: eg, wrong URL, no internet, etc.
            this.setState({
                error: "ERROR when retrieving list of pokemon: " + err,
                pokemon: null
            });
            return;
        }

        if (response.status === 200) {
            this.setState({
                error: null,
                pokemon: payload,


            });
        } else {
            this.setState({
                error: "Issue with HTTP connection: status code " + response.status,
                pokemon: null
            });
        }
    }
    deletePokemon = async (id) => {

        const url = "/api/pokemons/" + id;

        let response;

        try {
            response = await fetch(url, {method: "delete"});
        } catch (err) {
            alert("Delete operation failed: " + err);
            return false;
        }

        if (response.status !== 204) {
            alert("Delete operation failed: status code " + response.status);
            return false;
        }

        this.fetchPokemon();

        return true;
    };

    handleRadioButton(value) {
        this.setState({
            value: value

        });
        console.log(this.state.value);
    }

    render() {
        let table;

        if (this.state.error !== null) {
            table = <p>{this.state.error}</p>
        } else if (this.state.pokemon === null || this.state.pokemon.length === 0) {
            table = <p>There is no pokemon registered in the database</p>
        } else if(this.state.value === 2){

            table = <div className="makeSmall">
                <table className="w3-table-all w3-card-4">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Number</th>
                        <th/>
                        <th><img src="/imgs/fire.png" height="42" width="80"/></th>
                        <th><img src="/imgs/water.png" height="42" width="80"/></th>
                        <th><img src="/imgs/grass.png" height="42" width="80"/></th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.state.pokemon.map(b =>
                        <tr key={"key_" + b.id} >
                            <td></td>
                            <td>{b.name}</td>
                            <td>{b.type}</td>
                            <td>{b.number}</td>
                            <td>  <Link to={"/details?pokemonId=" + b.id}>
                                <button className="btn">Details
                                </button></Link>
                                <button className="btn" onClick={_ => this.deletePokemon(b.id)}>
                                   X
                                </button>

                            </td>
                            <td>{b.rating}</td>
                            <td/>
                            <td/>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>;


        } else {
            table = <div className="makeSmall">
                <table className="w3-table-all w3-card-4">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th></th>
                        <th><img src="/imgs/fire.png" height="42" width="80"/></th>
                        <th><img src="/imgs/water.png" height="42" width="80"/></th>
                        <th><img src="/imgs/grass.png" height="42" width="80"/></th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.state.pokemon.map(b =>
                        <tr key={"key_" + b.id}>
                            <td></td>
                            <td>{b.number}</td>
                            <td>{b.name}</td>
                            <td>{b.type}</td>
                            <td><Link to={"/details?pokemonId=" + b.id}>
                                <button className="btn">Details
                                </button>
                            </Link>
                                <button className="btn" onClick={_ => this.deletePokemon(b.id)}>
                                    X
                                </button>

                            </td>
                            <td>{b.rating}</td>
                            <td/>
                            <td/>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>;
        }

        return (
            <div>
                <h2>Pokemon List</h2>
                <p>press on one of the buttons to filter, so the list is starting with name or number</p>
                <p> |
                </p>
                <p>V</p>
                <input
                    type="radio"
                    checked={this.state.value === 1}
                    onChange={() => this.handleRadioButton(1)}
                />Number
                <input
                    type="radio"
                    checked={this.state.value === 2}
                    onChange={() => this.handleRadioButton(2)}
                />
                Name
                {table}
            </div>
        );
    }
}

export default Pokemonlist;