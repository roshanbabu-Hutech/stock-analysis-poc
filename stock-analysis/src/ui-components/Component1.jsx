/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Component1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1200px"
      height="51px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component1")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="21.784090042114258px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="56.86%"
        left="3.33%"
        right="87.25%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create Stock"
        {...getOverrideProps(overrides, "Create Stock")}
      ></Text>
      <Icon
        width="1200px"
        height="0px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 1200,
          height: 0.00010490733188817103,
        }}
        paths={[
          {
            d: "M0 0L1200 0L1200 -1L0 -1L0 0Z",
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
