import React, { useState } from 'react';
import styles from './CreateList.module.scss';


const CreateList: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default CreateList;
