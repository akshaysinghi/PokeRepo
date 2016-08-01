import React, { Component } from 'react';

import Button from './button';

export default class PokemonList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { editPokemon, deletePokemon, pokemons, isLoading, error } = this.props;
    if (isLoading) {
      return (
        <h3>
          Fetching...
        </h3>
      );
    }
    if(error) {
      return (
        <div>
          <p>
            Looks like <code>www.pokeapi.co/api/v2/pokemon/</code> is not responding.
            Please try after sometime.            
          </p>
        </div>
      );
    }
    return (
      <div className={'container row'}>
        <ul className={'list-group'}>
          {pokemons.map(function(pokemon, i) {
            return (
              <li className={'list-group-item'} key={i}>
                <h4 className={'col-md-10'}>
                {pokemon.name && pokemon.name.toUpperCase()}
                </h4>
                <Button type={'button'} action={()=> { editPokemon(pokemon) }} text={"Edit"} />
                <Button type={'button'} action={()=> { deletePokemon(pokemon.name) }} text={"Delete"} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

