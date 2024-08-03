import React, { useState,useEffect } from "react";
import { Addbucket, Popup } from "../ui-components";
import { useNavigate } from "react-router-dom";
import { Button, Card, Divider, Form, Input, Modal } from "antd";
import './addBucket.css'
import { generateClient } from "aws-amplify/api";
import { createStockBucket } from '../graphql/mutations';

const client = generateClient()
const { TextArea } = Input;

function AddBucketButton() {
  const navigate = useNavigate()
  const [openStockModel, setopenStockModel] = useState(false);

  const handleClick = () => {
    setopenStockModel(true);

  };


  const handleSave =async(value)=>{
     const result = await client.graphql({
      query: createStockBucket,
      variables: {
          input: {
      ...value
      // "Stocks": /* Provide a Stocks instance here */
    }
      }
  });
  navigate('/bucket-list')


    
   
  }

  
  

  return (
    <div style={{display:"flex",justifyContent:"center",background:"#EDF2F6",paddingTop:"5rem"}} >
      <Card title='Create Stock Bucket' style={{width:"900px",height:"600px"}} extra={<Button type="primary" onClick={handleClick}>Add Bucket</Button>}/>
      <Modal open={openStockModel} footer={null} title="Add Stock Bucket" onCancel={handleSave}>
        <Divider/>
        <Form layout="vertical" style={{padding:"20px"}} onFinish={handleSave}>
          <Form.Item label="Name" name='name' className="form-item" 
          rules={[
            {
              required: true,
              message: 'Please enter name',
            },
          ]}
          >
            <Input placeholder="Enter Bucket Name"/>
          </Form.Item>
          <Form.Item label="Description" name='description' className="form-item">
            <TextArea placeholder="Enter Bucket Name"/>
          </Form.Item>
          <Form.Item style={{display:"flex",justifyContent:"end"}}>
          <Button type="primary" htmlType="submit">Save</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default AddBucketButton;
