/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Stocks } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import Stocklist from "./Stocklist";
import { Collection } from "@aws-amplify/ui-react";
export default function StocklistCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Stocks,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          StockBucket: await item.StockBucket,
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "StocklistCollection")}
      {...rest}
    >
      {(item, index) => (
        <Stocklist
          stocks={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Stocklist>
      )}
    </Collection>
  );
}
