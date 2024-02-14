import { useState } from 'react'
import { TodoData } from './types'
import './App.css'
import TodoItem from './components/TodoItem'
const App: React.FC = () => {
  const [todoName, setTodoName] = useState<string>("")
  const [todoList, setTodoList] = useState<TodoData[]>([])
  const [id, setId] = useState<number>(0)
  const handleTaskCreate = ():void => {
    setTodoList([...todoList,{
      name:todoName,
      isComplete:false,
      id:id
    }])
    setId(id+1)
    setTodoName("")
  }
  return (
    <>
      <h1>Get Shi* Done</h1>
      <input value={todoName} onChange={(e) => setTodoName(e.target.value)}></input>
      <button onClick={handleTaskCreate}>add</button>
      <div>
        <h2>todo</h2>
        {todoList.map((data) => !data.isComplete ? <TodoItem todoData={data} allTodos={todoList} setTodos={setTodoList}/> : <></>)}
      </div>
      <div className='complete-todos'>
        <h2>done</h2>
        {todoList.map((data) => data.isComplete ? <TodoItem todoData={data} allTodos={todoList} setTodos={setTodoList}/> : <></>)}

      </div>
    </>
  )
}

export default App
