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
export declare type StocksCreateFormInputValues = {
    company?: string;
    symbol?: string;
    market_cap?: string;
    sector?: string;
    country?: string;
    stock_bucket_id?: string;
};
export declare type StocksCreateFormValidationValues = {
    company?: ValidationFunction<string>;
    symbol?: ValidationFunction<string>;
    market_cap?: ValidationFunction<string>;
    sector?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    stock_bucket_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StocksCreateFormOverridesProps = {
    StocksCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    company?: PrimitiveOverrideProps<TextFieldProps>;
    symbol?: PrimitiveOverrideProps<TextFieldProps>;
    market_cap?: PrimitiveOverrideProps<TextFieldProps>;
    sector?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    stock_bucket_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StocksCreateFormProps = React.PropsWithChildren<{
    overrides?: StocksCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StocksCreateFormInputValues) => StocksCreateFormInputValues;
    onSuccess?: (fields: StocksCreateFormInputValues) => void;
    onError?: (fields: StocksCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StocksCreateFormInputValues) => StocksCreateFormInputValues;
    onValidate?: StocksCreateFormValidationValues;
} & React.CSSProperties>;
export default function StocksCreateForm(props: StocksCreateFormProps): React.ReactElement;
