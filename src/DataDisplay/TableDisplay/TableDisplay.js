import React from 'react';
import RestaurantInstance from './RestaurantInstance';
import * as FiltrationFunctions from '../../FiltrationFunctions/FiltrationFunctions.js';
import Pagination from './Pagination.js';
import './TableDisplay.css';

export default class TableDisplay extends React.Component
{

    constructor()
    {
        super();
        this.state = {page: 1};
        this.processPaginationSelection = this.processPaginationSelection.bind(this);
    }

    createPageArray(filteredArrayLength)
    {
        //Returns the number of pages to be created by the pagination component given the length of the "filtered" array (n.b. if no filtration or search parameters are entered the array is considered to be filtered vacously)
        let c = filteredArrayLength; //Purely for ease of readibility for the following calculation.
        let pageArray = [];
        if(c<10) //Otherwise we would geta page count of 0 with 7 entries as an example. 
        {
            return [1];
        } 
        let pageCount = ((c-c%10)/10)+1;
        for(let i=1;i<=pageCount;i++)
        {
            pageArray.push(i);
        }
        return pageArray;
    }

    returnPaginatedDisplayArray(restaurantArray,page)
    {
        //If given n for a page value will return the array entries from 10*(n-1) to 10*n where n is an integer greater than or equal to 1;
        let lowerBound = 10*(page-1);
        let upperBound = 10*page;
        let paginatedArray = [];
        for(let i= lowerBound; i<upperBound; i++)
        {
            paginatedArray.push(restaurantArray[i]);
        }
        return paginatedArray;
    }

    processPaginationSelection(page)
    {
        this.setState({page: page});
    }

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
                        return <div><table>
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
                            {this.returnPaginatedDisplayArray(displayRows,this.state.page)}
                        </tbody>
                        </table>
                        <Pagination 
                            pages = {this.createPageArray(displayRows.length)}
                            informParent = {this.processPaginationSelection}
                        /> </div>;
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
                        return <div> <table>
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
                            {this.returnPaginatedDisplayArray(displayRows,this.state.page)}
                        </tbody>
                        </table>
                        <Pagination 
                            pages = {displayRows.length}
                            informParent = {this.processPaginationSelection}
                        /> </div>;
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