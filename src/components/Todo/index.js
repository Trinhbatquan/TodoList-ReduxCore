import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch} from 'react-redux';

import {todoCompleted, deleteTodo} from '../TodoList/actions'

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, priority, id, completed}) {
  console.log({id})
  const [checked, setChecked] = useState(completed);

  const dispatch = useDispatch()



  
  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoCompleted(id));
  };
  const deleteT = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <Row
      className='todo'
      justify='space-between'
      align='middle'
      style={{
        marginBottom: '3px',
        padding: '5px 0',
        cursor: 'pointer',
        // ...(completed ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox 
        style={
              (completed ? { opacity: 0.5, textDecoration: 'line-through', width: '400px'} : { width: '400px'})}
        checked={completed} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag 
        className='tagTodo'
        color={priorityColorMapping[priority]} 
        style={(completed ? { opacity: 0.5, textDecoration: 'line-through',margin: 0, width: '60px'} : { margin: 0, width: '60px'})} 
      >
        {priority}
      </Tag>
      <div
        className='delete'
        style={{fontSize: '18px', cursor: 'pointer'}}
        onClick={() => deleteT(id) }
      >
        &times;
      </div>
    </Row>
  );
}

