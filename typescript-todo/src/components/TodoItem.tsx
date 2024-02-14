import React from 'react'
import {TodoData} from '../types'

  interface Props{
    todoData:TodoData;
    allTodos:{
      name: string;
      isComplete: boolean;
      id: number;
  }[];
  setTodos:React.Dispatch<React.SetStateAction<TodoData[]>>;
  }

  
const TodoItem:React.FC<Props> = ({todoData, allTodos, setTodos}:Props) => {
  const handleDoneButtonClick = ():void => {
    const newArrayTest = allTodos.filter((todo) => todo.id != todoData.id)
    todoData.isComplete= true
    setTodos([...newArrayTest, todoData])
  }

  return (
    <div className='todo-item'>
      <p>{todoData.name}</p>
      <button onClick={handleDoneButtonClick}>done</button>
    </div>
  )
}

export default TodoItem
