import Todo from './Todo';

const TodoList = ({ todos, onComplete, onDelete }) => {
   const renderTodos = () => {
      if (todos.length === 0) return <p>please add some todos</p>;

      return todos.map((todo) => (
         <Todo
            key={todo.id}
            todo={todo}
            onComplete={() => onComplete(todo.id)}
            onDelete={() => onDelete(todo.id)}
         />
      ));
   };
   return <>{renderTodos()}</>;
};

export default TodoList;
