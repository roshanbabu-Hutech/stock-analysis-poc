/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StockBucketCreateFormInputValues = {
    name?: string;
    description?: string;
};
export declare type StockBucketCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockBucketCreateFormOverridesProps = {
    StockBucketCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StockBucketCreateFormProps = React.PropsWithChildren<{
    overrides?: StockBucketCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StockBucketCreateFormInputValues) => StockBucketCreateFormInputValues;
    onSuccess?: (fields: StockBucketCreateFormInputValues) => void;
    onError?: (fields: StockBucketCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StockBucketCreateFormInputValues) => StockBucketCreateFormInputValues;
    onValidate?: StockBucketCreateFormValidationValues;
} & React.CSSProperties>;
export default function StockBucketCreateForm(props: StockBucketCreateFormProps): React.ReactElement;
