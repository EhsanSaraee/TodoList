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
         <div className="formControl">
            <input
               type="text"
               value={todo}
               onChange={changeHandler}
               placeholder={edit ? 'update todo ...' : 'add todo ...'}
               ref={inputRef}
            />
            <button className={`btn ${edit ? 'update' : 'add'}`} type="submit">
               {edit ? 'Update' : 'Add'}
            </button>
         </div>
      </form>
   );
};

export default TodoForm;
