const Todo = ({ todo, onComplete }) => {
   return (
      <section className="todo">
         <div className={todo.isCompleted ? 'completed' : ''}>{todo.text}</div>
         <div>
            <button>Edit</button>
            <button onClick={onComplete}>Complete</button>
         </div>
      </section>
   );
};

export default Todo;
