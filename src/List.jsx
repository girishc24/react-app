function List(){
    //const fruits = ["apple", "orange", "banana", "coconut","pineapple"]
    const fruits = [{id : 1, name :  "apple", calories : 95}, 
                    {id : 2, name : "orange", calories : 45}, 
                    {id : 3, name : "banana", calories : 105},
                    {id : 4, name : "coconut", calories : 155},
                    {id : 5, name : "pineapple", calories : 35}]

    //fruits.sort((a,b) = > a.name.localeCompare(b.name)); //APHABETICAL
    //fruits.sort((a,b) = > b.name.localeCompare(a.name)); //REVERSEAPHABETICAL
    //fruits.sort((a,b) = > a.calories - b.calories); //NUMERIC
    //fruits.sort((a,b) = > b.calories - c.calories); //Rverse NUMERIC

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); // low Calories 
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100); // High Calories 

    const listItems = fruits.map(fruits => <li key={fruits.id}>
                                                    {fruits.name} :
                                                    {fruits.calories}</li>);

    return(<ul>{listItems}</ul>);
}
export default List