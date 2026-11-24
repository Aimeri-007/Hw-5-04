import React, { useState, useCallback } from 'react';
import ChildButton from './ChildButton';

function Counter() {
  console.log('🟢 Counter перерендерился');

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('👆 handleClick вызван');
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Задание 1: Counter</h2>
      <p>Счётчик: {count}</p>
      <ChildButton onClick={handleClick} label="Увеличить счётчик" />
    </div>
  );
}

export default Counter;