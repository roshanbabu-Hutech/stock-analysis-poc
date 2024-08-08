import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBucketButton from "./reactUiComponents/addBucket";
import BucketLists from "./reactUiComponents/bucketList";
import CreateStock from "./reactUiComponents/createStock";
import StockList from "./reactUiComponents/stockList";
import { generateClient } from "aws-amplify/api";
import '@aws-amplify/ui-react/styles.css';
import { listStockBuckets } from "./graphql/queries";
import { Layout } from "antd";
import SignOutButton from './reactUiComponents/signOutButton'; // Import the SignOutButton component
import { Authenticator } from '@aws-amplify/ui-react';
import { Login } from "./reactUiComponents/login";

const { Header, Content } = Layout;

const client = generateClient();

function AppContent() {
  const [bucketList, setBucketList] = useState([]);

  const getBucketList = async () => {
    const allStockBuckets = await client.graphql({
      query: listStockBuckets,
    });
    const isEmptyObject = (obj) => Object.keys(obj).length === 0;
    if (!isEmptyObject(allStockBuckets)) {
      const data = allStockBuckets?.data?.listStockBuckets?.items;
      const newdata = data?.map((item, index) => ({
        ...item,
        sl_no: index + 1,
      }));
      setBucketList(newdata || []);
    }
  };

  useEffect(() => {
    getBucketList();
  }, []);

  console.log(bucketList, "list");

  return (
    <Layout>
      <Header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #DDDDDD",
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '0 20px'
        }}
      >
        <SignOutButton /> {/* Add the sign-out button here */}
      </Header>
      <Content style={{ padding: '20px' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BucketLists />} />
            <Route path="/bucket-list" element={<BucketLists />} />
            <Route path="/create-stock/:id/:name/" element={<CreateStock />} />
            <Route path="/stock-list/:id/:name/" element={<StockList />} />
          </Routes>
        </BrowserRouter>
      </Content>
    </Layout>
  );
}

function App() {
  return (
    <>
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <AppContent />
        </div>
      )}
    </Authenticator>
    {/* <Login /> */}
    </>
    
  );
}

export default App;