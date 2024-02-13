import { useState } from 'react'

import './App.css'
import TodoItem from './components/TodoItem'
const App: React.FC = () => {
  const [todoName, setTodoName] = useState<string>("")
  const [todoList, setTodoList] = useState<{name:string, isComplete:boolean}[]>([])

  const handleTaskCreate = ():void => {
    setTodoList([...todoList,{
      name:todoName,
      isComplete:false
    }])
  }
  return (
    <>
    {todoName}
      <h1>Get Shi* Done</h1>
      <input value={todoName} onChange={(e) => setTodoName(e.target.value)}></input>
      <button onClick={handleTaskCreate}>add</button>
      <div>
        <h2>todo</h2>
        {todoList.map((data) => !data.isComplete ? <TodoItem todoData={data}/> : <></>)}
      </div>
      <div>
        <h2>done</h2>
        {todoList.map((data) => data.isComplete ? <TodoItem todoData={data}/> : <></>)}

      </div>
    </>
  )
}

export default App
