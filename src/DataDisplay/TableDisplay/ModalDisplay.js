import React from 'react';

export default class ModalDisplay extends React.Component
{
    //The styling to make this data display a true modal has not been applied yet so it's more of a dynamic wall of data.
    render()
    {
        if(this.props.modalActivated && this.props.modalRestaurant)
        {
            return <div>{this.props.modalRestaurant.name}  Data
                   <p>Address: {this.props.modalRestaurant.address1}   ,Zip Code: {this.props.modalRestaurant.zip}</p>
                   <p>Attire: {this.props.modalRestaurant.attire}</p>
                   <p>Telephone: {this.props.modalRestaurant.telephone}</p>
                   <p>Website: {this.props.modalRestaurant.website}</p>
            </div>
        }
        else
        {
            return null;
        }
    }
}