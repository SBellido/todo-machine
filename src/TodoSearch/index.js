import React from 'react';
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue
}) {

  return (
    <input 
      placholder="Buscar"
      className="TodoSearch"
      value={searchValue} 
      onChange={(event) => {
       setSearchValue(event.target.value);
       console.log("value", searchValue);
      }
    }
    />
  );
}

export { TodoSearch };