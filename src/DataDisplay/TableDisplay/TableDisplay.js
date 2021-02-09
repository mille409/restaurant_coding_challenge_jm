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
                displayRows = this.props.restaurantData.map(element => 
                    <RestaurantInstance
                        restaurant = {element}
                    />)


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
                if(this.props.filterByState || this.props.filterByGenre)
                {
                    if(this.props.filterByState && !this.props.filterByGenre)
                    {
                        displayRows = FiltrationFunctions.filterRestaurantsByState(this.props.restaurantData,this.props.filterByState).map(element => 
                        <RestaurantInstance
                            restaurant = {element}
                        />)
                    }

                    if(!this.props.filterByState && this.props.filterByGenre)
                    {
                        displayRows = FiltrationFunctions.filterRestaurantsByGenre(this.props.restaurantData,this.props.filterByGenre).map(element => 
                        <RestaurantInstance
                            restaurant = {element}
                        />)
                    }

                    if(this.props.filterByState && this.props.filterByGenre)
                    {

                        displayRows = FiltrationFunctions.filterRestaurantsByGenre(FiltrationFunctions.filterRestaurantsByState(this.props.restaurantData,this.props.filterByState),this.props.filterByGenre).map(element => 
                        <RestaurantInstance
                            restaurant = {element}
                        />)
                    }

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
                        return <div>No data found which matches the given search parameters.</div>
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