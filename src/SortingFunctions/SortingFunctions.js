//Exports a variety of sorting functions to order the restaurant table.
//Includes sorting alphabetically.

export function sortRestaurantsAlphabetically(unorderedArray)
{
    return unorderedArray.sort((a,b) => 
    {
        if(a.name > b.name)
        {
            return 1;
        }
        if(a.name < b.name)
        {
            return -1;
        }
        return 0;
    });
}