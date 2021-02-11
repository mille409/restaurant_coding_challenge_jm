import React from 'react';
import './Pagination.css';

export default class Pagination extends React.Component
{

    constructor()
    {
        super();
        this.state = {currentPage: 1};
        this.handleClick = this.handleClick.bind(this);
    }

    render()
    {
        return (
                <ul>
                  { this.props.pages.map((page, index) => {
                    var activeClass = this.state.currentPage === page ? 'active' : '';
                    return (
                      <li key={index}>
                        <a href="#" className={`${activeClass}`} onClick={ () => this.handleClick(page)}>{ page }</a>
                      </li>
                    );
                  }) }
                </ul>
          );
    }

    handleClick(page)
    {
        this.props.informParent(page);
        this.setState({currentPage: page});
    }
}