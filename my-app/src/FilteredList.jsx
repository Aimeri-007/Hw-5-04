import React, { useState, useMemo, useCallback } from 'react';
import ChildButton from './ChildButton';

const initialUsers = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Alina' },
];

function FilteredList() {
  console.log('🟢 FilteredList перерендерился');

  const [users, setUsers] = useState(initialUsers);
  const [filter, setFilter] = useState('');

  const filteredUsers = useMemo(() => {
    console.log('🟡 Фильтрация выполняется (useMemo пересчитал)');
    return users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [users, filter]);

  const handleAddUser = useCallback(() => {
    console.log('➕ Добавляем пользователя');
    setUsers((prev) => [
      ...prev,
      { id: prev.length + 1, name: `User ${prev.length + 1}` },
    ]);
  }, []);

  return (
    <div>
      <h2>Задание 2: FilteredList</h2>

      <input
        type="text"
        placeholder="Фильтр по имени"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* ChildButton мемоизирован, а handleAddUser стабилен,
          поэтому при вводе текста в фильтр кнопка НЕ перерисовывается */}
      <ChildButton onClick={handleAddUser} label="Добавить пользователя" />
    </div>
  );
}

export default FilteredList;