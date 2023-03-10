import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import {  useDispatch } from 'react-redux';
import {useState} from 'react';


import {filterSearchChange} from '../Filters/actions'
import { filterByStatus, filterByPriority} from '../Filters/actions';






// const { Search } = Input;

export default function Filters() {
  const [inputSearch, setInputSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All')
  const [filterPriority, setFilterPriority] = useState([]);



  const dispatch = useDispatch();
  const changeInputSearch = (value) => {
    setInputSearch(value);
    dispatch(filterSearchChange(value))
  }
  const FilterByStatus = (value) => {
    setFilterStatus(value);
    dispatch(filterByStatus(value));
  }
  const FilterPriority = (value) => {
    console.log({value})
    setFilterPriority(value);
    dispatch(filterByPriority(value));
  }

 
  return (
    <Row justify='center'>
    {console.log('filter')}
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        
        >
          Search
        </Typography.Paragraph>
        <Input 
          placeholder='Input search text' 
          value={inputSearch}
          onChange={(e) => changeInputSearch(e.target.value)}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group defaultValue= {filterStatus}
            onChange={(e) => FilterByStatus(e.target.value)}
        >
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={filterPriority}
          onChange={(e) => FilterPriority(e)}
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
      </Col>
    </Row>
  );
}