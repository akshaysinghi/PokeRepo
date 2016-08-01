import expect from 'expect';
import reducer from '../src/app/reducers/reducers';
import deepFreeze from 'deep-freeze';
import { GET_POKEMON_REQUEST, GET_POKEMON_SUCCESS, GET_POKEMON_FAILURE, DELETE_POKEMON, EDIT } from '../src/app/actions/actions';

const pokemons = [{name: 'pikachu'}, {name: 'bulbasaur'}];

describe('pokemon reducer', () => {
  
  it('should return the initial state', () => {
    const expectedState = {
      pokemons: [],
      isLoading: false,
    };

    deepFreeze(expectedState);
    expect(
      reducer(undefined, {})
    ).toEqual(expectedState)
  });


  it('should handle GET_POKEMON_REQUEST', () => {
    const stateBefore = {
      pokemons: [],
      isLoading: false,
    };

    const expectedState = {
      pokemons: [],
      isLoading: true,
    };
    deepFreeze(stateBefore);
    expect(
      reducer(stateBefore, {type: GET_POKEMON_REQUEST})
    ).toEqual(expectedState)
  });

  it('should handle GET_POKEMON_SUCCESS', () => {
    const stateBefore = {
      pokemons: [],
      isLoading: false,
    };

    const action = {
      type: GET_POKEMON_SUCCESS,
      payload: {
        pokemons: {
          results: pokemons,
          next: 'next',
          previous: 'previous'
        }
      }
    };

    const expectedState = {
      pokemons: [],
      isLoading: false, 
      pokemons, 
      nextUrl: 'next', 
      prevUrl: 'previous' 
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      reducer(stateBefore, action)
    ).toEqual(expectedState)
  });

  it('should handle GET_POKEMON_FAILURE', () => {
    const stateBefore = {
      pokemons: [],
      isLoading: false,
    };

    const action = {
      type: GET_POKEMON_FAILURE,
      payload: {
        errorMessage: 'error message'
      }
    };
    const expectedState = {
      pokemons: [],
      isLoading: false,
      error: 'error message'
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(
      reducer(stateBefore, action)
    ).toEqual(expectedState)
  });

  // Ignoring EDIT and DELETE because its just console.log reducers.


});
