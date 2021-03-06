import { useCallback, useEffect, useState } from 'react';
import Navbar from './NavBar';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
   const [todos, setTodos] = useState([]);
   const [filteredTodos, setFilteredTodos] = useState([]);
   const [selectedOption, setSelectedOption] = useState('All');

   const filterTodos = useCallback(
      (status) => {
         switch (status) {
            case 'Completed':
               return setFilteredTodos(
                  todos.filter((todo) => todo.isCompleted)
               );
            case 'UnCompleted':
               return setFilteredTodos(
                  todos.filter((todo) => !todo.isCompleted)
               );
            default:
               return setFilteredTodos(todos);
         }
      },
      [todos]
   );

   useEffect(() => {
      filterTodos(selectedOption.value);
   }, [todos, selectedOption, filterTodos]);

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

   const selectHandler = (event) => {
      setSelectedOption(event);
      filterTodos(event.value);
   };

   return (
      <div className="container">
         <Navbar
            unCompletedTodos={todos.filter((todo) => !todo.isCompleted).length}
            onSelect={selectHandler}
            selectedOption={selectedOption}
         />
         <TodoForm submitTodo={addTodo} />
         <TodoList
            todos={filteredTodos}
            onComplete={completeTodo}
            onDelete={removeTodo}
            onUpdateTodo={updateTodo}
         />
      </div>
   );
};

export default TodoApp;
