import React,{useState} from "react";
import "./index.css";
import TodoList from './listItems.js';
const App = ()=>{
  const [inputList , setinputList] = useState("");
  const [Items, setItems]=useState([]);

  const itemEvent = (event)=>{
    setinputList(event.target.value);
  };

  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setinputList(''); 
  };
  const deleteItems=(id)=>{
    //alert("hlo");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index!==id;

      })
    })
  }

    return(
      <>
        <div className="main_div">
          <div className="center_div">
            <br />
            <h1>Todo List</h1>
            <br />
            <input type="text" value={inputList} placeholder="Add a Items" onChange={itemEvent} />
            <button onClick={listOfItems}>+</button>
            <ol>
              { Items.map( (itemval,index) => {
                return  (
                <TodoList 
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                  />
                  );
              } )}
            </ol>
          </div>
        </div>
      </>
    )
  }

export default App;