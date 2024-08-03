/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Component3(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="960px"
      height="54px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component3")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="5.56%"
        bottom="50%"
        left="4.17%"
        right="75.21%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create Stock Bucket"
        {...getOverrideProps(overrides, "Create Stock Bucket")}
      ></Text>
      <Icon
        width="960px"
        height="0px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 960,
          height: 0.00008392586551053682,
        }}
        paths={[
          {
            d: "M0 0L960 0L960 -1L0 -1L0 0Z",
            stroke: "rgba(221,221,221,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="100%"
        bottom="0%"
        left="0%"
        right="0%"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
    </View>
  );
}
