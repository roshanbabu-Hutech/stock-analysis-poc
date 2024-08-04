/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Component2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1130px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component2")}
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
        top="20%"
        bottom="25%"
        left="0%"
        right="91.42%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Bucket List"
        {...getOverrideProps(overrides, "Bucket List")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="103px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="90.88%"
        right="0%"
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
          {...getOverrideProps(overrides, "Add Bucket")}
        ></Text>
      </View>
    </View>
  );
}
