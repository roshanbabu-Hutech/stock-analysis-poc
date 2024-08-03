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
export declare type BucketlistOverridesProps = {
    "1"?: PrimitiveOverrideProps<TextProps>;
    "2"?: PrimitiveOverrideProps<TextProps>;
    "3"?: PrimitiveOverrideProps<TextProps>;
    "4"?: PrimitiveOverrideProps<TextProps>;
    Bucketlist?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Bucket List"?: PrimitiveOverrideProps<TextProps>;
    "Sl No"?: PrimitiveOverrideProps<TextProps>;
    "Stock Name"?: PrimitiveOverrideProps<TextProps>;
    Action?: PrimitiveOverrideProps<TextProps>;
    ASIANPAINT?: PrimitiveOverrideProps<TextProps>;
    NTPC?: PrimitiveOverrideProps<TextProps>;
    JSWSTEEL?: PrimitiveOverrideProps<TextProps>;
    HINDLACO?: PrimitiveOverrideProps<TextProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    "Line 4"?: PrimitiveOverrideProps<IconProps>;
    "Line 5"?: PrimitiveOverrideProps<IconProps>;
    "Line 6"?: PrimitiveOverrideProps<IconProps>;
    Group474?: PrimitiveOverrideProps<ViewProps>;
    Vector475?: PrimitiveOverrideProps<IconProps>;
    Vector476?: PrimitiveOverrideProps<IconProps>;
    Vector478?: PrimitiveOverrideProps<IconProps>;
    Group6184?: PrimitiveOverrideProps<ViewProps>;
    Vector6185?: PrimitiveOverrideProps<IconProps>;
    Vector6186?: PrimitiveOverrideProps<IconProps>;
    Vector6187?: PrimitiveOverrideProps<IconProps>;
    Group6188?: PrimitiveOverrideProps<ViewProps>;
    Vector6189?: PrimitiveOverrideProps<IconProps>;
    Vector6190?: PrimitiveOverrideProps<IconProps>;
    Vector6191?: PrimitiveOverrideProps<IconProps>;
    Group6192?: PrimitiveOverrideProps<ViewProps>;
    Vector6193?: PrimitiveOverrideProps<IconProps>;
    Vector6194?: PrimitiveOverrideProps<IconProps>;
    Vector6195?: PrimitiveOverrideProps<IconProps>;
    "Group 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "Add Bucket"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BucketlistProps = React.PropsWithChildren<Partial<ViewProps> & {
    stockBucket?: any;
} & {
    overrides?: BucketlistOverridesProps | undefined | null;
}>;
export default function Bucketlist(props: BucketlistProps): React.ReactElement;
