const Todo = ({ todo, onComplete }) => {
   return (
      <section className="todo">
         <div>{todo.text}</div>
         <div>
            <button>Edit</button>
            <button onClick={onComplete}>Complete</button>
         </div>
      </section>
   );
};

export default Todo;
