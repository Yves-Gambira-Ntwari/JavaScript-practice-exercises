export default function List(){
  const fruits = [{id: 1, name: "Apple", calories: 50},
                  {id: 2, name: "Orange", calories: 20},
                  {id: 3, name: "Banana", calories: 102},
                  {id: 4, name: "Coconut", calories: 159},
                  {id: 5, name: "Pineaple", calories: 37}];
fruits.sort((a,b)=>a.name.localeCompare(b.name))
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
  const listItems = lowCalFruits.map(fruit => <li key={fruit.key}>{fruit.name}:&nbsp;<b>{fruit.calories}</b></li>)
    return(<ul>{listItems}</ul>)
}