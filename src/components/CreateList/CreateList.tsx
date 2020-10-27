import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

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
      <div className="d-flex flex-column w-50 mx-auto">
        {list.map((item, i) =>
          <InputGroup>
            <select className="w-25">
              {Array.from(Array(list.length), (x, j) => {
                return <option key={j} value={j} selected={j === i}>{j + 1}</option>
              })}
            </select>
            <input className="w-75" type="text" key={i} value={item} onInput={(e) => changeInput(e, i)} />
          </InputGroup>
        )}
        <Button onClick={appendToList}>
          Add Item
      </Button>
      </div>
    </div>
  );
};

export default CreateList;