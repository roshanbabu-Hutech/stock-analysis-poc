import logo from "./logo.svg";
import "./App.css";
import { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {Addbucket} from './ui-components';
import AddBucketButton from "./reactUiComponents/addBucket";
import BucketLists from "./reactUiComponents/bucketList";
import CreateStock from "./reactUiComponents/createStock";
import StockList from "./reactUiComponents/stockList";
import { generateClient } from "aws-amplify/api";
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';


// import { createStockBucket } from './graphql/mutations';
import { listStockBuckets, getStockBucket } from "./graphql/queries";
import { Layout } from "antd";
const { Header, Content } = Layout;
Amplify.configure(config);

const client = generateClient();



function App() {
  const [bucketList, setBucketList] = useState(false)

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
    }
  };

  useEffect(() => {
   getBucketList()
  }, [])
  
console.log(bucketList,"list");
  return (
    <div>
      <Layout>
        <Header
          style={{
            background: "#ffffff",
            borderBottom: "1px solid #DDDDDD",
          }}></Header>
        <Content>
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={bucketList?.length>0 ? <BucketLists/>:<AddBucketButton />} /> */}
              <Route path="/" element={<BucketLists/>} />
              <Route path="/bucket-list" element={<BucketLists />} />
              <Route path="/create-stock/:id/:name/" element={<CreateStock />} />
              <Route path="/stock-list/:id/:name/" element={<StockList />} />
            </Routes>
          </BrowserRouter>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
