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
export declare type Group22OverridesProps = {
    Group22?: PrimitiveOverrideProps<ViewProps>;
    "Group 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 47675"?: PrimitiveOverrideProps<ViewProps>;
    Submit?: PrimitiveOverrideProps<TextProps>;
    "Group 10"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 47678"?: PrimitiveOverrideProps<ViewProps>;
    Cancel?: PrimitiveOverrideProps<TextProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Group22Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Group22OverridesProps | undefined | null;
}>;
export default function Group22(props: Group22Props): React.ReactElement;
