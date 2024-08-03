import React, { useState, useEffect } from "react";
import { Button, Card, Table, Modal, Form, Input, Divider, message } from "antd";
import {
  CloseOutlined,
  FormOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons"; // Import the icon from @ant-design/icons
import { generateClient } from "aws-amplify/api";
import { updateStockBucket,deleteStockBucket } from '../graphql/mutations';
import { listStockBuckets, getStockBucket } from "../graphql/queries";
import { createStockBucket } from "../graphql/mutations";

const { TextArea } = Input;

const client = generateClient();

const { confirm } = Modal;

function BucketLists() {
  const [openStockModel, setopenStockModel] = useState(false);
  const [bucketList, setBucketList] = useState([]);
  const [getOneBucket, setGetOneBucket] = useState({});
  const [form] = Form.useForm();

  const getBucketList = async () => {
    const allStockBuckets = await client.graphql({
      query: listStockBuckets,
    });
    const isEmptyObject = (obj) => {
      return Object.keys(obj).length === 0;
    };
    if (!isEmptyObject(allStockBuckets)) {
      const data = allStockBuckets?.data?.listStockBuckets?.items;
      const newdata = data?.map((item, index) => ({
        ...item,
        sl_no: index + 1,
      }));
    
      setBucketList(newdata || []);
    }else{
      message("don't have bucktes")
    }
  };
  // List all items
  useEffect(() => {
    getBucketList();
  }, []);

  const getBucketDataById = async (id) => {
    // Get a specific item
    setopenStockModel(true);
    const oneStockBucket = await client.graphql({
      query: getStockBucket,
      variables: { id: id },
    });
    const bucketData = oneStockBucket?.data?.getStockBucket
    setGetOneBucket(bucketData);
    form.setFieldsValue({
      name: bucketData?.name,
      description: bucketData?.description,
    });
  };
  const handleClick = () => {
    setopenStockModel(true);
  };
  const handleSave = async (value) => {
    if (getOneBucket) {
      const updatedStockBucket = await client.graphql({
        query: updateStockBucket,
        variables: {
            input: {
              id: getOneBucket?.id,
        ...value
      }
      
        }
    });
    setopenStockModel(false)
    getBucketList()
    }else{
    const result = await client.graphql({
      query: createStockBucket,
      variables: {
        input: {
          ...value,
          // "Stocks": /* Provide a Stocks instance here */
        },
      },
    });
    setopenStockModel(false);
    getBucketList();
  }
  };

  const handleDeleteBucket = async(id)=>{
    const deletedStockBucket = await client.graphql({
      query: deleteStockBucket,
      variables: {
          input: {
              id: id
          }
      }
  });
  getBucketList()
  }

  const showDeleteConfirm = (id) => {
    confirm({
      title: "Are you sure you want to delete this bucket?",
      icon: <ExclamationCircleFilled />,
      // content: 'Some descriptions',
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleDeleteBucket(id)

      },
      onCancel() {
        setopenStockModel(false)
      },
    });
  };
  const columns = [
    {
      dataIndex: "sl_no",
      key: "sl_no",
      title: "Sl No.",
      width: 80,
    },
    {
      dataIndex: "name",
      key: "name",
      title: "Stock Name",
      width: 300,
    },
    {
      dataIndex: "description",
      key: "description",
      title: "Description",
      width: 300,
    },
    {
      dataIndex: "action",
      key: "action",
      title: "Action",
      width: 100,
      render: (_, rec) => {
        return (
          <div style={{ display: "flex", gap: "21px" }}>
            <FormOutlined onClick={() => getBucketDataById(rec?.id)} />
            <CloseOutlined onClick={()=>showDeleteConfirm(rec?.id)} />
          </div>
        );
      },
    },
  ];

  const dataSource = [
    {
      sl_no: 1,
      stock_name: "test",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#EDF2F6",
        paddingTop: "5rem",
      }}>
      <Card
        title="Bucket List"
        style={{ width: "900px", height: "600px" }}
        className="bucketList-card"
        extra={
          <Button type="primary" onClick={handleClick}>
            Add Bucket
          </Button>
        }>
        <Table
          columns={columns}
          dataSource={bucketList}
          pagination={false}
          scroll={{ y: 430 }}
        />
      </Card>
      <Modal
        open={openStockModel}
        footer={null}
        title="Add Stock Bucket"
        onCancel={() => setopenStockModel(false)}>
        <Divider />
        <Form
        form={form}
          layout="vertical"
          style={{ padding: "20px" }}
          onFinish={handleSave}>
          <Form.Item
            label="Name"
            name="name"
            className="form-item"
            rules={[
              {
                required: true,
                message: "Please enter name",
              },
            ]}>
            <Input placeholder="Enter Bucket Name" value={getOneBucket?.name} />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            className="form-item">
            <TextArea placeholder="Enter Bucket Name" defaultValue={getOneBucket?.description} />
          </Form.Item>
          <Form.Item style={{ display: "flex", justifyContent: "end" }}>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default BucketLists;
