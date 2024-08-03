import { Card, Button, Row, Col, Space } from "antd";
import React from "react";
import "./addBucket.css";

function StockList() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#EDF2F6",
        paddingTop: "5rem",
      }}>
      <Card
        title="Stock List"
        style={{ width: "900px", height: "600px" }}
        extra={<Button type="primary">Add Stock</Button>}>
        <Card style={{ width: "302px" }}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <label className="view-label">Company</label>
              <p className="stock-value">test</p>
            </Col>
            <Col span={12}>
              <label className="view-label">Symbol</label>
              <p className="stock-value">test</p>
            </Col>
            <Col span={12}>
              <label className="view-label">Market Cap</label>
              <p className="stock-value">test</p>
            </Col>
            <Col span={12}>
              <label className="view-label">Sector</label>
              <p className="stock-value">test</p>
            </Col>
            <Col span={12}>
              <label className="view-label">Country</label>
              <p className="stock-value">test</p>
            </Col>
          </Row>
          <Space style={{marginTop:"20px",gap:"20px"}}>
            <Button>Delete</Button>
            <Button type="primary">Update</Button>
          </Space>
        </Card>
      </Card>
    </div>
  );
}

export default StockList;
