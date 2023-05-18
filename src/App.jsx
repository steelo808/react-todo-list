import { useState } from "react";
import "./styles.css"

export default function App(){
  const [newItem, setNewItem] = useState("") 


  function handleSubmit(e){
      e.preventDefault() 
  }

  return(
    <> 
    <form className ="new-item-form" onSubmit={ handleSubmit }>
      <div className ="form-row">
        <label htmlFor="item">New Item</label>
        <input value={ newItem } onChange={e=> setNewItem(e.target.value)} type ="text" id = "item"/>
      </div>

      <button className="btn">ADD</button>
  </form>
  <h1 className ="header">Todo List</h1>
  <ul>
    <li>
      <label>
        <input type ="checkbox" />
        item 1
      </label>
      <button className ="btn btn-danger">Delete</button>
    </li>
    <li>
      <label>
        <input type ="checkbox" />
        item 2
      </label>
      <button className ="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
  )
}

