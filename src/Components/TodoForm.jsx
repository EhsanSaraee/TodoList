import { useState } from 'react';

const TodoForm = ({ addTodoHandler }) => {
   const [todo, setTodo] = useState('');

   const changeHandler = (event) => {
      setTodo(event.target.value);
   };

   const submitHandler = (event) => {
      event.preventDefault();

      if (!todo) {
         alert('please enter a todo...');
      }

      addTodoHandler(todo);
      setTodo('');
   };

   return (
      <form onSubmit={submitHandler}>
         <input type="text" value={todo} onChange={changeHandler} />
         <button type="submit">Add</button>
      </form>
   );
};

export default TodoForm;
