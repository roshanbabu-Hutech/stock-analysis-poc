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
export declare type StockUniverseUpdateFormInputValues = {
    name?: string;
    bse_code?: string;
    nse_code?: string;
    industry?: string;
    current_price?: string;
    price_to_earning?: string;
    industry_pe?: string;
    eps?: string;
    promoter_holding?: string;
    debt_to_equity?: string;
    net_profit_latest_quarter?: string;
    yoy_quarterly_profit_growth?: string;
    sales_latest_quarter?: string;
    yoy_quarterly_sales_growth?: string;
    roce3yr_avg?: string;
    return_on_capital_employed?: string;
    opm?: string;
    profit_after_tax?: string;
    sales?: string;
    sales_growth_3years?: string;
    sales_growth_5years?: string;
    profit_growth?: string;
    profit_growth_3years?: string;
    profit_growth_5years?: string;
    profit_growth_7years?: string;
    profit_growth_10years?: string;
    average_return_on_equity_5years?: string;
    average_return_on_equity_3years?: string;
    return_on_equity?: string;
    return_over_1year?: string;
    return_over_3years?: string;
    return_over_5years?: string;
    return_on_assets?: string;
    sales_growth?: string;
    sales_preceding_year?: string;
    sales_growth_7years?: string;
    operating_profit_preceding_year?: string;
    net_profit_last_year?: string;
    sales_growth_10years?: string;
    average_earnings_5year?: string;
    free_cash_flow_last_year?: string;
    free_cash_flow_preceding_year?: string;
    net_cash_flow_preceding_year?: string;
    free_acash_flow_3years?: string;
    average_return_on_capital_employed_3years?: string;
    average_return_on_capital_employed_5years?: string;
    dividend_yield?: string;
    operating_cash_flow_3years?: string;
    operating_cash_flow_5years?: string;
    operating_cash_flow_7years?: string;
    price_to_book_value?: string;
    return_over_6months?: string;
};
export declare type StockUniverseUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    bse_code?: ValidationFunction<string>;
    nse_code?: ValidationFunction<string>;
    industry?: ValidationFunction<string>;
    current_price?: ValidationFunction<string>;
    price_to_earning?: ValidationFunction<string>;
    industry_pe?: ValidationFunction<string>;
    eps?: ValidationFunction<string>;
    promoter_holding?: ValidationFunction<string>;
    debt_to_equity?: ValidationFunction<string>;
    net_profit_latest_quarter?: ValidationFunction<string>;
    yoy_quarterly_profit_growth?: ValidationFunction<string>;
    sales_latest_quarter?: ValidationFunction<string>;
    yoy_quarterly_sales_growth?: ValidationFunction<string>;
    roce3yr_avg?: ValidationFunction<string>;
    return_on_capital_employed?: ValidationFunction<string>;
    opm?: ValidationFunction<string>;
    profit_after_tax?: ValidationFunction<string>;
    sales?: ValidationFunction<string>;
    sales_growth_3years?: ValidationFunction<string>;
    sales_growth_5years?: ValidationFunction<string>;
    profit_growth?: ValidationFunction<string>;
    profit_growth_3years?: ValidationFunction<string>;
    profit_growth_5years?: ValidationFunction<string>;
    profit_growth_7years?: ValidationFunction<string>;
    profit_growth_10years?: ValidationFunction<string>;
    average_return_on_equity_5years?: ValidationFunction<string>;
    average_return_on_equity_3years?: ValidationFunction<string>;
    return_on_equity?: ValidationFunction<string>;
    return_over_1year?: ValidationFunction<string>;
    return_over_3years?: ValidationFunction<string>;
    return_over_5years?: ValidationFunction<string>;
    return_on_assets?: ValidationFunction<string>;
    sales_growth?: ValidationFunction<string>;
    sales_preceding_year?: ValidationFunction<string>;
    sales_growth_7years?: ValidationFunction<string>;
    operating_profit_preceding_year?: ValidationFunction<string>;
    net_profit_last_year?: ValidationFunction<string>;
    sales_growth_10years?: ValidationFunction<string>;
    average_earnings_5year?: ValidationFunction<string>;
    free_cash_flow_last_year?: ValidationFunction<string>;
    free_cash_flow_preceding_year?: ValidationFunction<string>;
    net_cash_flow_preceding_year?: ValidationFunction<string>;
    free_acash_flow_3years?: ValidationFunction<string>;
    average_return_on_capital_employed_3years?: ValidationFunction<string>;
    average_return_on_capital_employed_5years?: ValidationFunction<string>;
    dividend_yield?: ValidationFunction<string>;
    operating_cash_flow_3years?: ValidationFunction<string>;
    operating_cash_flow_5years?: ValidationFunction<string>;
    operating_cash_flow_7years?: ValidationFunction<string>;
    price_to_book_value?: ValidationFunction<string>;
    return_over_6months?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockUniverseUpdateFormOverridesProps = {
    StockUniverseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    bse_code?: PrimitiveOverrideProps<TextFieldProps>;
    nse_code?: PrimitiveOverrideProps<TextFieldProps>;
    industry?: PrimitiveOverrideProps<TextFieldProps>;
    current_price?: PrimitiveOverrideProps<TextFieldProps>;
    price_to_earning?: PrimitiveOverrideProps<TextFieldProps>;
    industry_pe?: PrimitiveOverrideProps<TextFieldProps>;
    eps?: PrimitiveOverrideProps<TextFieldProps>;
    promoter_holding?: PrimitiveOverrideProps<TextFieldProps>;
    debt_to_equity?: PrimitiveOverrideProps<TextFieldProps>;
    net_profit_latest_quarter?: PrimitiveOverrideProps<TextFieldProps>;
    yoy_quarterly_profit_growth?: PrimitiveOverrideProps<TextFieldProps>;
    sales_latest_quarter?: PrimitiveOverrideProps<TextFieldProps>;
    yoy_quarterly_sales_growth?: PrimitiveOverrideProps<TextFieldProps>;
    roce3yr_avg?: PrimitiveOverrideProps<TextFieldProps>;
    return_on_capital_employed?: PrimitiveOverrideProps<TextFieldProps>;
    opm?: PrimitiveOverrideProps<TextFieldProps>;
    profit_after_tax?: PrimitiveOverrideProps<TextFieldProps>;
    sales?: PrimitiveOverrideProps<TextFieldProps>;
    sales_growth_3years?: PrimitiveOverrideProps<TextFieldProps>;
    sales_growth_5years?: PrimitiveOverrideProps<TextFieldProps>;
    profit_growth?: PrimitiveOverrideProps<TextFieldProps>;
    profit_growth_3years?: PrimitiveOverrideProps<TextFieldProps>;
    profit_growth_5years?: PrimitiveOverrideProps<TextFieldProps>;
    profit_growth_7years?: PrimitiveOverrideProps<TextFieldProps>;
    profit_growth_10years?: PrimitiveOverrideProps<TextFieldProps>;
    average_return_on_equity_5years?: PrimitiveOverrideProps<TextFieldProps>;
    average_return_on_equity_3years?: PrimitiveOverrideProps<TextFieldProps>;
    return_on_equity?: PrimitiveOverrideProps<TextFieldProps>;
    return_over_1year?: PrimitiveOverrideProps<TextFieldProps>;
    return_over_3years?: PrimitiveOverrideProps<TextFieldProps>;
    return_over_5years?: PrimitiveOverrideProps<TextFieldProps>;
    return_on_assets?: PrimitiveOverrideProps<TextFieldProps>;
    sales_growth?: PrimitiveOverrideProps<TextFieldProps>;
    sales_preceding_year?: PrimitiveOverrideProps<TextFieldProps>;
    sales_growth_7years?: PrimitiveOverrideProps<TextFieldProps>;
    operating_profit_preceding_year?: PrimitiveOverrideProps<TextFieldProps>;
    net_profit_last_year?: PrimitiveOverrideProps<TextFieldProps>;
    sales_growth_10years?: PrimitiveOverrideProps<TextFieldProps>;
    average_earnings_5year?: PrimitiveOverrideProps<TextFieldProps>;
    free_cash_flow_last_year?: PrimitiveOverrideProps<TextFieldProps>;
    free_cash_flow_preceding_year?: PrimitiveOverrideProps<TextFieldProps>;
    net_cash_flow_preceding_year?: PrimitiveOverrideProps<TextFieldProps>;
    free_acash_flow_3years?: PrimitiveOverrideProps<TextFieldProps>;
    average_return_on_capital_employed_3years?: PrimitiveOverrideProps<TextFieldProps>;
    average_return_on_capital_employed_5years?: PrimitiveOverrideProps<TextFieldProps>;
    dividend_yield?: PrimitiveOverrideProps<TextFieldProps>;
    operating_cash_flow_3years?: PrimitiveOverrideProps<TextFieldProps>;
    operating_cash_flow_5years?: PrimitiveOverrideProps<TextFieldProps>;
    operating_cash_flow_7years?: PrimitiveOverrideProps<TextFieldProps>;
    price_to_book_value?: PrimitiveOverrideProps<TextFieldProps>;
    return_over_6months?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StockUniverseUpdateFormProps = React.PropsWithChildren<{
    overrides?: StockUniverseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    stockUniverse?: any;
    onSubmit?: (fields: StockUniverseUpdateFormInputValues) => StockUniverseUpdateFormInputValues;
    onSuccess?: (fields: StockUniverseUpdateFormInputValues) => void;
    onError?: (fields: StockUniverseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StockUniverseUpdateFormInputValues) => StockUniverseUpdateFormInputValues;
    onValidate?: StockUniverseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StockUniverseUpdateForm(props: StockUniverseUpdateFormProps): React.ReactElement;
