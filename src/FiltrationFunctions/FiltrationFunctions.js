export function filterRestaurantsByState(unfilteredArray,state)
{
    let filteredArray = [];
    for(let restaurant of unfilteredArray)
    {
        if(restaurant.state === state)
        {
            filteredArray.push(restaurant);
        }
    }
    return filteredArray;
}

export function filterRestaurantsByGenre(unfilteredArray,genre)
{
    let filteredArray = [];
    for(let restaurant of unfilteredArray)
    {
        if(restaurant.genre.includes(genre))
        {
            filteredArray.push(restaurant);
        }
    }
    return filteredArray;
}