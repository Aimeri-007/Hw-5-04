import React from 'react';

const ChildButton = React.memo(function ChildButton({ onClick, label }) {
  console.log(`🔵 ChildButton "${label}" перерендерился`);

  return <button onClick={onClick}>{label}</button>;
});

export default ChildButton;