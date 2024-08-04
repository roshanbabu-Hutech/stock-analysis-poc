/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { StocklistProps } from "./Stocklist";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StocklistsssgCollectionOverridesProps = {
    StocklistsssgCollection?: PrimitiveOverrideProps<CollectionProps>;
    Stocklist?: StocklistProps;
} & EscapeHatchProps;
export declare type StocklistsssgCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => StocklistProps;
} & {
    overrides?: StocklistsssgCollectionOverridesProps | undefined | null;
}>;
export default function StocklistsssgCollection(props: StocklistsssgCollectionProps): React.ReactElement;
