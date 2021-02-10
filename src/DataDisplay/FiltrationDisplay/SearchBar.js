import React from 'react';
import {FaSearch} from 'react-icons/fa';
import './SearchBar.css';

export default class SearchBar extends React.Component
{

    constructor()
    {
        super();
        this.state = { searchQuery: ""}
        this.handleChange = this.handleChange.bind(this);
        this.initiateSearch = this.initiateSearch.bind(this);
    }

    handleChange(event)
    {
        this.setState({searchQuery: event.target.value});
    }

    render()
    {
        return <div>
                    <form>
                        <input type="text" placeholder="Search.." value = {this.state.searchQuery} onChange = {this.handleChange}></input>
                        <button type="submit" onClick = {this.initiateSearch}><FaSearch/></button>
                    </form>
               </div>
    }

    initiateSearch(event)
    {
        event.preventDefault();
        this.props.informParent(this.state.searchQuery);
    }
}