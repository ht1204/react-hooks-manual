import React from 'react';

const { useState } = React;

export const HookCounter = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  const handleClick = () => setCount(prevCount => prevCount + 1);

  const handleList = () => {
    setList([...list, 'item']);
  };

  return (
    <>
      <p>Clicks: {count}</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleList}>Add Item</button>
      <br />
      {list}
    </>
  );
};