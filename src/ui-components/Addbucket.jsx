/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Addbucket(props) {
  const { overrides, ...rest } = props;
  const addBucketOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://www.google.com/",
  });
  return (
    <View
      width="960px"
      height="638px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Addbucket")}
      {...rest}
    >
      <View
        width="960px"
        height="638px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(221,221,221,1)"
        borderRadius="12px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
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
        top="4.7%"
        bottom="91.54%"
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
        top="12.7%"
        bottom="87.3%"
        left="0%"
        right="0%"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="103px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="4.23%"
        bottom="89.5%"
        left="86.15%"
        right="3.13%"
        {...getOverrideProps(overrides, "Group 3")}
      >
        <View
          width="103px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="5px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(46,117,209,1)"
          {...getOverrideProps(overrides, "Rectangle 4")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="15.732954025268555px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="30%"
          bottom="30%"
          left="15.53%"
          right="13.59%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Add Bucket"
          onClick={() => {
            addBucketOnClick();
          }}
          {...getOverrideProps(overrides, "Add Bucket")}
        ></Text>
      </View>
    </View>
  );
}
