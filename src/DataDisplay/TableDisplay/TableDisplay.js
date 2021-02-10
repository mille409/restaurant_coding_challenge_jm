import React from 'react';
import RestaurantInstance from './RestaurantInstance';
import * as FiltrationFunctions from '../../FiltrationFunctions/FiltrationFunctions.js';
import './TableDisplay.css';

export default class TableDisplay extends React.Component
{
    render()
    {
        let displayRows = null;
        if(this.props.restaurantData)
        {
            if(!this.props.filterActive)
            {
                let filteredArray = this.props.restaurantData;
                if(this.props.filterBySearchQuery)
                {
                    filteredArray = FiltrationFunctions.filterRestaurantsBySearchQuery(filteredArray,this.props.filterBySearchQuery);
                }

                displayRows = filteredArray.map(element => 
                    <RestaurantInstance
                        restaurant = {element}
                    />)

                    if(filteredArray.length > 0)
                    {
                        return <table>
                        <thead>
                            <tr>
                            <th>NAME</th>
                            <th>CITY</th>
                            <th>STATE</th>
                            <th>PHONE NUMBER</th>
                            <th>GENRES</th>
                        </tr>
                        </thead>
                        <tbody>
                            {displayRows}
                        </tbody>
                        </table>;
                    }
                    else
                    {
                        return <div>No data found which matches the given search parameters.</div>;
                    }
            }
            else
            {
                if(this.props.filterByState || this.props.filterByGenre)
                {
                    let filteredArray = [];
                    if(this.props.filterByState && !this.props.filterByGenre)
                    {
                        filteredArray = FiltrationFunctions.filterRestaurantsByState(this.props.restaurantData,this.props.filterByState);
                    }

                    if(!this.props.filterByState && this.props.filterByGenre)
                    {
                        filteredArray = FiltrationFunctions.filterRestaurantsByGenre(this.props.restaurantData,this.props.filterByGenre);
                    }

                    if(this.props.filterByState && this.props.filterByGenre)
                    {

                        filteredArray = FiltrationFunctions.filterRestaurantsByGenre(FiltrationFunctions.filterRestaurantsByState(this.props.restaurantData,this.props.filterByState),this.props.filterByGenre);
                    }

                    if(this.props.filterBySearchQuery)
                    {
                        filteredArray = FiltrationFunctions.filterRestaurantsBySearchQuery(filteredArray,this.props.filterBySearchQuery);
                    }

                    displayRows = filteredArray.map(element => 
                        <RestaurantInstance
                            restaurant = {element}
                        />)

                    if(displayRows.length > 0)
                    {
                        return <table>
                        <thead>
                            <tr>
                            <th>NAME</th>
                            <th>CITY</th>
                            <th>STATE</th>
                            <th>PHONE NUMBER</th>
                            <th>GENRES</th>
                        </tr>
                        </thead>
                        <tbody>
                            {displayRows}
                        </tbody>
                        </table>;
                    }
                    else
                    {
                        return <div>No data found which matches the given search parameters.</div>;
                    }
                }
                else
                {
                    return <div>LOADING...</div>;    
                }
            }
        }
        else
        {
            return <div>LOADING...</div>;
        }
    }
}