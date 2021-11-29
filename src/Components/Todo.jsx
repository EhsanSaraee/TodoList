const Todo = ({ todo, onComplete, onDelete }) => {
   return (
      <section className="todo">
         <div onClick={onComplete} className={todo.isCompleted ? 'completed' : ''}>{todo.text}</div>
         <div>
            <button>Edit</button>
            <button onClick={onDelete}>Delete</button>
         </div>
      </section>
   );
};

export default Todo;
