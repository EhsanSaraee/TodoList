import Select from 'react-select';

const options = [
   { value: 'All', label: 'All' },
   { value: 'Completed', label: 'Completed' },
   { value: 'UnCompleted', label: 'UnCompleted' },
];

const NavBar = ({ unCompletedTodos, onSelect, selectedOption }) => {
   if (!unCompletedTodos)
      return <h2 className="noneTodo">set your today todos</h2>;
   return (
      <header>
         <span>{unCompletedTodos}</span>
         <h2>are not completed</h2>
         <Select onChange={onSelect} value={selectedOption} options={options} />
      </header>
   );
};

export default NavBar;
