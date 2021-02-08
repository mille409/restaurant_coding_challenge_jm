import React from 'react';
import RestaurantInstance from './RestaurantInstance';
import './TableDisplay.css';

export default class TableDisplay extends React.Component
{
    render()
    {
        let displayRows = null;
        if(this.props.restaurantData)
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
            return <div>LOADING...</div>;
        }
    }
}