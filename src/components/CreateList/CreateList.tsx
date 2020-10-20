import React, { useState } from 'react';
import styles from './CreateList.module.scss';


const CreateList: React.FC = () => {
  const [list, setState] = useState(['']);

  const appendToList = () => {
    list.push('');
    console.log(list);
    setState(list);
  }
  return (
    <div>
      <p>You clicked {list} times</p>
      <button onClick={appendToList}>
        Click me
      </button>
    </div>
  );
};

export default CreateList;
