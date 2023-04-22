import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

//здесь только  1 продукт
const SingleItem = ({ el, removeItem, edit }) => {
  return (
    <section>
      <div>
        <input
          type="checkbox"
          checked={el.completed}
          onChange={() => edit(el.id)}
        />
        <p className={el.completed ? 'line' : undefined}>{el.title} </p>
      </div>

      <button>
        <FaTrashAlt onClick={() => removeItem(el.id, el.title)} />
      </button>
    </section>
  );
};

export default SingleItem;
