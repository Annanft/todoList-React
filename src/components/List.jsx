import React from 'react';
import SingleItem from './SingleItem';
// здесь у нас полностью список(контейнер) продуктов
const List = ({ item, removeItem, edit }) => {
  return (
    <div className="list-container">
      {item.map((el, idx) => {
        return (
          <SingleItem el={el} removeItem={removeItem} key={idx} edit={edit} />
        );
      })}
    </div>
  );
};

export default List;
