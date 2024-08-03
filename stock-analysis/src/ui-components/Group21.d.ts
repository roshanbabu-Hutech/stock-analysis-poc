/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Group21OverridesProps = {
    Group21?: PrimitiveOverrideProps<ViewProps>;
    "Group 5"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17684"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17685"?: PrimitiveOverrideProps<ViewProps>;
    Company?: PrimitiveOverrideProps<TextProps>;
    "Enter company name"?: PrimitiveOverrideProps<TextProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17689"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17690"?: PrimitiveOverrideProps<ViewProps>;
    Symbol?: PrimitiveOverrideProps<TextProps>;
    "Enter symbol"?: PrimitiveOverrideProps<TextProps>;
    "Group 7"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17694"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17695"?: PrimitiveOverrideProps<ViewProps>;
    "Market Cap"?: PrimitiveOverrideProps<TextProps>;
    "Enter market cap"?: PrimitiveOverrideProps<TextProps>;
    "Group 8"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17699"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17700"?: PrimitiveOverrideProps<ViewProps>;
    Sector?: PrimitiveOverrideProps<TextProps>;
    "Enter sector"?: PrimitiveOverrideProps<TextProps>;
    "Group 9"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17704"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17705"?: PrimitiveOverrideProps<ViewProps>;
    Country?: PrimitiveOverrideProps<TextProps>;
    "Enter country"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Group21Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Group21OverridesProps | undefined | null;
}>;
export default function Group21(props: Group21Props): React.ReactElement;
