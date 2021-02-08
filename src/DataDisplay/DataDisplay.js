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
        this.state = { restaurantData : null, filterActive: false, filterByState: null};
        this.filterByState = this.filterByState.bind(this);
    }

    render()
    {
        return <div>
            <FiltrationDisplay filterByState = {this.filterByState}/> 
            <TableDisplay 
                restaurantData = {this.state.restaurantData}
                filterActive = {this.state.filterActive}
                filterByState = {this.state.filterByState}

            />
            </div>;
    }

    componentDidMount()
    {
        this.getRestaurantData();
    }

    filterByState(state)
    {
        console.log("Filter by state called with", state);
        if(state !== "ALL")
        {
            this.setState({filterActive: true,filterByState: state});
        }
        else
        {
            this.setState({filterActive: false, filterByState: null});
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