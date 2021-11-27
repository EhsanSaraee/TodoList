import Todo from './Todo';

const TodoList = ({ todos }) => {
   const renderTodos = () => {
      if (todos.length === 0) return <p>please add some todos</p>;

      return todos.map((todo) => <Todo key={todo.id} todo={todo} />);
   };
   return <>{renderTodos()}</>;
};

export default TodoList;
