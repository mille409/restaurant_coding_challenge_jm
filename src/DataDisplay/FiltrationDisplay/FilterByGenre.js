import React from 'react';

export default class FilterByGenre extends React.Component
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
                Filter By Genre
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="ALL">ALL</option>
                    <option value="American">American</option>
                    <option value="Seafood">Seafood</option>
                    <option value="International">International</option>
                    <option value="Asian">Asian</option>
                    <option value="Cafe">Cafe</option>
                    <option value="Steak">Steak</option>
                    <option value="Traditional">Traditional</option>
                    <option value="European">European</option>
                    <option value="French">French</option>
                    <option value="Belgian">Belgian</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Contemporary">Contemporary</option>
                    <option value="Oysters">Oysters</option>
                    <option value="Italian">Italian</option>
                    <option value="Bistro">Bistro</option>
                    <option value="Continental">Continental</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Grill">Grill</option>
                    <option value="Hawaiian">Hawaiian</option>
                    <option value="Polynesian">Polynesian</option>
                    <option value="Pacific Rim">Pacific Rim</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Coffee">Coffee</option>
                    <option value="Fusion">Fusion</option>
                    <option value="Irish">Irish</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Kosher">Kosher</option>
                    <option value="Sushi">Sushi</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Tea">Tea</option>
                    <option value="Eclectic">Eclectic</option>
                    <option value="British">British</option>
                </select>
                </label>
            </form>
           
        </div>
    }
}