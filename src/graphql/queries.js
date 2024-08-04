/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStocks = /* GraphQL */ `
  query GetStocks($id: ID!) {
    getStocks(id: $id) {
      id
      company
      symbol
      market_cap
      sector
      country
      stock_bucket_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStocks = /* GraphQL */ `
  query ListStocks(
    $filter: ModelStocksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        company
        symbol
        market_cap
        sector
        country
        stock_bucket_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStockBucket = /* GraphQL */ `
  query GetStockBucket($id: ID!) {
    getStockBucket(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStockBuckets = /* GraphQL */ `
  query ListStockBuckets(
    $filter: ModelStockBucketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStockBuckets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      password
      mobile
      age
      profile_pic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        password
        mobile
        age
        profile_pic
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
