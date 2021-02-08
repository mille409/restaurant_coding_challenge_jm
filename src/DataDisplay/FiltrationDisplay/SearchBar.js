import React from 'react';
import {FaSearch} from 'react-icons/fa';
import './SearchBar.css';

export default class SearchBar extends React.Component
{
    render()
    {
        return <div>
                    <input type="text" placeholder="Search.."></input>
                    <button type="submit"><FaSearch/></button>
               </div>
    }
}