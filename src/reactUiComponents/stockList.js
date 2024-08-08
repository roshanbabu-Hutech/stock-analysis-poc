import {
  Card,
  Button,
  Row,
  Col,
  Space,
  message,
  Spin,
  Empty,
  Modal,
} from "antd";
import React, { useEffect, useState } from "react";
import "./addBucket.css";
import { generateClient } from "aws-amplify/api";
import { listStockUniverses  } from "../graphql/queries";
import { deleteStockUniverse } from "../graphql/mutations";
import { useNavigate, useParams } from "react-router-dom";
import { ExclamationCircleFilled } from "@ant-design/icons";

function StockList() {
  const { confirm } = Modal;
  const [stockList, setStockList] = useState([]);
  const [loader, setLoader] = useState(false);
  const client = generateClient();
  const navigate = useNavigate();
  const { id, name } = useParams();

  useEffect(() => {
    const fetchStockData = async () => {
      setLoader(true);
      try {
        const variables = {
          filter: {
            stock_bucket_id: {
              eq: id,
            },
          },
        };
        const allStocks = await client.graphql({
          query: listStockUniverses,
          variables,
        });
        setLoader(false);
        setStockList(allStocks?.data?.listStockUniverses?.items || []);
      } catch (err) {
        message.error("Something went wrong on Fetching StockList");
        setLoader(false);
      }
    };
    fetchStockData();
  }, [id]);

  const addStockHandler = () => {
    navigate(`/create-stock/${id}/${name}`);
  };

  const deleteStockHandler = async (stockId) => {
    const handleDeleteBucket = async () => {
      try {
        await client.graphql({
          query: deleteStockUniverse,
          variables: {
            input: {
              id: stockId,
            },
          },
        });
        message.success("Stock deleted successfully");
        setStockList((prev) => prev.filter((stock) => stock.id !== stockId));
      } catch (error) {
        message.error("Failed to delete stock");
      }
    };

    const showDeleteConfirm = () => {
      confirm({
        title: "Are you sure you want to delete this stock?",
        icon: <ExclamationCircleFilled />,
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
          handleDeleteBucket();
        },
        onCancel() {
          console.log("Cancel delete");
        },
      });
    };

    showDeleteConfirm();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#EDF2F6",
        padding: "1rem",
      }}
    >
      {loader && (
        <div className="full_screen_load">
          <Spin />
        </div>
      )}
      <Card
        title={
          <>
            Stock List - <span style={{ fontWeight: "bold" }}>{name}</span>
          </>
        }
        style={{ width: "900px", height: "600px" }}
        extra={
          <Button type="primary" onClick={addStockHandler}>
            Add Stock
          </Button>
        }
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "3%",
          }}
        >
          {stockList.length === 0 ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            stockList.map((stock) => (
              <Card style={{ width: "30%" }} key={stock.id}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <label className="view-label">Company</label>
                    <p className="stock-value">{stock.company || "-"}</p>
                  </Col>
                  <Col span={12}>
                    <label className="view-label">Symbol</label>
                    <p className="stock-value">{stock.symbol || "-"}</p>
                  </Col>
                  <Col span={12}>
                    <label className="view-label">Market Cap</label>
                    <p className="stock-value">{stock.market_cap || "-"}</p>
                  </Col>
                  <Col span={12}>
                    <label className="view-label">Sector</label>
                    <p className="stock-value">{stock.sector || "-"}</p>
                  </Col>
                  <Col span={12}>
                    <label className="view-label">Country</label>
                    <p className="stock-value">{stock.country || "-"}</p>
                  </Col>
                </Row>
                <Space style={{ marginTop: "20px", gap: "20px" }}>
                  <Button onClick={() => deleteStockHandler(stock.id)}>
                    Delete
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => {
                      navigate(`/create-stock/${id}/${name}`, {
                        state: {
                          stockData: {
                            id:stock.id,
                            company: stock.company,
                            symbol: stock.symbol,
                            market_cap: stock.market_cap,
                            sector: stock.sector,
                            country: stock.country,
                          },
                        },
                      });
                    }}
                  >
                    Update
                  </Button>
                </Space>
              </Card>
            ))
          )}
        </div>
      </Card>
    </div>
  );
}

export default StockList;
