import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

function Home() {
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState([])
  const [editing, setEditing] = useState(false)
  //create another state variable which will be an array

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(editing === false)
      setTasks([...tasks, inputValue])
    else{
      tasks[editing] = inputValue
      setTasks(tasks)
    }
    setInputValue('')
  }

  function handleDelete(e, index){
    e.preventDefault()
    setTasks(tasks.filter((elem, ind) => {
      return index !== ind
    }))
  }
  function handleEdit(e, index){
    e.preventDefault()
    setInputValue(tasks[index])
    setEditing(index)
  }
  function handleCompleted(e, name){
    e.preventDefault()
    //add the name in a state array
  }

  return (
    <div className='todo'>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleChange} type='text' placeholder='Enter your task' />
        <button type='submit'>Add Task</button>
      </form>

      <ul>
        {
          tasks.map((elem, index) => {
            return (
              //if the name in the li, is in the array, apply class to it
              <li key={index}>
                {elem} 
                <a href='' onClick={(e) => handleDelete(e, index)}><DeleteIcon /></a>
                <a href='' onClick={(e) => handleEdit(e, index)}><EditIcon /></a>
                <a href='' onClick={(e) => handleCompleted(e, elem)}><CheckIcon /></a>
              </li>
            )
          })
        }
      </ul>

    </div>
  )
}

export default Home