/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Stocks } from "../models";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type StocklistOverridesProps = {
    Stocklist?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 47543"?: PrimitiveOverrideProps<ViewProps>;
    "Add Stock"?: PrimitiveOverrideProps<TextProps>;
    "Stock List"?: PrimitiveOverrideProps<TextProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "Group 20"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 10"?: PrimitiveOverrideProps<ViewProps>;
    "Group 11"?: PrimitiveOverrideProps<ViewProps>;
    "Group 67433"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17434"?: PrimitiveOverrideProps<ViewProps>;
    Symbol?: PrimitiveOverrideProps<TextProps>;
    "Group 107436"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17437"?: PrimitiveOverrideProps<ViewProps>;
    AsianPaint?: PrimitiveOverrideProps<TextProps>;
    "Group 13"?: PrimitiveOverrideProps<ViewProps>;
    "Group 67440"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17441"?: PrimitiveOverrideProps<ViewProps>;
    "Market Cap"?: PrimitiveOverrideProps<TextProps>;
    "Group 107443"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17444"?: PrimitiveOverrideProps<ViewProps>;
    Nifty?: PrimitiveOverrideProps<TextProps>;
    "Group 14"?: PrimitiveOverrideProps<ViewProps>;
    "Group 67447"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17448"?: PrimitiveOverrideProps<ViewProps>;
    Sector?: PrimitiveOverrideProps<TextProps>;
    "Group 107450"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17451"?: PrimitiveOverrideProps<ViewProps>;
    Manufacture?: PrimitiveOverrideProps<TextProps>;
    "Group 15"?: PrimitiveOverrideProps<ViewProps>;
    "Group 67454"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17455"?: PrimitiveOverrideProps<ViewProps>;
    Country?: PrimitiveOverrideProps<TextProps>;
    "Group 107457"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17458"?: PrimitiveOverrideProps<ViewProps>;
    India?: PrimitiveOverrideProps<TextProps>;
    "Group 12"?: PrimitiveOverrideProps<ViewProps>;
    "Group 67461"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17462"?: PrimitiveOverrideProps<ViewProps>;
    Company?: PrimitiveOverrideProps<TextProps>;
    "Group 107464"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17465"?: PrimitiveOverrideProps<ViewProps>;
    "Asian Paint"?: PrimitiveOverrideProps<TextProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 47559"?: PrimitiveOverrideProps<ViewProps>;
    Update?: PrimitiveOverrideProps<TextProps>;
    "Group 5"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 47562"?: PrimitiveOverrideProps<ViewProps>;
    Delete?: PrimitiveOverrideProps<TextProps>;
    "Line 8"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type StocklistProps = React.PropsWithChildren<Partial<ViewProps> & {
    stocks?: Stocks;
} & {
    overrides?: StocklistOverridesProps | undefined | null;
}>;
export default function Stocklist(props: StocklistProps): React.ReactElement;
