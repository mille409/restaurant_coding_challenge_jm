import React from 'react';

export default class RestaurantInstance extends React.Component
{
    //Handles an individual table row in the table display. This component is given the entirety of the restaurant information. 
    //It displays a portion of the information and gives the rest to the modal so that the user can see the rest at will without being 
    //burdended by more than is required. 

    constructor()
    {
        super();
        this.state = {showModal: false};
        this.activateModal = this.activateModal.bind(this);
    }

    render()
    {
        if(this.props.restaurant)
        {
            return <tr key={this.props.restaurant.id} onClick = {this.activateModal}>
                        <td>{this.props.restaurant.name}</td>
                        <td>{this.props.restaurant.city}</td>
                        <td>{this.props.restaurant.state}</td>
                        <td>{this.props.restaurant.telephone}</td>
                        <td>{this.props.restaurant.genre}</td>
                   </tr>
        }
        else
        {
            return null;
        }
    }

    activateModal()
    {
        
    }
}