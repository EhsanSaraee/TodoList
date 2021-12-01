import { useState } from 'react';

const NavBar = ({ unCompletedTodos, filterTodos }) => {
   const [status, setStatus] = useState('All');

   const changeHandler = (event) => {
      setStatus(event.target.value);
      filterTodos(event.target.value);
   };

   if (!unCompletedTodos) return <h2>set your today todos</h2>;
   return (
      <header>
         <span>{unCompletedTodos}</span>
         <h2>are not completed</h2>
         <select onChange={changeHandler} value={status}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="UnCompleted">UnCompleted</option>
         </select>
      </header>
   );
};

export default NavBar;
