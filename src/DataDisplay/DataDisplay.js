import React from 'react';
import axios from 'axios';
import * as Constants from '../Constants/Constants.js';
import TableDisplay from './TableDisplay/TableDisplay.js';
import FiltrationDisplay from './FiltrationDisplay/FiltrationDisplay.js';
import * as SortingFunctions from '../SortingFunctions/SortingFunctions.js';

export default class DataDisplay extends React.Component
{

    constructor()
    {
        super();
        this.state = 
        { 
            restaurantData: null, 
            filterActive: false, 
            filterByState: null, 
            filterByGenre: null,
            filterBySearchQuery: null,
            toggleActive: true
        };
        this.filterByState = this.filterByState.bind(this);
        this.filterByGenre = this.filterByGenre.bind(this);
        this.filterBySearchQuery = this.filterBySearchQuery.bind(this);
        this.determineIfFilterIsActive = this.determineIfFilterIsActive.bind(this);
        this.processToggleState = this.processToggleState.bind(this);
    }

    render()
    {
        return <div>
            <FiltrationDisplay 
                filterByState = {this.filterByState}
                filterByGenre = {this.filterByGenre}
                filterBySearchQuery = {this.filterBySearchQuery}
                processToggleState = {this.processToggleState}
                searchQuery = {this.state.filterBySearchQuery}
            /> 
            <TableDisplay 
                restaurantData = {this.state.restaurantData}
                filterActive = {this.state.filterActive}
                filterByState = {this.state.filterByState}
                filterByGenre = {this.state.filterByGenre}
                filterBySearchQuery = {this.state.filterBySearchQuery}

            />
            </div>;
    }

    componentDidMount()
    {
        this.getRestaurantData();
    }

    filterByState(state)
    {
        if(state !== "ALL")
        {
            this.setState({filterByState: state}, () => this.determineIfFilterIsActive() );
        }
        else
        {
            this.setState({filterByState: null}, () => this.determineIfFilterIsActive() );
        }
    }

    filterByGenre(genre)
    {
        if(genre !== "ALL")
        {
            this.setState({filterByGenre: genre}, () => this.determineIfFilterIsActive() );
        }
        else
        {
            this.setState({filterByGenre: null}, () => this.determineIfFilterIsActive() );
        }
    }

    processToggleState(filterState)
    {
        this.setState({toggleActive: filterState}, () => this.determineIfFilterIsActive());
    }

    filterBySearchQuery(searchQuery)
    {
        //We have a special case for wiping the search results. Note that this case is separate from the normal flow becuase neither the enter key nor the 
        // search button has been necessarily activated.
        if(searchQuery === "WIPE")
        {
            this.setState({filterBySearchQuery: null});
        }
        else
        {
            if(searchQuery)
            {
                this.setState({filterBySearchQuery: searchQuery});
            }
            else
            {
                this.setState({filterBySearchQuery: null});
            }
        }
    }

    determineIfFilterIsActive()
    {
        //Determines if a filter is present. Note that we do not consider the search query to be a "filter" even though it is named as such for consistency throughout the program.
        //We also have to consider the toggle which can potentially disable the filtration capability. However even if the filter is allowed by the toggle, no filter is active if both dropdowns have a null/ALL state. 
        if((!this.state.filterByState && !this.state.filterByGenre) || !this.state.toggleActive)
        {
            if(this.state.filterActive) //This conditional is required to prevent endless state modification. 
            {
                this.setState({filterActive: false});
            }
        }
        else
        {
            if(!this.state.filterActive && this.state.toggleActive) //Similar logic to the above comment.
            {
                this.setState({filterActive: true});
            }
        }

    }

    getRestaurantData()
    {
        let headerConfig = 
        {
            headers: 
            {
                Authorization: Constants.AUTHORIZATION_CODE,
            }
        }

        axios.get(Constants.GET_RESTAURANT_DATA,headerConfig)
        .then(response =>
        {
           if(response.status === 200)
           {
               this.setState({restaurantData: SortingFunctions.sortRestaurantsAlphabetically(response.data)});
           }
        })
    }
}