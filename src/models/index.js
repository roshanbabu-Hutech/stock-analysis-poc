// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Stocks, StockBucket, User } = initSchema(schema);

export {
  Stocks,
  StockBucket,
  User
};