/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Group20Props } from "./Group20";
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
export declare type StocksListCollectionOverridesProps = {
    StocksListCollection?: PrimitiveOverrideProps<CollectionProps>;
    Group20?: Group20Props;
} & EscapeHatchProps;
export declare type StocksListCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => Group20Props;
} & {
    overrides?: StocksListCollectionOverridesProps | undefined | null;
}>;
export default function StocksListCollection(props: StocksListCollectionProps): React.ReactElement;
