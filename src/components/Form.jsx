import React, { useState } from 'react';

const Form = ({ addItem }) => {
  const [inp, setInp] = useState('');
  //usetate позволяет изменять input и делать его контролируемым
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(inp);
    setInp('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        maxLength={20}
        placeholder="new todo"
      />
      <button>add</button>
    </form>
  );
};

export default Form;
