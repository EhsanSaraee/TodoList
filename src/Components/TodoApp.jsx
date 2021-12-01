import { useState } from 'react';
import Navbar from './NavBar';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
   const [todos, setTodos] = useState([]);

   const addTodo = (todo) => {
      const newTodo = {
         id: Math.floor(Math.random() * 1000),
         text: todo,
         isCompleted: false,
      };
      setTodos([...todos, newTodo]);
   };

   const completeTodo = (id) => {
      // find index
      const index = todos.findIndex((todo) => todo.id === id);
      // clone : do not mutate
      const selectedTodo = { ...todos[index] };
      selectedTodo.isCompleted = !selectedTodo.isCompleted;
      // clone again
      const updatedTodos = [...todos];
      updatedTodos[index] = selectedTodo;
      setTodos(updatedTodos);
   };

   const removeTodo = (id) => {
      const filteredTodo = todos.filter((todo) => todo.id !== id);
      setTodos(filteredTodo);
   };

   const updateTodo = (id, newValue) => {
      // find index
      const index = todos.findIndex((todo) => todo.id === id);
      // clone : do not mutate
      const selectedTodo = { ...todos[index] };
      selectedTodo.text = newValue;
      // clone again
      const updatedTodos = [...todos];
      updatedTodos[index] = selectedTodo;
      setTodos(updatedTodos);
   };

   return (
      <div className="container">
         <Navbar
            unCompletedTodos={todos.filter((todo) => !todo.isCompleted).length}
         />
         <TodoForm submitTodo={addTodo} />
         <TodoList
            todos={todos}
            onComplete={completeTodo}
            onDelete={removeTodo}
            onUpdateTodo={updateTodo}
         />
      </div>
   );
};

export default TodoApp;
