import React, { Component } from 'react';

import { connect } from 'react-redux';
import PokemonList from '../components/pokemon-list';
import Footer from '../components/footer';
import { getPokemons, editPokemon, deletePokemon } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons,
    isLoading: state.isLoading,
    error: state.error
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getPokemons());
  return {
    editPokemon: (pokemon) => {
      dispatch(editPokemon(pokemon));
    },
    deletePokemon: (name) => {
      dispatch(deletePokemon(name));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
