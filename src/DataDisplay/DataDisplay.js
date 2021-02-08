import React from 'react';
import axios from 'axios';
import * as Constants from '../Constants/Constants.js';
import TableDisplay from './TableDisplay/TableDisplay.js';
import FiltrationDisplay from './FiltrationDisplay/FiltrationDisplay.js';

export default class DataDisplay extends React.Component
{

    constructor()
    {
        super();
        this.state = { restaurantData : null, filterActive: false};
    }

    render()
    {
        return <div>
            <FiltrationDisplay/> 
            <TableDisplay restaurantData = {this.state.restaurantData}/>
            </div>;
    }

    componentDidMount()
    {
        this.getRestaurantData();
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
               this.setState({restaurantData: response.data});
               console.log("restaurant data", response.data);
           }
        })
    }
}