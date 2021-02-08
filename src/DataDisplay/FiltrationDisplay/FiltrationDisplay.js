import React from 'react';
import SearchBar from './SearchBar.js';
import FilterByState from './FilterByState.js';

export default class FiltrationDisplay extends React.Component
{

    constructor()
    {
        super();
        this.state = {stateValue: null};
        this.informParent = this.informParent.bind(this);
    }


    render()
    {
        return <div> 
            <SearchBar/> 
            <FilterByState informParent = {this.informParent}/>
        </div>
    }

    informParent(state)
    {
        this.props.filterByState(state);
    }
}