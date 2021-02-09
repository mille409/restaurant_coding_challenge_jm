import React from 'react';
import SearchBar from './SearchBar.js';
import FilterByState from './FilterByState.js';
import FilterByGenre from './FilterByGenre.js';

export default class FiltrationDisplay extends React.Component
{

    constructor()
    {
        super();
        this.state = {stateValue: null};
        this.informParentState = this.informParentState.bind(this);
        this.informParentGenre = this.informParentGenre.bind(this);
    }


    render()
    {
        return <div> 
            <SearchBar/> 
            <FilterByState informParent = {this.informParentState}/>
            <FilterByGenre informParent = {this.informParentGenre}/>
        </div>
    }

    informParentState(state)
    {
        this.props.filterByState(state);
    }

    informParentGenre(genre)
    {
        this.props.filterByGenre(genre);
    }
}