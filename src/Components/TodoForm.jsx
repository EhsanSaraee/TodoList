import { useEffect, useRef, useState } from 'react';

const TodoForm = ({ submitTodo, edit }) => {
   const [todo, setTodo] = useState('');
   const inputRef = useRef(null);

   useEffect(() => {
      inputRef.current.focus();
   }, []);

   const changeHandler = (event) => {
      setTodo(event.target.value);
   };

   const submitHandler = (event) => {
      event.preventDefault();

      if (!todo) {
         alert('please enter a todo...');
      }

      submitTodo(todo);
      setTodo('');
   };

   return (
      <form onSubmit={submitHandler}>
         {edit ? (
            <>
               <input
                  type="text"
                  value={todo}
                  onChange={changeHandler}
                  placeholder="update todo ..."
                  ref={inputRef}
               />
               <button type="submit">Update</button>
            </>
         ) : (
            <>
               <input
                  type="text"
                  value={todo}
                  onChange={changeHandler}
                  placeholder="add todo ..."
                  ref={inputRef}
               />
               <button type="submit">Add</button>
            </>
         )}
      </form>
   );
};

export default TodoForm;
