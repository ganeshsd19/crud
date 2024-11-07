import React,{useState} from 'react'

const CrudState = () => {
    const[items, setItems] = useState([]);
    const addItem = (itemName) => {
        setItems([...items, {id: Date.now(), name:itemName}])
    }

  return (
   <div>
    <h2>Product List</h2>
    <button onClick={() => addItem(prompt("Enter Item Name"))}>Add Item</button>

    <ul>
        {items.map((item) => (
            <li key={item.id}>{item.name}</li>
        ))}
    </ul>
   </div>
  )
}
export default CrudState