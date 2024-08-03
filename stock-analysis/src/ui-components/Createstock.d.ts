/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type CreatestockOverridesProps = {
    Createstock?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 47334"?: PrimitiveOverrideProps<ViewProps>;
    Submit?: PrimitiveOverrideProps<TextProps>;
    "Group 10"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 47337"?: PrimitiveOverrideProps<ViewProps>;
    Cancel?: PrimitiveOverrideProps<TextProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Create Stock"?: PrimitiveOverrideProps<TextProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "Group 5"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17305"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17306"?: PrimitiveOverrideProps<ViewProps>;
    Company?: PrimitiveOverrideProps<TextProps>;
    "Enter company name"?: PrimitiveOverrideProps<TextProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17310"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17311"?: PrimitiveOverrideProps<ViewProps>;
    Symbol?: PrimitiveOverrideProps<TextProps>;
    "Enter symbol"?: PrimitiveOverrideProps<TextProps>;
    "Group 7"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17315"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17316"?: PrimitiveOverrideProps<ViewProps>;
    "Market Cap"?: PrimitiveOverrideProps<TextProps>;
    "Enter market cap"?: PrimitiveOverrideProps<TextProps>;
    "Group 8"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17320"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17321"?: PrimitiveOverrideProps<ViewProps>;
    Sector?: PrimitiveOverrideProps<TextProps>;
    "Enter sector"?: PrimitiveOverrideProps<TextProps>;
    "Group 9"?: PrimitiveOverrideProps<ViewProps>;
    "Group 17325"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17326"?: PrimitiveOverrideProps<ViewProps>;
    Country?: PrimitiveOverrideProps<TextProps>;
    "Enter country"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CreatestockProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CreatestockOverridesProps | undefined | null;
}>;
export default function Createstock(props: CreatestockProps): React.ReactElement;
