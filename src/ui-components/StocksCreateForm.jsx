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
import { createStocks } from "../graphql/mutations";
const client = generateClient();
export default function StocksCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    company: "",
    symbol: "",
    market_cap: "",
    sector: "",
    country: "",
    stock_bucket_id: "",
  };
  const [company, setCompany] = React.useState(initialValues.company);
  const [symbol, setSymbol] = React.useState(initialValues.symbol);
  const [market_cap, setMarket_cap] = React.useState(initialValues.market_cap);
  const [sector, setSector] = React.useState(initialValues.sector);
  const [country, setCountry] = React.useState(initialValues.country);
  const [stock_bucket_id, setStock_bucket_id] = React.useState(
    initialValues.stock_bucket_id
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCompany(initialValues.company);
    setSymbol(initialValues.symbol);
    setMarket_cap(initialValues.market_cap);
    setSector(initialValues.sector);
    setCountry(initialValues.country);
    setStock_bucket_id(initialValues.stock_bucket_id);
    setErrors({});
  };
  const validations = {
    company: [{ type: "Required" }],
    symbol: [],
    market_cap: [],
    sector: [],
    country: [],
    stock_bucket_id: [],
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
          company,
          symbol,
          market_cap,
          sector,
          country,
          stock_bucket_id,
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
            query: createStocks.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "StocksCreateForm")}
      {...rest}
    >
      <TextField
        label="Company"
        isRequired={true}
        isReadOnly={false}
        value={company}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              company: value,
              symbol,
              market_cap,
              sector,
              country,
              stock_bucket_id,
            };
            const result = onChange(modelFields);
            value = result?.company ?? value;
          }
          if (errors.company?.hasError) {
            runValidationTasks("company", value);
          }
          setCompany(value);
        }}
        onBlur={() => runValidationTasks("company", company)}
        errorMessage={errors.company?.errorMessage}
        hasError={errors.company?.hasError}
        {...getOverrideProps(overrides, "company")}
      ></TextField>
      <TextField
        label="Symbol"
        isRequired={false}
        isReadOnly={false}
        value={symbol}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              company,
              symbol: value,
              market_cap,
              sector,
              country,
              stock_bucket_id,
            };
            const result = onChange(modelFields);
            value = result?.symbol ?? value;
          }
          if (errors.symbol?.hasError) {
            runValidationTasks("symbol", value);
          }
          setSymbol(value);
        }}
        onBlur={() => runValidationTasks("symbol", symbol)}
        errorMessage={errors.symbol?.errorMessage}
        hasError={errors.symbol?.hasError}
        {...getOverrideProps(overrides, "symbol")}
      ></TextField>
      <TextField
        label="Market cap"
        isRequired={false}
        isReadOnly={false}
        value={market_cap}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              company,
              symbol,
              market_cap: value,
              sector,
              country,
              stock_bucket_id,
            };
            const result = onChange(modelFields);
            value = result?.market_cap ?? value;
          }
          if (errors.market_cap?.hasError) {
            runValidationTasks("market_cap", value);
          }
          setMarket_cap(value);
        }}
        onBlur={() => runValidationTasks("market_cap", market_cap)}
        errorMessage={errors.market_cap?.errorMessage}
        hasError={errors.market_cap?.hasError}
        {...getOverrideProps(overrides, "market_cap")}
      ></TextField>
      <TextField
        label="Sector"
        isRequired={false}
        isReadOnly={false}
        value={sector}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              company,
              symbol,
              market_cap,
              sector: value,
              country,
              stock_bucket_id,
            };
            const result = onChange(modelFields);
            value = result?.sector ?? value;
          }
          if (errors.sector?.hasError) {
            runValidationTasks("sector", value);
          }
          setSector(value);
        }}
        onBlur={() => runValidationTasks("sector", sector)}
        errorMessage={errors.sector?.errorMessage}
        hasError={errors.sector?.hasError}
        {...getOverrideProps(overrides, "sector")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              company,
              symbol,
              market_cap,
              sector,
              country: value,
              stock_bucket_id,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Stock bucket id"
        isRequired={false}
        isReadOnly={false}
        value={stock_bucket_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              company,
              symbol,
              market_cap,
              sector,
              country,
              stock_bucket_id: value,
            };
            const result = onChange(modelFields);
            value = result?.stock_bucket_id ?? value;
          }
          if (errors.stock_bucket_id?.hasError) {
            runValidationTasks("stock_bucket_id", value);
          }
          setStock_bucket_id(value);
        }}
        onBlur={() => runValidationTasks("stock_bucket_id", stock_bucket_id)}
        errorMessage={errors.stock_bucket_id?.errorMessage}
        hasError={errors.stock_bucket_id?.hasError}
        {...getOverrideProps(overrides, "stock_bucket_id")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
