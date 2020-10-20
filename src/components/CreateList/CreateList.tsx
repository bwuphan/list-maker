import React, { useState } from 'react';

import styles from './CreateList.module.scss';

const CreateList: React.FC = () => {
  const [list, setList] = useState<string[]>(['']);

  const appendToList = () => {
    setList([...list, '']);
  }

  const changeInput = (e: any, idx: number) => {
    const newList = [...list]
    newList[idx] = e.target.value;
    setList(newList)

    // setList([...list.slice(0, idx), e.target.value, ...list.slice(idx)])
  }

  return (
    <div>
      {list.map((item, i) =>
        <input type="text" key={i} value={item} onInput={(e) => changeInput(e, i)}/>
      )}
      <button onClick={appendToList}>
        Click me
      </button>
    </div>
  );
};

export default CreateList;