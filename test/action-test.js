import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import nock from 'nock';
import * as actions from '../src/app/actions/actions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const pokemons = [{name: 'pikachu'}, {name: 'bulbasaur'}];

describe('actions', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  it('should create successful actions while fetching a list of pokemons', () => {
    nock('http://pokeapi.co/api/v2/pokemon')
      .get('/')
      .reply(200, pokemons);

    const store = mockStore({});
    const expectedActions = [{
      type: 'GET_POKEMON_REQUEST'
    }, {
      type: 'GET_POKEMON_SUCCESS',
      payload: {
        pokemons
      }
    }];

    return store.dispatch(actions.getPokemons())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });

  });

  it('should create unsuccessful actions while fetching a list of pokemons', () => {
    const errorMessage = 'Something Awful Happened';
    nock('http://pokeapi.co/api/v2/pokemon')
      .get('/')
      .replyWithError(errorMessage);
    const store = mockStore({});

    const expectedActions = [{
      type: 'GET_POKEMON_REQUEST'
    }, {
      type: 'GET_POKEMON_FAILURE',
      payload: {
        errorMessage: 'request to http://pokeapi.co/api/v2/pokemon/ failed, reason: '+errorMessage
      },
      error: true
    }];

    return store.dispatch(actions.getPokemons())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });

  });



  it('should create an action to edit a pokemon', () => {
    const pokemon = {name: 'pikachu'};
    const expectedAction = {
      type: 'EDIT_POKEMON',
      payload: {pokemon}
    };
    expect(actions.editPokemon(pokemon)).toEqual(expectedAction);
  });

  it('should create an action to delete a pokemon', () => {
    const name = 'pikachu';
    const expectedAction = {
      type: 'DELETE_POKEMON',
      payload: {name}
    };
    expect(actions.deletePokemon(name)).toEqual(expectedAction);
  });


})