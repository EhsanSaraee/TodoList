const Todo = ({ todo }) => {
   return (
      <section key={todo.id}>
         <div>{todo.text}</div>
         <div>
            <button>Edit</button>
            <button>Complete</button>
         </div>
      </section>
   );
};

export default Todo;
