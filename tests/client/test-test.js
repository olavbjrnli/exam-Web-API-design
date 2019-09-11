import * as ReactDOM from "enzyme";
import {App} from "../../src/client/app.jsx";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from "enzyme";
import Details from "../../src/client/details.jsx";
import Pokemonlist from "../../src/client/PokemonList";
import Pokemon from "../../src/client/pokemon";
configure({ adapter: new Adapter() });

const React = require('react');
const app = require('../../src/server/app');
const request = require('supertest');

// taken from https://stackoverflow.com/questions/41797169/basic-react-tests-failing-after-implementing-redux
it('App renders without crashing', () => {
    const div = document.createElement('div'); // create the div here
    ReactDOM.render(<App />, div);
});
it('Details renders without crashing', () => {
    const div = document.createElement('div'); // create the div here
    ReactDOM.render(<Details />, div);

});
it('Pokemonlist renders without crashing', () => {
    const div = document.createElement('div'); // create the div here
    ReactDOM.render(<Pokemonlist />, div);

});
it('Pokemon renders without crashing', () => {
    const div = document.createElement('div'); // create the div here
    ReactDOM.render(<Pokemon />, div);

});


//https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675
describe('App', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<App debug />);

        expect(component).toMatchSnapshot();
    });
});

