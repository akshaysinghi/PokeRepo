import fetch from 'isomorphic-fetch';


export const GET_POKEMON_REQUEST = 'GET_POKEMON_REQUEST';
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
export const GET_POKEMON_FAILURE = 'GET_POKEMON_FAILURE';

export const DELETE_POKEMON = 'DELETE_POKEMON';
export const EDIT_POKEMON = 'EDIT_POKEMON';
/**
   * This function used to initalized get pokemons request.
   * 
   * @param state & action
   * @return new object
   */
function getPokemonsRequest() {
  return {
    type: GET_POKEMON_REQUEST
  }
}
/**
   * This function used to initalized getPokemonsRequest success.
   * 
   * @param state & action
   * @return new object
   */
function getPokemonsSuccess(pokemons) {
  return {
    type: GET_POKEMON_SUCCESS,
    payload: {
      pokemons
    }
  };
}

/**
   * This function used to initalized getPokemonsRequest fail.
   * 
   * @param state & action
   * @return new object
   */
function getPokemonsFailure(ex) {
  return {
    type: GET_POKEMON_FAILURE,
    payload: {errorMessage: ex.message},
    error: true
  }
}
/**
   * This function used to fetch get pokemons request.
   * 
   * @param state & action
   * @return new object
   */
export function getPokemons(url='http://pokeapi.co/api/v2/pokemon/') {
  return dispatch => {
    dispatch(getPokemonsRequest())
    return fetch(url)
      .then(res => res.json())
      .then(json => dispatch(getPokemonsSuccess(json)))
      .catch(ex => dispatch(getPokemonsFailure(ex)))
  };
}
/**
   * This function used to fetch get pokemons next paginated request.
   * 
   * @param state & action
   * @return new object
   */
export function nextPage() {
  return (dispatch, state) => {
    let {nextUrl} = state();
    return dispatch(getPokemons(nextUrl));
  };
}
/**
   * This function used to fetch get pokemons previous paginated request.
   * 
   * @param state & action
   * @return new object
   */
export function prevPage() {
  return (dispatch, state) => {
    let {prevUrl} = state();
    dispatch(getPokemons(prevUrl));
  };
}
/**
   * This function used to initalized edit pokemon request.
   * 
   * @param state & action
   * @return new object
   */
export function editPokemon(pokemon) {
  return {
    type: EDIT_POKEMON,
    payload: {
      pokemon
    }
  };
}
/**
   * This function used to initalized delete pokemon request.
   * 
   * @param state & action
   * @return new object
   */
export function deletePokemon(name) {
  return {
    type: DELETE_POKEMON,
    payload: {
      name
    }
  };
}