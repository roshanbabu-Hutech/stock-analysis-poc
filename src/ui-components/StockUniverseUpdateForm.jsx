/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getStockUniverse } from "../graphql/queries";
import { updateStockUniverse } from "../graphql/mutations";
const client = generateClient();
export default function StockUniverseUpdateForm(props) {
  const {
    id: idProp,
    stockUniverse: stockUniverseModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    bse_code: "",
    nse_code: "",
    industry: "",
    current_price: "",
    price_to_earning: "",
    industry_pe: "",
    eps: "",
    promoter_holding: "",
    debt_to_equity: "",
    net_profit_latest_quarter: "",
    yoy_quarterly_profit_growth: "",
    sales_latest_quarter: "",
    yoy_quarterly_sales_growth: "",
    roce3yr_avg: "",
    return_on_capital_employed: "",
    opm: "",
    profit_after_tax: "",
    sales: "",
    sales_growth_3years: "",
    sales_growth_5years: "",
    profit_growth: "",
    profit_growth_3years: "",
    profit_growth_5years: "",
    profit_growth_7years: "",
    profit_growth_10years: "",
    average_return_on_equity_5years: "",
    average_return_on_equity_3years: "",
    return_on_equity: "",
    return_over_1year: "",
    return_over_3years: "",
    return_over_5years: "",
    return_on_assets: "",
    sales_growth: "",
    sales_preceding_year: "",
    sales_growth_7years: "",
    operating_profit_preceding_year: "",
    net_profit_last_year: "",
    sales_growth_10years: "",
    average_earnings_5year: "",
    free_cash_flow_last_year: "",
    free_cash_flow_preceding_year: "",
    net_cash_flow_preceding_year: "",
    free_acash_flow_3years: "",
    average_return_on_capital_employed_3years: "",
    average_return_on_capital_employed_5years: "",
    dividend_yield: "",
    operating_cash_flow_3years: "",
    operating_cash_flow_5years: "",
    operating_cash_flow_7years: "",
    price_to_book_value: "",
    return_over_6months: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [bse_code, setBse_code] = React.useState(initialValues.bse_code);
  const [nse_code, setNse_code] = React.useState(initialValues.nse_code);
  const [industry, setIndustry] = React.useState(initialValues.industry);
  const [current_price, setCurrent_price] = React.useState(
    initialValues.current_price
  );
  const [price_to_earning, setPrice_to_earning] = React.useState(
    initialValues.price_to_earning
  );
  const [industry_pe, setIndustry_pe] = React.useState(
    initialValues.industry_pe
  );
  const [eps, setEps] = React.useState(initialValues.eps);
  const [promoter_holding, setPromoter_holding] = React.useState(
    initialValues.promoter_holding
  );
  const [debt_to_equity, setDebt_to_equity] = React.useState(
    initialValues.debt_to_equity
  );
  const [net_profit_latest_quarter, setNet_profit_latest_quarter] =
    React.useState(initialValues.net_profit_latest_quarter);
  const [yoy_quarterly_profit_growth, setYoy_quarterly_profit_growth] =
    React.useState(initialValues.yoy_quarterly_profit_growth);
  const [sales_latest_quarter, setSales_latest_quarter] = React.useState(
    initialValues.sales_latest_quarter
  );
  const [yoy_quarterly_sales_growth, setYoy_quarterly_sales_growth] =
    React.useState(initialValues.yoy_quarterly_sales_growth);
  const [roce3yr_avg, setRoce3yr_avg] = React.useState(
    initialValues.roce3yr_avg
  );
  const [return_on_capital_employed, setReturn_on_capital_employed] =
    React.useState(initialValues.return_on_capital_employed);
  const [opm, setOpm] = React.useState(initialValues.opm);
  const [profit_after_tax, setProfit_after_tax] = React.useState(
    initialValues.profit_after_tax
  );
  const [sales, setSales] = React.useState(initialValues.sales);
  const [sales_growth_3years, setSales_growth_3years] = React.useState(
    initialValues.sales_growth_3years
  );
  const [sales_growth_5years, setSales_growth_5years] = React.useState(
    initialValues.sales_growth_5years
  );
  const [profit_growth, setProfit_growth] = React.useState(
    initialValues.profit_growth
  );
  const [profit_growth_3years, setProfit_growth_3years] = React.useState(
    initialValues.profit_growth_3years
  );
  const [profit_growth_5years, setProfit_growth_5years] = React.useState(
    initialValues.profit_growth_5years
  );
  const [profit_growth_7years, setProfit_growth_7years] = React.useState(
    initialValues.profit_growth_7years
  );
  const [profit_growth_10years, setProfit_growth_10years] = React.useState(
    initialValues.profit_growth_10years
  );
  const [average_return_on_equity_5years, setAverage_return_on_equity_5years] =
    React.useState(initialValues.average_return_on_equity_5years);
  const [average_return_on_equity_3years, setAverage_return_on_equity_3years] =
    React.useState(initialValues.average_return_on_equity_3years);
  const [return_on_equity, setReturn_on_equity] = React.useState(
    initialValues.return_on_equity
  );
  const [return_over_1year, setReturn_over_1year] = React.useState(
    initialValues.return_over_1year
  );
  const [return_over_3years, setReturn_over_3years] = React.useState(
    initialValues.return_over_3years
  );
  const [return_over_5years, setReturn_over_5years] = React.useState(
    initialValues.return_over_5years
  );
  const [return_on_assets, setReturn_on_assets] = React.useState(
    initialValues.return_on_assets
  );
  const [sales_growth, setSales_growth] = React.useState(
    initialValues.sales_growth
  );
  const [sales_preceding_year, setSales_preceding_year] = React.useState(
    initialValues.sales_preceding_year
  );
  const [sales_growth_7years, setSales_growth_7years] = React.useState(
    initialValues.sales_growth_7years
  );
  const [operating_profit_preceding_year, setOperating_profit_preceding_year] =
    React.useState(initialValues.operating_profit_preceding_year);
  const [net_profit_last_year, setNet_profit_last_year] = React.useState(
    initialValues.net_profit_last_year
  );
  const [sales_growth_10years, setSales_growth_10years] = React.useState(
    initialValues.sales_growth_10years
  );
  const [average_earnings_5year, setAverage_earnings_5year] = React.useState(
    initialValues.average_earnings_5year
  );
  const [free_cash_flow_last_year, setFree_cash_flow_last_year] =
    React.useState(initialValues.free_cash_flow_last_year);
  const [free_cash_flow_preceding_year, setFree_cash_flow_preceding_year] =
    React.useState(initialValues.free_cash_flow_preceding_year);
  const [net_cash_flow_preceding_year, setNet_cash_flow_preceding_year] =
    React.useState(initialValues.net_cash_flow_preceding_year);
  const [free_acash_flow_3years, setFree_acash_flow_3years] = React.useState(
    initialValues.free_acash_flow_3years
  );
  const [
    average_return_on_capital_employed_3years,
    setAverage_return_on_capital_employed_3years,
  ] = React.useState(initialValues.average_return_on_capital_employed_3years);
  const [
    average_return_on_capital_employed_5years,
    setAverage_return_on_capital_employed_5years,
  ] = React.useState(initialValues.average_return_on_capital_employed_5years);
  const [dividend_yield, setDividend_yield] = React.useState(
    initialValues.dividend_yield
  );
  const [operating_cash_flow_3years, setOperating_cash_flow_3years] =
    React.useState(initialValues.operating_cash_flow_3years);
  const [operating_cash_flow_5years, setOperating_cash_flow_5years] =
    React.useState(initialValues.operating_cash_flow_5years);
  const [operating_cash_flow_7years, setOperating_cash_flow_7years] =
    React.useState(initialValues.operating_cash_flow_7years);
  const [price_to_book_value, setPrice_to_book_value] = React.useState(
    initialValues.price_to_book_value
  );
  const [return_over_6months, setReturn_over_6months] = React.useState(
    initialValues.return_over_6months
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = stockUniverseRecord
      ? { ...initialValues, ...stockUniverseRecord }
      : initialValues;
    setName(cleanValues.name);
    setBse_code(cleanValues.bse_code);
    setNse_code(cleanValues.nse_code);
    setIndustry(cleanValues.industry);
    setCurrent_price(cleanValues.current_price);
    setPrice_to_earning(cleanValues.price_to_earning);
    setIndustry_pe(cleanValues.industry_pe);
    setEps(cleanValues.eps);
    setPromoter_holding(cleanValues.promoter_holding);
    setDebt_to_equity(cleanValues.debt_to_equity);
    setNet_profit_latest_quarter(cleanValues.net_profit_latest_quarter);
    setYoy_quarterly_profit_growth(cleanValues.yoy_quarterly_profit_growth);
    setSales_latest_quarter(cleanValues.sales_latest_quarter);
    setYoy_quarterly_sales_growth(cleanValues.yoy_quarterly_sales_growth);
    setRoce3yr_avg(cleanValues.roce3yr_avg);
    setReturn_on_capital_employed(cleanValues.return_on_capital_employed);
    setOpm(cleanValues.opm);
    setProfit_after_tax(cleanValues.profit_after_tax);
    setSales(cleanValues.sales);
    setSales_growth_3years(cleanValues.sales_growth_3years);
    setSales_growth_5years(cleanValues.sales_growth_5years);
    setProfit_growth(cleanValues.profit_growth);
    setProfit_growth_3years(cleanValues.profit_growth_3years);
    setProfit_growth_5years(cleanValues.profit_growth_5years);
    setProfit_growth_7years(cleanValues.profit_growth_7years);
    setProfit_growth_10years(cleanValues.profit_growth_10years);
    setAverage_return_on_equity_5years(
      cleanValues.average_return_on_equity_5years
    );
    setAverage_return_on_equity_3years(
      cleanValues.average_return_on_equity_3years
    );
    setReturn_on_equity(cleanValues.return_on_equity);
    setReturn_over_1year(cleanValues.return_over_1year);
    setReturn_over_3years(cleanValues.return_over_3years);
    setReturn_over_5years(cleanValues.return_over_5years);
    setReturn_on_assets(cleanValues.return_on_assets);
    setSales_growth(cleanValues.sales_growth);
    setSales_preceding_year(cleanValues.sales_preceding_year);
    setSales_growth_7years(cleanValues.sales_growth_7years);
    setOperating_profit_preceding_year(
      cleanValues.operating_profit_preceding_year
    );
    setNet_profit_last_year(cleanValues.net_profit_last_year);
    setSales_growth_10years(cleanValues.sales_growth_10years);
    setAverage_earnings_5year(cleanValues.average_earnings_5year);
    setFree_cash_flow_last_year(cleanValues.free_cash_flow_last_year);
    setFree_cash_flow_preceding_year(cleanValues.free_cash_flow_preceding_year);
    setNet_cash_flow_preceding_year(cleanValues.net_cash_flow_preceding_year);
    setFree_acash_flow_3years(cleanValues.free_acash_flow_3years);
    setAverage_return_on_capital_employed_3years(
      cleanValues.average_return_on_capital_employed_3years
    );
    setAverage_return_on_capital_employed_5years(
      cleanValues.average_return_on_capital_employed_5years
    );
    setDividend_yield(cleanValues.dividend_yield);
    setOperating_cash_flow_3years(cleanValues.operating_cash_flow_3years);
    setOperating_cash_flow_5years(cleanValues.operating_cash_flow_5years);
    setOperating_cash_flow_7years(cleanValues.operating_cash_flow_7years);
    setPrice_to_book_value(cleanValues.price_to_book_value);
    setReturn_over_6months(cleanValues.return_over_6months);
    setErrors({});
  };
  const [stockUniverseRecord, setStockUniverseRecord] = React.useState(
    stockUniverseModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getStockUniverse.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getStockUniverse
        : stockUniverseModelProp;
      setStockUniverseRecord(record);
    };
    queryData();
  }, [idProp, stockUniverseModelProp]);
  React.useEffect(resetStateValues, [stockUniverseRecord]);
  const validations = {
    name: [{ type: "Required" }],
    bse_code: [],
    nse_code: [],
    industry: [],
    current_price: [],
    price_to_earning: [],
    industry_pe: [],
    eps: [],
    promoter_holding: [],
    debt_to_equity: [],
    net_profit_latest_quarter: [],
    yoy_quarterly_profit_growth: [],
    sales_latest_quarter: [],
    yoy_quarterly_sales_growth: [],
    roce3yr_avg: [],
    return_on_capital_employed: [],
    opm: [],
    profit_after_tax: [],
    sales: [],
    sales_growth_3years: [],
    sales_growth_5years: [],
    profit_growth: [],
    profit_growth_3years: [],
    profit_growth_5years: [],
    profit_growth_7years: [],
    profit_growth_10years: [],
    average_return_on_equity_5years: [],
    average_return_on_equity_3years: [],
    return_on_equity: [],
    return_over_1year: [],
    return_over_3years: [],
    return_over_5years: [],
    return_on_assets: [],
    sales_growth: [],
    sales_preceding_year: [],
    sales_growth_7years: [],
    operating_profit_preceding_year: [],
    net_profit_last_year: [],
    sales_growth_10years: [],
    average_earnings_5year: [],
    free_cash_flow_last_year: [],
    free_cash_flow_preceding_year: [],
    net_cash_flow_preceding_year: [],
    free_acash_flow_3years: [],
    average_return_on_capital_employed_3years: [],
    average_return_on_capital_employed_5years: [],
    dividend_yield: [],
    operating_cash_flow_3years: [],
    operating_cash_flow_5years: [],
    operating_cash_flow_7years: [],
    price_to_book_value: [],
    return_over_6months: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          bse_code: bse_code ?? null,
          nse_code: nse_code ?? null,
          industry: industry ?? null,
          current_price: current_price ?? null,
          price_to_earning: price_to_earning ?? null,
          industry_pe: industry_pe ?? null,
          eps: eps ?? null,
          promoter_holding: promoter_holding ?? null,
          debt_to_equity: debt_to_equity ?? null,
          net_profit_latest_quarter: net_profit_latest_quarter ?? null,
          yoy_quarterly_profit_growth: yoy_quarterly_profit_growth ?? null,
          sales_latest_quarter: sales_latest_quarter ?? null,
          yoy_quarterly_sales_growth: yoy_quarterly_sales_growth ?? null,
          roce3yr_avg: roce3yr_avg ?? null,
          return_on_capital_employed: return_on_capital_employed ?? null,
          opm: opm ?? null,
          profit_after_tax: profit_after_tax ?? null,
          sales: sales ?? null,
          sales_growth_3years: sales_growth_3years ?? null,
          sales_growth_5years: sales_growth_5years ?? null,
          profit_growth: profit_growth ?? null,
          profit_growth_3years: profit_growth_3years ?? null,
          profit_growth_5years: profit_growth_5years ?? null,
          profit_growth_7years: profit_growth_7years ?? null,
          profit_growth_10years: profit_growth_10years ?? null,
          average_return_on_equity_5years:
            average_return_on_equity_5years ?? null,
          average_return_on_equity_3years:
            average_return_on_equity_3years ?? null,
          return_on_equity: return_on_equity ?? null,
          return_over_1year: return_over_1year ?? null,
          return_over_3years: return_over_3years ?? null,
          return_over_5years: return_over_5years ?? null,
          return_on_assets: return_on_assets ?? null,
          sales_growth: sales_growth ?? null,
          sales_preceding_year: sales_preceding_year ?? null,
          sales_growth_7years: sales_growth_7years ?? null,
          operating_profit_preceding_year:
            operating_profit_preceding_year ?? null,
          net_profit_last_year: net_profit_last_year ?? null,
          sales_growth_10years: sales_growth_10years ?? null,
          average_earnings_5year: average_earnings_5year ?? null,
          free_cash_flow_last_year: free_cash_flow_last_year ?? null,
          free_cash_flow_preceding_year: free_cash_flow_preceding_year ?? null,
          net_cash_flow_preceding_year: net_cash_flow_preceding_year ?? null,
          free_acash_flow_3years: free_acash_flow_3years ?? null,
          average_return_on_capital_employed_3years:
            average_return_on_capital_employed_3years ?? null,
          average_return_on_capital_employed_5years:
            average_return_on_capital_employed_5years ?? null,
          dividend_yield: dividend_yield ?? null,
          operating_cash_flow_3years: operating_cash_flow_3years ?? null,
          operating_cash_flow_5years: operating_cash_flow_5years ?? null,
          operating_cash_flow_7years: operating_cash_flow_7years ?? null,
          price_to_book_value: price_to_book_value ?? null,
          return_over_6months: return_over_6months ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateStockUniverse.replaceAll("__typename", ""),
            variables: {
              input: {
                id: stockUniverseRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "StockUniverseUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Bse code"
        isRequired={false}
        isReadOnly={false}
        value={bse_code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code: value,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.bse_code ?? value;
          }
          if (errors.bse_code?.hasError) {
            runValidationTasks("bse_code", value);
          }
          setBse_code(value);
        }}
        onBlur={() => runValidationTasks("bse_code", bse_code)}
        errorMessage={errors.bse_code?.errorMessage}
        hasError={errors.bse_code?.hasError}
        {...getOverrideProps(overrides, "bse_code")}
      ></TextField>
      <TextField
        label="Nse code"
        isRequired={false}
        isReadOnly={false}
        value={nse_code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code: value,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.nse_code ?? value;
          }
          if (errors.nse_code?.hasError) {
            runValidationTasks("nse_code", value);
          }
          setNse_code(value);
        }}
        onBlur={() => runValidationTasks("nse_code", nse_code)}
        errorMessage={errors.nse_code?.errorMessage}
        hasError={errors.nse_code?.hasError}
        {...getOverrideProps(overrides, "nse_code")}
      ></TextField>
      <TextField
        label="Industry"
        isRequired={false}
        isReadOnly={false}
        value={industry}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry: value,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.industry ?? value;
          }
          if (errors.industry?.hasError) {
            runValidationTasks("industry", value);
          }
          setIndustry(value);
        }}
        onBlur={() => runValidationTasks("industry", industry)}
        errorMessage={errors.industry?.errorMessage}
        hasError={errors.industry?.hasError}
        {...getOverrideProps(overrides, "industry")}
      ></TextField>
      <TextField
        label="Current price"
        isRequired={false}
        isReadOnly={false}
        value={current_price}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price: value,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.current_price ?? value;
          }
          if (errors.current_price?.hasError) {
            runValidationTasks("current_price", value);
          }
          setCurrent_price(value);
        }}
        onBlur={() => runValidationTasks("current_price", current_price)}
        errorMessage={errors.current_price?.errorMessage}
        hasError={errors.current_price?.hasError}
        {...getOverrideProps(overrides, "current_price")}
      ></TextField>
      <TextField
        label="Price to earning"
        isRequired={false}
        isReadOnly={false}
        value={price_to_earning}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning: value,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.price_to_earning ?? value;
          }
          if (errors.price_to_earning?.hasError) {
            runValidationTasks("price_to_earning", value);
          }
          setPrice_to_earning(value);
        }}
        onBlur={() => runValidationTasks("price_to_earning", price_to_earning)}
        errorMessage={errors.price_to_earning?.errorMessage}
        hasError={errors.price_to_earning?.hasError}
        {...getOverrideProps(overrides, "price_to_earning")}
      ></TextField>
      <TextField
        label="Industry pe"
        isRequired={false}
        isReadOnly={false}
        value={industry_pe}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe: value,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.industry_pe ?? value;
          }
          if (errors.industry_pe?.hasError) {
            runValidationTasks("industry_pe", value);
          }
          setIndustry_pe(value);
        }}
        onBlur={() => runValidationTasks("industry_pe", industry_pe)}
        errorMessage={errors.industry_pe?.errorMessage}
        hasError={errors.industry_pe?.hasError}
        {...getOverrideProps(overrides, "industry_pe")}
      ></TextField>
      <TextField
        label="Eps"
        isRequired={false}
        isReadOnly={false}
        value={eps}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps: value,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.eps ?? value;
          }
          if (errors.eps?.hasError) {
            runValidationTasks("eps", value);
          }
          setEps(value);
        }}
        onBlur={() => runValidationTasks("eps", eps)}
        errorMessage={errors.eps?.errorMessage}
        hasError={errors.eps?.hasError}
        {...getOverrideProps(overrides, "eps")}
      ></TextField>
      <TextField
        label="Promoter holding"
        isRequired={false}
        isReadOnly={false}
        value={promoter_holding}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding: value,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.promoter_holding ?? value;
          }
          if (errors.promoter_holding?.hasError) {
            runValidationTasks("promoter_holding", value);
          }
          setPromoter_holding(value);
        }}
        onBlur={() => runValidationTasks("promoter_holding", promoter_holding)}
        errorMessage={errors.promoter_holding?.errorMessage}
        hasError={errors.promoter_holding?.hasError}
        {...getOverrideProps(overrides, "promoter_holding")}
      ></TextField>
      <TextField
        label="Debt to equity"
        isRequired={false}
        isReadOnly={false}
        value={debt_to_equity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity: value,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.debt_to_equity ?? value;
          }
          if (errors.debt_to_equity?.hasError) {
            runValidationTasks("debt_to_equity", value);
          }
          setDebt_to_equity(value);
        }}
        onBlur={() => runValidationTasks("debt_to_equity", debt_to_equity)}
        errorMessage={errors.debt_to_equity?.errorMessage}
        hasError={errors.debt_to_equity?.hasError}
        {...getOverrideProps(overrides, "debt_to_equity")}
      ></TextField>
      <TextField
        label="Net profit latest quarter"
        isRequired={false}
        isReadOnly={false}
        value={net_profit_latest_quarter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter: value,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.net_profit_latest_quarter ?? value;
          }
          if (errors.net_profit_latest_quarter?.hasError) {
            runValidationTasks("net_profit_latest_quarter", value);
          }
          setNet_profit_latest_quarter(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "net_profit_latest_quarter",
            net_profit_latest_quarter
          )
        }
        errorMessage={errors.net_profit_latest_quarter?.errorMessage}
        hasError={errors.net_profit_latest_quarter?.hasError}
        {...getOverrideProps(overrides, "net_profit_latest_quarter")}
      ></TextField>
      <TextField
        label="Yoy quarterly profit growth"
        isRequired={false}
        isReadOnly={false}
        value={yoy_quarterly_profit_growth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth: value,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.yoy_quarterly_profit_growth ?? value;
          }
          if (errors.yoy_quarterly_profit_growth?.hasError) {
            runValidationTasks("yoy_quarterly_profit_growth", value);
          }
          setYoy_quarterly_profit_growth(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "yoy_quarterly_profit_growth",
            yoy_quarterly_profit_growth
          )
        }
        errorMessage={errors.yoy_quarterly_profit_growth?.errorMessage}
        hasError={errors.yoy_quarterly_profit_growth?.hasError}
        {...getOverrideProps(overrides, "yoy_quarterly_profit_growth")}
      ></TextField>
      <TextField
        label="Sales latest quarter"
        isRequired={false}
        isReadOnly={false}
        value={sales_latest_quarter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter: value,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.sales_latest_quarter ?? value;
          }
          if (errors.sales_latest_quarter?.hasError) {
            runValidationTasks("sales_latest_quarter", value);
          }
          setSales_latest_quarter(value);
        }}
        onBlur={() =>
          runValidationTasks("sales_latest_quarter", sales_latest_quarter)
        }
        errorMessage={errors.sales_latest_quarter?.errorMessage}
        hasError={errors.sales_latest_quarter?.hasError}
        {...getOverrideProps(overrides, "sales_latest_quarter")}
      ></TextField>
      <TextField
        label="Yoy quarterly sales growth"
        isRequired={false}
        isReadOnly={false}
        value={yoy_quarterly_sales_growth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth: value,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.yoy_quarterly_sales_growth ?? value;
          }
          if (errors.yoy_quarterly_sales_growth?.hasError) {
            runValidationTasks("yoy_quarterly_sales_growth", value);
          }
          setYoy_quarterly_sales_growth(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "yoy_quarterly_sales_growth",
            yoy_quarterly_sales_growth
          )
        }
        errorMessage={errors.yoy_quarterly_sales_growth?.errorMessage}
        hasError={errors.yoy_quarterly_sales_growth?.hasError}
        {...getOverrideProps(overrides, "yoy_quarterly_sales_growth")}
      ></TextField>
      <TextField
        label="Roce3yr avg"
        isRequired={false}
        isReadOnly={false}
        value={roce3yr_avg}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg: value,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.roce3yr_avg ?? value;
          }
          if (errors.roce3yr_avg?.hasError) {
            runValidationTasks("roce3yr_avg", value);
          }
          setRoce3yr_avg(value);
        }}
        onBlur={() => runValidationTasks("roce3yr_avg", roce3yr_avg)}
        errorMessage={errors.roce3yr_avg?.errorMessage}
        hasError={errors.roce3yr_avg?.hasError}
        {...getOverrideProps(overrides, "roce3yr_avg")}
      ></TextField>
      <TextField
        label="Return on capital employed"
        isRequired={false}
        isReadOnly={false}
        value={return_on_capital_employed}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed: value,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.return_on_capital_employed ?? value;
          }
          if (errors.return_on_capital_employed?.hasError) {
            runValidationTasks("return_on_capital_employed", value);
          }
          setReturn_on_capital_employed(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "return_on_capital_employed",
            return_on_capital_employed
          )
        }
        errorMessage={errors.return_on_capital_employed?.errorMessage}
        hasError={errors.return_on_capital_employed?.hasError}
        {...getOverrideProps(overrides, "return_on_capital_employed")}
      ></TextField>
      <TextField
        label="Opm"
        isRequired={false}
        isReadOnly={false}
        value={opm}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm: value,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.opm ?? value;
          }
          if (errors.opm?.hasError) {
            runValidationTasks("opm", value);
          }
          setOpm(value);
        }}
        onBlur={() => runValidationTasks("opm", opm)}
        errorMessage={errors.opm?.errorMessage}
        hasError={errors.opm?.hasError}
        {...getOverrideProps(overrides, "opm")}
      ></TextField>
      <TextField
        label="Profit after tax"
        isRequired={false}
        isReadOnly={false}
        value={profit_after_tax}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax: value,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.profit_after_tax ?? value;
          }
          if (errors.profit_after_tax?.hasError) {
            runValidationTasks("profit_after_tax", value);
          }
          setProfit_after_tax(value);
        }}
        onBlur={() => runValidationTasks("profit_after_tax", profit_after_tax)}
        errorMessage={errors.profit_after_tax?.errorMessage}
        hasError={errors.profit_after_tax?.hasError}
        {...getOverrideProps(overrides, "profit_after_tax")}
      ></TextField>
      <TextField
        label="Sales"
        isRequired={false}
        isReadOnly={false}
        value={sales}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales: value,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.sales ?? value;
          }
          if (errors.sales?.hasError) {
            runValidationTasks("sales", value);
          }
          setSales(value);
        }}
        onBlur={() => runValidationTasks("sales", sales)}
        errorMessage={errors.sales?.errorMessage}
        hasError={errors.sales?.hasError}
        {...getOverrideProps(overrides, "sales")}
      ></TextField>
      <TextField
        label="Sales growth 3years"
        isRequired={false}
        isReadOnly={false}
        value={sales_growth_3years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years: value,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.sales_growth_3years ?? value;
          }
          if (errors.sales_growth_3years?.hasError) {
            runValidationTasks("sales_growth_3years", value);
          }
          setSales_growth_3years(value);
        }}
        onBlur={() =>
          runValidationTasks("sales_growth_3years", sales_growth_3years)
        }
        errorMessage={errors.sales_growth_3years?.errorMessage}
        hasError={errors.sales_growth_3years?.hasError}
        {...getOverrideProps(overrides, "sales_growth_3years")}
      ></TextField>
      <TextField
        label="Sales growth 5years"
        isRequired={false}
        isReadOnly={false}
        value={sales_growth_5years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years: value,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.sales_growth_5years ?? value;
          }
          if (errors.sales_growth_5years?.hasError) {
            runValidationTasks("sales_growth_5years", value);
          }
          setSales_growth_5years(value);
        }}
        onBlur={() =>
          runValidationTasks("sales_growth_5years", sales_growth_5years)
        }
        errorMessage={errors.sales_growth_5years?.errorMessage}
        hasError={errors.sales_growth_5years?.hasError}
        {...getOverrideProps(overrides, "sales_growth_5years")}
      ></TextField>
      <TextField
        label="Profit growth"
        isRequired={false}
        isReadOnly={false}
        value={profit_growth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth: value,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.profit_growth ?? value;
          }
          if (errors.profit_growth?.hasError) {
            runValidationTasks("profit_growth", value);
          }
          setProfit_growth(value);
        }}
        onBlur={() => runValidationTasks("profit_growth", profit_growth)}
        errorMessage={errors.profit_growth?.errorMessage}
        hasError={errors.profit_growth?.hasError}
        {...getOverrideProps(overrides, "profit_growth")}
      ></TextField>
      <TextField
        label="Profit growth 3years"
        isRequired={false}
        isReadOnly={false}
        value={profit_growth_3years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years: value,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.profit_growth_3years ?? value;
          }
          if (errors.profit_growth_3years?.hasError) {
            runValidationTasks("profit_growth_3years", value);
          }
          setProfit_growth_3years(value);
        }}
        onBlur={() =>
          runValidationTasks("profit_growth_3years", profit_growth_3years)
        }
        errorMessage={errors.profit_growth_3years?.errorMessage}
        hasError={errors.profit_growth_3years?.hasError}
        {...getOverrideProps(overrides, "profit_growth_3years")}
      ></TextField>
      <TextField
        label="Profit growth 5years"
        isRequired={false}
        isReadOnly={false}
        value={profit_growth_5years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years: value,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.profit_growth_5years ?? value;
          }
          if (errors.profit_growth_5years?.hasError) {
            runValidationTasks("profit_growth_5years", value);
          }
          setProfit_growth_5years(value);
        }}
        onBlur={() =>
          runValidationTasks("profit_growth_5years", profit_growth_5years)
        }
        errorMessage={errors.profit_growth_5years?.errorMessage}
        hasError={errors.profit_growth_5years?.hasError}
        {...getOverrideProps(overrides, "profit_growth_5years")}
      ></TextField>
      <TextField
        label="Profit growth 7years"
        isRequired={false}
        isReadOnly={false}
        value={profit_growth_7years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years: value,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.profit_growth_7years ?? value;
          }
          if (errors.profit_growth_7years?.hasError) {
            runValidationTasks("profit_growth_7years", value);
          }
          setProfit_growth_7years(value);
        }}
        onBlur={() =>
          runValidationTasks("profit_growth_7years", profit_growth_7years)
        }
        errorMessage={errors.profit_growth_7years?.errorMessage}
        hasError={errors.profit_growth_7years?.hasError}
        {...getOverrideProps(overrides, "profit_growth_7years")}
      ></TextField>
      <TextField
        label="Profit growth 10years"
        isRequired={false}
        isReadOnly={false}
        value={profit_growth_10years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years: value,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.profit_growth_10years ?? value;
          }
          if (errors.profit_growth_10years?.hasError) {
            runValidationTasks("profit_growth_10years", value);
          }
          setProfit_growth_10years(value);
        }}
        onBlur={() =>
          runValidationTasks("profit_growth_10years", profit_growth_10years)
        }
        errorMessage={errors.profit_growth_10years?.errorMessage}
        hasError={errors.profit_growth_10years?.hasError}
        {...getOverrideProps(overrides, "profit_growth_10years")}
      ></TextField>
      <TextField
        label="Average return on equity 5years"
        isRequired={false}
        isReadOnly={false}
        value={average_return_on_equity_5years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years: value,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.average_return_on_equity_5years ?? value;
          }
          if (errors.average_return_on_equity_5years?.hasError) {
            runValidationTasks("average_return_on_equity_5years", value);
          }
          setAverage_return_on_equity_5years(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "average_return_on_equity_5years",
            average_return_on_equity_5years
          )
        }
        errorMessage={errors.average_return_on_equity_5years?.errorMessage}
        hasError={errors.average_return_on_equity_5years?.hasError}
        {...getOverrideProps(overrides, "average_return_on_equity_5years")}
      ></TextField>
      <TextField
        label="Average return on equity 3years"
        isRequired={false}
        isReadOnly={false}
        value={average_return_on_equity_3years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years: value,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.average_return_on_equity_3years ?? value;
          }
          if (errors.average_return_on_equity_3years?.hasError) {
            runValidationTasks("average_return_on_equity_3years", value);
          }
          setAverage_return_on_equity_3years(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "average_return_on_equity_3years",
            average_return_on_equity_3years
          )
        }
        errorMessage={errors.average_return_on_equity_3years?.errorMessage}
        hasError={errors.average_return_on_equity_3years?.hasError}
        {...getOverrideProps(overrides, "average_return_on_equity_3years")}
      ></TextField>
      <TextField
        label="Return on equity"
        isRequired={false}
        isReadOnly={false}
        value={return_on_equity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity: value,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.return_on_equity ?? value;
          }
          if (errors.return_on_equity?.hasError) {
            runValidationTasks("return_on_equity", value);
          }
          setReturn_on_equity(value);
        }}
        onBlur={() => runValidationTasks("return_on_equity", return_on_equity)}
        errorMessage={errors.return_on_equity?.errorMessage}
        hasError={errors.return_on_equity?.hasError}
        {...getOverrideProps(overrides, "return_on_equity")}
      ></TextField>
      <TextField
        label="Return over 1year"
        isRequired={false}
        isReadOnly={false}
        value={return_over_1year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year: value,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.return_over_1year ?? value;
          }
          if (errors.return_over_1year?.hasError) {
            runValidationTasks("return_over_1year", value);
          }
          setReturn_over_1year(value);
        }}
        onBlur={() =>
          runValidationTasks("return_over_1year", return_over_1year)
        }
        errorMessage={errors.return_over_1year?.errorMessage}
        hasError={errors.return_over_1year?.hasError}
        {...getOverrideProps(overrides, "return_over_1year")}
      ></TextField>
      <TextField
        label="Return over 3years"
        isRequired={false}
        isReadOnly={false}
        value={return_over_3years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years: value,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.return_over_3years ?? value;
          }
          if (errors.return_over_3years?.hasError) {
            runValidationTasks("return_over_3years", value);
          }
          setReturn_over_3years(value);
        }}
        onBlur={() =>
          runValidationTasks("return_over_3years", return_over_3years)
        }
        errorMessage={errors.return_over_3years?.errorMessage}
        hasError={errors.return_over_3years?.hasError}
        {...getOverrideProps(overrides, "return_over_3years")}
      ></TextField>
      <TextField
        label="Return over 5years"
        isRequired={false}
        isReadOnly={false}
        value={return_over_5years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years: value,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.return_over_5years ?? value;
          }
          if (errors.return_over_5years?.hasError) {
            runValidationTasks("return_over_5years", value);
          }
          setReturn_over_5years(value);
        }}
        onBlur={() =>
          runValidationTasks("return_over_5years", return_over_5years)
        }
        errorMessage={errors.return_over_5years?.errorMessage}
        hasError={errors.return_over_5years?.hasError}
        {...getOverrideProps(overrides, "return_over_5years")}
      ></TextField>
      <TextField
        label="Return on assets"
        isRequired={false}
        isReadOnly={false}
        value={return_on_assets}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets: value,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.return_on_assets ?? value;
          }
          if (errors.return_on_assets?.hasError) {
            runValidationTasks("return_on_assets", value);
          }
          setReturn_on_assets(value);
        }}
        onBlur={() => runValidationTasks("return_on_assets", return_on_assets)}
        errorMessage={errors.return_on_assets?.errorMessage}
        hasError={errors.return_on_assets?.hasError}
        {...getOverrideProps(overrides, "return_on_assets")}
      ></TextField>
      <TextField
        label="Sales growth"
        isRequired={false}
        isReadOnly={false}
        value={sales_growth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth: value,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.sales_growth ?? value;
          }
          if (errors.sales_growth?.hasError) {
            runValidationTasks("sales_growth", value);
          }
          setSales_growth(value);
        }}
        onBlur={() => runValidationTasks("sales_growth", sales_growth)}
        errorMessage={errors.sales_growth?.errorMessage}
        hasError={errors.sales_growth?.hasError}
        {...getOverrideProps(overrides, "sales_growth")}
      ></TextField>
      <TextField
        label="Sales preceding year"
        isRequired={false}
        isReadOnly={false}
        value={sales_preceding_year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year: value,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.sales_preceding_year ?? value;
          }
          if (errors.sales_preceding_year?.hasError) {
            runValidationTasks("sales_preceding_year", value);
          }
          setSales_preceding_year(value);
        }}
        onBlur={() =>
          runValidationTasks("sales_preceding_year", sales_preceding_year)
        }
        errorMessage={errors.sales_preceding_year?.errorMessage}
        hasError={errors.sales_preceding_year?.hasError}
        {...getOverrideProps(overrides, "sales_preceding_year")}
      ></TextField>
      <TextField
        label="Sales growth 7years"
        isRequired={false}
        isReadOnly={false}
        value={sales_growth_7years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years: value,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.sales_growth_7years ?? value;
          }
          if (errors.sales_growth_7years?.hasError) {
            runValidationTasks("sales_growth_7years", value);
          }
          setSales_growth_7years(value);
        }}
        onBlur={() =>
          runValidationTasks("sales_growth_7years", sales_growth_7years)
        }
        errorMessage={errors.sales_growth_7years?.errorMessage}
        hasError={errors.sales_growth_7years?.hasError}
        {...getOverrideProps(overrides, "sales_growth_7years")}
      ></TextField>
      <TextField
        label="Operating profit preceding year"
        isRequired={false}
        isReadOnly={false}
        value={operating_profit_preceding_year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year: value,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.operating_profit_preceding_year ?? value;
          }
          if (errors.operating_profit_preceding_year?.hasError) {
            runValidationTasks("operating_profit_preceding_year", value);
          }
          setOperating_profit_preceding_year(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "operating_profit_preceding_year",
            operating_profit_preceding_year
          )
        }
        errorMessage={errors.operating_profit_preceding_year?.errorMessage}
        hasError={errors.operating_profit_preceding_year?.hasError}
        {...getOverrideProps(overrides, "operating_profit_preceding_year")}
      ></TextField>
      <TextField
        label="Net profit last year"
        isRequired={false}
        isReadOnly={false}
        value={net_profit_last_year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year: value,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.net_profit_last_year ?? value;
          }
          if (errors.net_profit_last_year?.hasError) {
            runValidationTasks("net_profit_last_year", value);
          }
          setNet_profit_last_year(value);
        }}
        onBlur={() =>
          runValidationTasks("net_profit_last_year", net_profit_last_year)
        }
        errorMessage={errors.net_profit_last_year?.errorMessage}
        hasError={errors.net_profit_last_year?.hasError}
        {...getOverrideProps(overrides, "net_profit_last_year")}
      ></TextField>
      <TextField
        label="Sales growth 10years"
        isRequired={false}
        isReadOnly={false}
        value={sales_growth_10years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years: value,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.sales_growth_10years ?? value;
          }
          if (errors.sales_growth_10years?.hasError) {
            runValidationTasks("sales_growth_10years", value);
          }
          setSales_growth_10years(value);
        }}
        onBlur={() =>
          runValidationTasks("sales_growth_10years", sales_growth_10years)
        }
        errorMessage={errors.sales_growth_10years?.errorMessage}
        hasError={errors.sales_growth_10years?.hasError}
        {...getOverrideProps(overrides, "sales_growth_10years")}
      ></TextField>
      <TextField
        label="Average earnings 5year"
        isRequired={false}
        isReadOnly={false}
        value={average_earnings_5year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year: value,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.average_earnings_5year ?? value;
          }
          if (errors.average_earnings_5year?.hasError) {
            runValidationTasks("average_earnings_5year", value);
          }
          setAverage_earnings_5year(value);
        }}
        onBlur={() =>
          runValidationTasks("average_earnings_5year", average_earnings_5year)
        }
        errorMessage={errors.average_earnings_5year?.errorMessage}
        hasError={errors.average_earnings_5year?.hasError}
        {...getOverrideProps(overrides, "average_earnings_5year")}
      ></TextField>
      <TextField
        label="Free cash flow last year"
        isRequired={false}
        isReadOnly={false}
        value={free_cash_flow_last_year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year: value,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.free_cash_flow_last_year ?? value;
          }
          if (errors.free_cash_flow_last_year?.hasError) {
            runValidationTasks("free_cash_flow_last_year", value);
          }
          setFree_cash_flow_last_year(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "free_cash_flow_last_year",
            free_cash_flow_last_year
          )
        }
        errorMessage={errors.free_cash_flow_last_year?.errorMessage}
        hasError={errors.free_cash_flow_last_year?.hasError}
        {...getOverrideProps(overrides, "free_cash_flow_last_year")}
      ></TextField>
      <TextField
        label="Free cash flow preceding year"
        isRequired={false}
        isReadOnly={false}
        value={free_cash_flow_preceding_year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year: value,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.free_cash_flow_preceding_year ?? value;
          }
          if (errors.free_cash_flow_preceding_year?.hasError) {
            runValidationTasks("free_cash_flow_preceding_year", value);
          }
          setFree_cash_flow_preceding_year(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "free_cash_flow_preceding_year",
            free_cash_flow_preceding_year
          )
        }
        errorMessage={errors.free_cash_flow_preceding_year?.errorMessage}
        hasError={errors.free_cash_flow_preceding_year?.hasError}
        {...getOverrideProps(overrides, "free_cash_flow_preceding_year")}
      ></TextField>
      <TextField
        label="Net cash flow preceding year"
        isRequired={false}
        isReadOnly={false}
        value={net_cash_flow_preceding_year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year: value,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.net_cash_flow_preceding_year ?? value;
          }
          if (errors.net_cash_flow_preceding_year?.hasError) {
            runValidationTasks("net_cash_flow_preceding_year", value);
          }
          setNet_cash_flow_preceding_year(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "net_cash_flow_preceding_year",
            net_cash_flow_preceding_year
          )
        }
        errorMessage={errors.net_cash_flow_preceding_year?.errorMessage}
        hasError={errors.net_cash_flow_preceding_year?.hasError}
        {...getOverrideProps(overrides, "net_cash_flow_preceding_year")}
      ></TextField>
      <TextField
        label="Free acash flow 3years"
        isRequired={false}
        isReadOnly={false}
        value={free_acash_flow_3years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years: value,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.free_acash_flow_3years ?? value;
          }
          if (errors.free_acash_flow_3years?.hasError) {
            runValidationTasks("free_acash_flow_3years", value);
          }
          setFree_acash_flow_3years(value);
        }}
        onBlur={() =>
          runValidationTasks("free_acash_flow_3years", free_acash_flow_3years)
        }
        errorMessage={errors.free_acash_flow_3years?.errorMessage}
        hasError={errors.free_acash_flow_3years?.hasError}
        {...getOverrideProps(overrides, "free_acash_flow_3years")}
      ></TextField>
      <TextField
        label="Average return on capital employed 3years"
        isRequired={false}
        isReadOnly={false}
        value={average_return_on_capital_employed_3years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years: value,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.average_return_on_capital_employed_3years ?? value;
          }
          if (errors.average_return_on_capital_employed_3years?.hasError) {
            runValidationTasks(
              "average_return_on_capital_employed_3years",
              value
            );
          }
          setAverage_return_on_capital_employed_3years(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "average_return_on_capital_employed_3years",
            average_return_on_capital_employed_3years
          )
        }
        errorMessage={
          errors.average_return_on_capital_employed_3years?.errorMessage
        }
        hasError={errors.average_return_on_capital_employed_3years?.hasError}
        {...getOverrideProps(
          overrides,
          "average_return_on_capital_employed_3years"
        )}
      ></TextField>
      <TextField
        label="Average return on capital employed 5years"
        isRequired={false}
        isReadOnly={false}
        value={average_return_on_capital_employed_5years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years: value,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.average_return_on_capital_employed_5years ?? value;
          }
          if (errors.average_return_on_capital_employed_5years?.hasError) {
            runValidationTasks(
              "average_return_on_capital_employed_5years",
              value
            );
          }
          setAverage_return_on_capital_employed_5years(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "average_return_on_capital_employed_5years",
            average_return_on_capital_employed_5years
          )
        }
        errorMessage={
          errors.average_return_on_capital_employed_5years?.errorMessage
        }
        hasError={errors.average_return_on_capital_employed_5years?.hasError}
        {...getOverrideProps(
          overrides,
          "average_return_on_capital_employed_5years"
        )}
      ></TextField>
      <TextField
        label="Dividend yield"
        isRequired={false}
        isReadOnly={false}
        value={dividend_yield}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield: value,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.dividend_yield ?? value;
          }
          if (errors.dividend_yield?.hasError) {
            runValidationTasks("dividend_yield", value);
          }
          setDividend_yield(value);
        }}
        onBlur={() => runValidationTasks("dividend_yield", dividend_yield)}
        errorMessage={errors.dividend_yield?.errorMessage}
        hasError={errors.dividend_yield?.hasError}
        {...getOverrideProps(overrides, "dividend_yield")}
      ></TextField>
      <TextField
        label="Operating cash flow 3years"
        isRequired={false}
        isReadOnly={false}
        value={operating_cash_flow_3years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years: value,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.operating_cash_flow_3years ?? value;
          }
          if (errors.operating_cash_flow_3years?.hasError) {
            runValidationTasks("operating_cash_flow_3years", value);
          }
          setOperating_cash_flow_3years(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "operating_cash_flow_3years",
            operating_cash_flow_3years
          )
        }
        errorMessage={errors.operating_cash_flow_3years?.errorMessage}
        hasError={errors.operating_cash_flow_3years?.hasError}
        {...getOverrideProps(overrides, "operating_cash_flow_3years")}
      ></TextField>
      <TextField
        label="Operating cash flow 5years"
        isRequired={false}
        isReadOnly={false}
        value={operating_cash_flow_5years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years: value,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.operating_cash_flow_5years ?? value;
          }
          if (errors.operating_cash_flow_5years?.hasError) {
            runValidationTasks("operating_cash_flow_5years", value);
          }
          setOperating_cash_flow_5years(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "operating_cash_flow_5years",
            operating_cash_flow_5years
          )
        }
        errorMessage={errors.operating_cash_flow_5years?.errorMessage}
        hasError={errors.operating_cash_flow_5years?.hasError}
        {...getOverrideProps(overrides, "operating_cash_flow_5years")}
      ></TextField>
      <TextField
        label="Operating cash flow 7years"
        isRequired={false}
        isReadOnly={false}
        value={operating_cash_flow_7years}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years: value,
              price_to_book_value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.operating_cash_flow_7years ?? value;
          }
          if (errors.operating_cash_flow_7years?.hasError) {
            runValidationTasks("operating_cash_flow_7years", value);
          }
          setOperating_cash_flow_7years(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "operating_cash_flow_7years",
            operating_cash_flow_7years
          )
        }
        errorMessage={errors.operating_cash_flow_7years?.errorMessage}
        hasError={errors.operating_cash_flow_7years?.hasError}
        {...getOverrideProps(overrides, "operating_cash_flow_7years")}
      ></TextField>
      <TextField
        label="Price to book value"
        isRequired={false}
        isReadOnly={false}
        value={price_to_book_value}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value: value,
              return_over_6months,
            };
            const result = onChange(modelFields);
            value = result?.price_to_book_value ?? value;
          }
          if (errors.price_to_book_value?.hasError) {
            runValidationTasks("price_to_book_value", value);
          }
          setPrice_to_book_value(value);
        }}
        onBlur={() =>
          runValidationTasks("price_to_book_value", price_to_book_value)
        }
        errorMessage={errors.price_to_book_value?.errorMessage}
        hasError={errors.price_to_book_value?.hasError}
        {...getOverrideProps(overrides, "price_to_book_value")}
      ></TextField>
      <TextField
        label="Return over 6months"
        isRequired={false}
        isReadOnly={false}
        value={return_over_6months}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              bse_code,
              nse_code,
              industry,
              current_price,
              price_to_earning,
              industry_pe,
              eps,
              promoter_holding,
              debt_to_equity,
              net_profit_latest_quarter,
              yoy_quarterly_profit_growth,
              sales_latest_quarter,
              yoy_quarterly_sales_growth,
              roce3yr_avg,
              return_on_capital_employed,
              opm,
              profit_after_tax,
              sales,
              sales_growth_3years,
              sales_growth_5years,
              profit_growth,
              profit_growth_3years,
              profit_growth_5years,
              profit_growth_7years,
              profit_growth_10years,
              average_return_on_equity_5years,
              average_return_on_equity_3years,
              return_on_equity,
              return_over_1year,
              return_over_3years,
              return_over_5years,
              return_on_assets,
              sales_growth,
              sales_preceding_year,
              sales_growth_7years,
              operating_profit_preceding_year,
              net_profit_last_year,
              sales_growth_10years,
              average_earnings_5year,
              free_cash_flow_last_year,
              free_cash_flow_preceding_year,
              net_cash_flow_preceding_year,
              free_acash_flow_3years,
              average_return_on_capital_employed_3years,
              average_return_on_capital_employed_5years,
              dividend_yield,
              operating_cash_flow_3years,
              operating_cash_flow_5years,
              operating_cash_flow_7years,
              price_to_book_value,
              return_over_6months: value,
            };
            const result = onChange(modelFields);
            value = result?.return_over_6months ?? value;
          }
          if (errors.return_over_6months?.hasError) {
            runValidationTasks("return_over_6months", value);
          }
          setReturn_over_6months(value);
        }}
        onBlur={() =>
          runValidationTasks("return_over_6months", return_over_6months)
        }
        errorMessage={errors.return_over_6months?.errorMessage}
        hasError={errors.return_over_6months?.hasError}
        {...getOverrideProps(overrides, "return_over_6months")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || stockUniverseModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || stockUniverseModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
