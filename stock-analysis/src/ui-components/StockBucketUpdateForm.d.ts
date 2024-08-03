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
export declare type StockBucketUpdateFormInputValues = {
    name?: string;
    description?: string;
};
export declare type StockBucketUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockBucketUpdateFormOverridesProps = {
    StockBucketUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StockBucketUpdateFormProps = React.PropsWithChildren<{
    overrides?: StockBucketUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    stockBucket?: any;
    onSubmit?: (fields: StockBucketUpdateFormInputValues) => StockBucketUpdateFormInputValues;
    onSuccess?: (fields: StockBucketUpdateFormInputValues) => void;
    onError?: (fields: StockBucketUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StockBucketUpdateFormInputValues) => StockBucketUpdateFormInputValues;
    onValidate?: StockBucketUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StockBucketUpdateForm(props: StockBucketUpdateFormProps): React.ReactElement;
