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
            filterByGenre: null
        };
        this.filterByState = this.filterByState.bind(this);
        this.filterByGenre = this.filterByGenre.bind(this);
        this.determineIfFilterIsActive = this.determineIfFilterIsActive.bind(this);
    }

    render()
    {
        return <div>
            <FiltrationDisplay 
                filterByState = {this.filterByState}
                filterByGenre = {this.filterByGenre}
            /> 
            <TableDisplay 
                restaurantData = {this.state.restaurantData}
                filterActive = {this.state.filterActive}
                filterByState = {this.state.filterByState}
                filterByGenre = {this.state.filterByGenre}

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

    determineIfFilterIsActive()
    {
        if(!this.state.filterByState && !this.state.filterByGenre)
        {
            if(this.state.filterActive) //This conditional is required to prevent endless state modification. 
            {
                this.setState({filterActive: false});
            }
        }
        else
        {
            if(!this.state.filterActive) //Similar logic to the above comment.
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
               console.log("restaurant data", response.data);
           }
        })
    }
}