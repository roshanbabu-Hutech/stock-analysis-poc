/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStocks = /* GraphQL */ `
  subscription OnCreateStocks($filter: ModelSubscriptionStocksFilterInput) {
    onCreateStocks(filter: $filter) {
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
export const onUpdateStocks = /* GraphQL */ `
  subscription OnUpdateStocks($filter: ModelSubscriptionStocksFilterInput) {
    onUpdateStocks(filter: $filter) {
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
export const onDeleteStocks = /* GraphQL */ `
  subscription OnDeleteStocks($filter: ModelSubscriptionStocksFilterInput) {
    onDeleteStocks(filter: $filter) {
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
export const onCreateStockBucket = /* GraphQL */ `
  subscription OnCreateStockBucket(
    $filter: ModelSubscriptionStockBucketFilterInput
  ) {
    onCreateStockBucket(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateStockBucket = /* GraphQL */ `
  subscription OnUpdateStockBucket(
    $filter: ModelSubscriptionStockBucketFilterInput
  ) {
    onUpdateStockBucket(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteStockBucket = /* GraphQL */ `
  subscription OnDeleteStockBucket(
    $filter: ModelSubscriptionStockBucketFilterInput
  ) {
    onDeleteStockBucket(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
