import React from 'react';

export default class FilterByState extends React.Component
{

    constructor()
    {
        super();
        this.state = {value: "ALL"};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)
    {
        this.setState({value: event.target.value});
        this.props.informParent(event.target.value);
    }

    render()
    {
        return <div> 
            <form>
                <label>
                Filter By State
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="ALL">ALL</option>
                    <option value="AZ">AZ</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="FL">FL</option>
                    <option value="HI">HI</option>
                    <option value="MA">MA</option>
                    <option value="ME">ME</option>
                    <option value="MN">MN</option>
                    <option value="MD">MD</option>
                    <option value="NC">NC</option>
                    <option value="NJ">NJ</option>
                    <option value="NY">NY</option>
                    <option value="NV">NV</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="SC">SC</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="VA">VA</option>
                    <option value="WV">WV</option>
                </select>
                </label>
            </form>
           
        </div>
    }
}