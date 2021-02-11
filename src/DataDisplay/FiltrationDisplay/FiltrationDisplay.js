import React from 'react';
import SearchBar from './SearchBar.js';
import FilterByState from './FilterByState.js';
import FilterByGenre from './FilterByGenre.js';
import FilterActiveToggle from './FilterActiveToggle.js';
import './FiltrationDisplay.css';

export default class FiltrationDisplay extends React.Component
{

    constructor()
    {
        super();
        this.state = {stateValue: null};
        this.informParentState = this.informParentState.bind(this);
        this.informParentGenre = this.informParentGenre.bind(this);
        this.informParentSearchQuery = this.informParentSearchQuery.bind(this);
        this.informParentToggle = this.informParentToggle.bind(this);
    }


    render()
    {
            return <div> 
            <SearchBar informParent = {this.informParentSearchQuery}/>
            <FilterActiveToggle informParent = {this.informParentToggle}/> 
            <div className = "groupFiltration">
                <div className = "additionalPadding">
                    <FilterByState informParent = {this.informParentState}/>
                </div>
            <FilterByGenre informParent = {this.informParentGenre}/>
            </div>
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

    informParentSearchQuery(searchQuery)
    {
        this.props.filterBySearchQuery(searchQuery);
    }

    informParentToggle(toggleState)
    {
        this.props.processToggleState(toggleState);
    }
}