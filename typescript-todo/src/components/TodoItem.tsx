import React from 'react'

interface Props {
    
        name: string;
        isComplete: boolean;
    
    }

const TodoItem:React.FC = ({name, isComplete}:Props) => {
  return (
    <div>
      <p>{name}</p>
        
    </div>
  )
}

export default TodoItem
