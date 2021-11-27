import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
   const [todos, setTodos] = useState([]);

   const addTodoHandler = (todo) => {
      const newTodo = {
         id: Math.floor(Math.random() * 1000),
         text: todo,
         isCompleted: false,
      };
      setTodos([...todos, newTodo]);
   };

   const completeTodo = (id) => {
      console.log(id);
   };

   return (
      <div className="container">
         <TodoForm addTodoHandler={addTodoHandler} />
         <TodoList todos={todos} onComplete={completeTodo} />
      </div>
   );
};

export default TodoApp;
