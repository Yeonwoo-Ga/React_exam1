import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function ListBox(props){
  return (
    <div className='todo-box'>
      {props.list}
    </div>
  )
}



function App() {
  const [todo,setTodo] = useState([])
  const [change,setChange] = useState('')

  const ChangeValue = (e) =>{
    setChange(e.target.value)
  }

  const AddTodo = () => {
    const copy = [...todo]
    setTodo([...copy,change])
  }


  return (
    <>
    <div className='full-box'>
      <div>
        <input type='text' value={change} onChange={ChangeValue}/>
        <button onClick={AddTodo}>추가하기</button>
      </div>
      <h1>Todo List</h1>
      <div className='list-box'>
        {
          todo.map((todos) => {
            return <ListBox key={todos} list={todos}/>
          })
        }
      </div>
    </div>

    </>
  );
}

export default App;
