import React from 'react';
import './Pagination.css';

export default class Pagination extends React.Component
{

    constructor()
    {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    render()
    {
        return (
                <ul>
                  { this.props.pages.map((page, index) => {
                    return (
                      <li key={index}>
                        <a href="#" onClick={ () => this.handleClick(page)}>{ page }</a>
                      </li>
                    );
                  }) }
                </ul>
          );
    }

    handleClick(page)
    {
        console.log("Handle click called with a page value of",page);
        this.props.informParent(page);
    }
}