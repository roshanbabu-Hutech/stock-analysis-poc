import React, { useEffect, useState } from "react";
import { Card, Input, Form, Button, Space, Divider, message } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { generateClient } from "aws-amplify/api";
import { updateStocks } from "../graphql/mutations";
import { createStocks } from "../graphql/mutations";
import "./addBucket.css";

function CreateStock() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const client = generateClient();
  const { id, name } = useParams();
  const location = useLocation();
  const stockData = location.state?.stockData || {};
  const [formData, setFormData] = useState({
    id: null,
    company: null,
    symbol: null,
    market_cap: null,
    sector: null,
    country: null,
    stock_bucket_id: null,
  });
  const { company, symbol, market_cap, sector, country } = formData;

  useEffect(() => {
    if (stockData) {
      try {
        setFormData({
          ...formData,
          ...stockData,
        });
      } catch (error) {
        console.error("Error parsing data:", error);
      }
    }
  }, [stockData]);
  const createStockHandler = async () => {
    try {
      const newStocks = await client.graphql({
        query: createStocks,
        variables: {
          input: {
            company,
            symbol,
            market_cap,
            sector,
            country,
            stock_bucket_id: id,
          },
        },
      });
      console.log(newStocks);
      navigate(`/stock-list/${id}/${name}`);
    } catch (error) {
      console.error("Error creating stock:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const updateStockHandler = async () => {
    const updatedStocks = await client.graphql({
      query: updateStocks,
      variables: {
        input: { ...formData, stock_bucket_id: id },
      },
    });

    if (updatedStocks) {
      message.success("Stock updated successfully");
      navigate(`/stock-list/${id}/${name}`);
    } else {
      message.error("Failed to update stock");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#EDF2F6",
        paddingTop: "5rem",
      }}
    >
      <Card
        title="Create Stock"
        style={{ width: "900px", height: "600px" }}
        className="create-stock-card"
      >
        <Form
          form={form}
          layout="vertical"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
        >
          <Form.Item label="Company" className="form-item">
            <Input
              name="company"
              placeholder="Enter company name"
              value={company}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Symbol" className="form-item">
            <Input
              name="symbol"
              placeholder="Enter symbol"
              value={symbol}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Market Cap" className="form-item">
            <Input
              name="market_cap"
              placeholder="Enter market cap"
              value={market_cap}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Sector" className="form-item">
            <Input
              name="sector"
              placeholder="Enter sector"
              value={sector}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Country" className="form-item">
            <Input
              name="country"
              placeholder="Enter country"
              value={country}
              onChange={handleInputChange}
            />
          </Form.Item>
          {/* <Form.Item label="Stock Bucket ID" className="form-item">
            <Input disabled={true} name="stock_bucket_id" placeholder="Enter stock bucket ID" value={} onChange={handleInputChange} />
          </Form.Item> */}
          <Divider />
          <Space style={{ float: "right" }}>
            <Button>Cancel</Button>
            <Button
              type="primary"
              onClick={stockData?.id ? updateStockHandler : createStockHandler}
            >
              {formData?.id ? "Update" : "Submit"}
            </Button>
          </Space>
        </Form>
      </Card>
    </div>
  );
}

export default CreateStock;
