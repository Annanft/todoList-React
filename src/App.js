import React from 'react';
import Form from './components/Form';
import { useState } from 'react';
import List from './components/List';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import panda from './panda.png'


const local = (item) => {
  localStorage.setItem('list', JSON.stringify(item));
};

const getLocal = JSON.parse(localStorage.getItem('list') || '[]');

function App() {
  const [item, setItem] = useState(getLocal);
  // позволяем изменить список продуктов через SetItem

  const addItem = (r) => {
    // ф-я которая меняет Item который уже стал inp когда мы передали в Form inp в AddItem r=слову которое мы вводим в инпут.
    if (!r) {
      return;
    }
    const xx = [...item, { id: nanoid(), title: r, completed: false }];
    setItem(xx);
    local(xx);
    toast.success(`successfully added ${r} to list`)
  };

  const removeItem = (id,title) => {
    const rem = item.filter((el) => el.id !== id);
    setItem(rem);
    local(rem);
    toast.success(`removed ${title} from list`)
  };

  const edit = (id) => {
    const m = item.map((el) => {
      if (el.id === id) {
        const xxx = { ...el, completed:!el.completed };
        return xxx;
      }
      return el;
    });
    setItem(m);
    local(m);
  };

  return (
    <main>
      <h1>Simple todo list</h1>
      <div className="container">
        
        <Form addItem={addItem} />
         {item.length === 0 && <img src={panda} alt="" />}
        <List item={item} removeItem={removeItem} edit={edit} />
        <ToastContainer />
      </div>
    </main>
  );
}

export default App;
