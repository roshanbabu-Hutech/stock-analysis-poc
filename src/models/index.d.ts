import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerStocks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stocks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly company: string;
  readonly symbol?: string | null;
  readonly market_cap?: string | null;
  readonly sector?: string | null;
  readonly country?: string | null;
  readonly stock_bucket_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStocks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stocks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly company: string;
  readonly symbol?: string | null;
  readonly market_cap?: string | null;
  readonly sector?: string | null;
  readonly country?: string | null;
  readonly stock_bucket_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Stocks = LazyLoading extends LazyLoadingDisabled ? EagerStocks : LazyStocks

export declare const Stocks: (new (init: ModelInit<Stocks>) => Stocks) & {
  copyOf(source: Stocks, mutator: (draft: MutableModel<Stocks>) => MutableModel<Stocks> | void): Stocks;
}

type EagerStockBucket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StockBucket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStockBucket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StockBucket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StockBucket = LazyLoading extends LazyLoadingDisabled ? EagerStockBucket : LazyStockBucket

export declare const StockBucket: (new (init: ModelInit<StockBucket>) => StockBucket) & {
  copyOf(source: StockBucket, mutator: (draft: MutableModel<StockBucket>) => MutableModel<StockBucket> | void): StockBucket;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly password?: string | null;
  readonly mobile?: number | null;
  readonly age?: number | null;
  readonly profile_pic?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly password?: string | null;
  readonly mobile?: number | null;
  readonly age?: number | null;
  readonly profile_pic?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}