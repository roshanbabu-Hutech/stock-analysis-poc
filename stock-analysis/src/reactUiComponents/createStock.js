import React from 'react'
import { Card,Input,Form,Button, Space, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import './addBucket.css'

function CreateStock() {
    const navigate = useNavigate()
  return (
    <div style={{display:"flex",justifyContent:"center",background:"#EDF2F6",paddingTop:"5rem"}}>
        <Card title='Create Stock' style={{width:"900px",height:"600px"}} className='create-stock-card' >
        <Form layout="vertical"  labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}>
          <Form.Item label="Company" className="form-item">
            <Input placeholder="Enter company name"/>
          </Form.Item>
          <Form.Item label="Name" className="form-item">
            <Input placeholder="Enter Bucket Name"/>
          </Form.Item>
          <Form.Item label="Symbol" className="form-item">
            <Input placeholder="Enter symbol"/>
          </Form.Item>
          <Form.Item label="Market Cap" className="form-item">
            <Input placeholder="Enter market cap"/>
          </Form.Item>
          <Form.Item label="Sector" className="form-item">
            <Input placeholder="Enter sector"/>
          </Form.Item>
          <Form.Item label="Country" className="form-item">
            <Input placeholder="Enter country"/>
          </Form.Item>
          <Divider/>
          <Space style={{float:"right"}}>
            <Button>Cancel</Button>
            <Button type="primary" onClick={()=>navigate('/stock-list')}>Submit</Button>
          </Space>
        </Form>
        </Card>
    </div>
  )
}

export default CreateStock