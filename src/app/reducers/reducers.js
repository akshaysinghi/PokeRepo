import { GET_POKEMON_REQUEST, GET_POKEMON_SUCCESS, GET_POKEMON_FAILURE, DELETE_POKEMON, EDIT_POKEMON } from '../actions/actions';

export default rootReducer;

const initialState = {
  pokemons: [],
  isLoading: false,
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case GET_POKEMON_REQUEST:
      return getPokemonRequest(state, action);
    case GET_POKEMON_SUCCESS:
      return getPokemonSuccess(state, action);
    case GET_POKEMON_FAILURE:
      return getPokemonFail(state, action);
    case EDIT_POKEMON:
      return editPokemonReducer(state, action);
    case DELETE_POKEMON:
      return deletePokemonReducer(state, action); 
    default:
      return state;
  }

  return state;
}

/**
   * This function receive request to fetch pokemons
   * 
   * @param state & action
   * @return new object
   */
function getPokemonRequest(state, action) {
  return Object.assign({}, state, {
    isLoading: true, 
  });
}


/**
   * This function returns success response of get pokemons
   * 
   * @param state & action
   * @return new object
   */
function getPokemonSuccess(state, action) {
  return Object.assign({}, state, {
    isLoading: false, 
    pokemons: action.payload.pokemons.results, 
    nextUrl: action.payload.pokemons.next, 
    prevUrl: action.payload.pokemons.previous 
  });
}
/**
   * This function returns error response of get pokemons
   * 
   * @param state & action
   * @return new object
   */
function getPokemonFail(state, action) {
  return Object.assign({}, state, {
    isLoading: false,
    error: action.payload.errorMessage 
  });
}
/**
   * This function used to edit pokemon.
   * 
   * @param state & action
   * @return new object
   */
function editPokemonReducer(state, action) {
  console.log("EDIT_POKEMON", action.payload);  
  return state;
}
/**
   * This function used to delete pokemon.
   * 
   * @param state & action
   * @return new object
   */
function deletePokemonReducer(state, action) {
  console.log("DELETE_POKEMON", action.payload);  
  return state;
}