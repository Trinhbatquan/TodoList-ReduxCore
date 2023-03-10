import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef} from 'react';


import {addOneTodo} from '../TodoList/actions'
import Todo from '../Todo';
import {customSelector} from '../../redux/reSelector'


export default function TodoList() {
  const [nameInput, setNameInput] = useState('');
  const [priority, setPriority] = useState('Medium');
  const inputRef = useRef();

  const TodoList = useSelector(customSelector);
  console.log({TodoList})

  const dispatch = useDispatch()
  function addTodo () {
    if (nameInput) {
      dispatch(addOneTodo(
        {
          name: nameInput,
          completed: false,
          priority
        }
      ))
      setNameInput('')
      inputRef.current.focus();
    }
  }


  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {TodoList.map((todo, index) => {
          return <Todo 
                  id = {index}
                  name={todo.name} 
                  priority={todo.priority}
                  key={index}  
                  completed={todo.completed}
                  />
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input 
            ref={inputRef}
            value={nameInput}
            onChange={(e) => {
              setNameInput(e.target.value)
            }}
          />
          <Select defaultValue={priority}
            onSelect={(e) => {
              console.log(typeof e)
              setPriority(e);
            }}
          >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button 
            onClick={() => {
              addTodo();
            }}
            type='primary'
          >
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}