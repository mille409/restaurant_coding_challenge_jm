import React from 'react';

export default class FilterActiveToggle extends React.Component
{

    constructor()
    {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {toggleActive: true}
    }

    render()
    {
        return (<label className="switch"> Toggle Filtration
        <input type="checkbox" onChange = {this.handleChange} checked = {this.state.toggleActive}></input>
        <span className="slider"></span>
      </label>);
    }

    handleChange(event)
    {
        this.props.informParent(event.target.checked);
        this.setState({toggleActive: event.target.checked});
    }
}