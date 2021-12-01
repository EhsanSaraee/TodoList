const NavBar = ({ unCompletedTodos, onSelect, status }) => {
   if (!unCompletedTodos) return <h2 className="noneTodo">set your today todos</h2>;
   return (
      <header>
         <span>{unCompletedTodos}</span>
         <h2>are not completed</h2>
         <select onChange={onSelect} value={status}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="UnCompleted">UnCompleted</option>
         </select>
      </header>
   );
};

export default NavBar;
