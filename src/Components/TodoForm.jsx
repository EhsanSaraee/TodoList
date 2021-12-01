import { useEffect, useRef, useState } from 'react';

const TodoForm = ({ submitTodo, edit }) => {
   const [todo, setTodo] = useState(edit ? edit.text : '');
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
         <input
            type="text"
            value={todo}
            onChange={changeHandler}
            placeholder={edit ? 'update todo ...' : 'add todo ...'}
            ref={inputRef}
         />
         <button type="submit">{edit ? 'Update' : 'Add'}</button>
      </form>
   );
};

export default TodoForm;
