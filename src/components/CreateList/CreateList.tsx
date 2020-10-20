import React, { useState } from 'react';
import styles from './CreateList.module.scss';


const CreateList: React.FC = () => {
  let [list, setState] = useState(['']);

  const appendToList = () => {
    list.push('');
    console.log(list);
    list = [...list];
    setState(list);
  }

  const changeInput = (e: any, idx: number) => {
    list[idx] = list[idx] + e.target.value;
    console.log(list);
  }
  return (
    <div>
      {list.map((item, i) =>
        <input value={item} onChange={(e) => changeInput(e, i)}/>
      )}
      <p>You clicked {list} times</p>
      <button onClick={appendToList}>
        Click me
      </button>
    </div>
  );
};

export default CreateList;
