import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = ({ todos, onComplete, onDelete, onUpdateTodo }) => {
   const [edit, setEdit] = useState({ id: null, text: '', isCompleted: false });

   const renderTodos = () => {
      if (todos.length === 0) return <p>please add some todos</p>;

      return todos.map((todo) => (
         <Todo
            key={todo.id}
            todo={todo}
            onComplete={() => onComplete(todo.id)}
            onDelete={() => onDelete(todo.id)}
            onEdit={() => setEdit(todo)}
         />
      ));
   };

   const editTodo = (newValue) => {
      onUpdateTodo(edit.id, newValue);
      setEdit({ id: null, text: '' });
   };

   return (
      <>
         {edit.id ? (
            <TodoForm submitTodo={editTodo} edit={edit} />
         ) : (
            renderTodos()
         )}
      </>
   );
};

export default TodoList;
