import React from 'react';
import Counter from './Counter';
import FilteredList from './FilteredList';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <Counter />
      <hr />
      <FilteredList />
    </div>
  );
}

export default App;