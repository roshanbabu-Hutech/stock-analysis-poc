/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Stocks } from "../models";
import { getOverrideProps, useDataStoreDeleteAction } from "./utils";
import { schema } from "../models/schema";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Stocklist(props) {
  const { stocks, overrides, ...rest } = props;
  const deleteOnClick = useDataStoreDeleteAction({
    id: stocks?.id,
    model: Stocks,
    schema: schema,
  });
  return (
    <View
      width="1360px"
      height="743px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Stocklist")}
      {...rest}
    >
      <View
        width="1360px"
        height="743px"
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
      <View
        padding="0px 0px 0px 0px"
        width="103px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2.96%"
        bottom="91.66%"
        left="90.22%"
        right="2.21%"
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
          {...getOverrideProps(overrides, "Rectangle 47543")}
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
          right="21.36%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Add Stock"
          {...getOverrideProps(overrides, "Add Stock")}
        ></Text>
      </View>
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
        top="4.04%"
        bottom="93%"
        left="2.94%"
        right="90.66%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Stock List"
        {...getOverrideProps(overrides, "Stock List")}
      ></Text>
      <Icon
        width="1360px"
        height="0px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 1360,
          height: 0.00011889497613992717,
        }}
        paths={[
          {
            d: "M0 0L1360 0L1360 -1L0 -1L0 0Z",
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
        top="10.9%"
        bottom="89.1%"
        left="0%"
        right="0%"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="302px"
        height="318px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="16.29%"
        bottom="40.92%"
        left="2.94%"
        right="74.85%"
        {...getOverrideProps(overrides, "Group 20")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="302px"
          height="318px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Group 17")}
        >
          <View
            width="302px"
            height="318px"
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
            {...getOverrideProps(overrides, "Rectangle 10")}
          ></View>
          <View
            padding="0px 0px 0px 0px"
            width="85px"
            height="39px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="30.82%"
            bottom="56.92%"
            left="11.26%"
            right="60.6%"
            {...getOverrideProps(overrides, "Group 11")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="43px"
              height="15px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="61.54%"
              left="0%"
              right="49.41%"
              {...getOverrideProps(overrides, "Group 67433")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="43px"
                height="15px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group 17434")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="12px"
                  fontWeight="400"
                  color="rgba(97,92,92,1)"
                  lineHeight="14.522727012634277px"
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
                  bottom="0%"
                  left="0%"
                  right="0%"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Symbol"
                  {...getOverrideProps(overrides, "Symbol")}
                ></Text>
              </View>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="85px"
              height="17px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="56.41%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group 107436")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="85px"
                height="17px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group 17437")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="14px"
                  fontWeight="600"
                  color="rgba(52,67,87,1)"
                  textTransform="uppercase"
                  lineHeight="16.94318199157715px"
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
                  bottom="0%"
                  left="0%"
                  right="0%"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={stocks?.symbol}
                  {...getOverrideProps(overrides, "AsianPaint")}
                ></Text>
              </View>
            </View>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="66px"
            height="39px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="31.13%"
            bottom="56.6%"
            left="61.26%"
            right="16.89%"
            {...getOverrideProps(overrides, "Group 13")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="66px"
              height="15px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="61.54%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group 67440")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="66px"
                height="15px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group 17441")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="12px"
                  fontWeight="400"
                  color="rgba(97,92,92,1)"
                  lineHeight="14.522727012634277px"
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
                  bottom="0%"
                  left="0%"
                  right="0%"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Market Cap"
                  {...getOverrideProps(overrides, "Market Cap")}
                ></Text>
              </View>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="33px"
              height="17px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="56.41%"
              bottom="0%"
              left="0%"
              right="50%"
              {...getOverrideProps(overrides, "Group 107443")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="33px"
                height="17px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group 17444")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="14px"
                  fontWeight="600"
                  color="rgba(52,67,87,1)"
                  lineHeight="16.94318199157715px"
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
                  bottom="0%"
                  left="0%"
                  right="0%"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={stocks?.market_cap}
                  {...getOverrideProps(overrides, "Nifty")}
                ></Text>
              </View>
            </View>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="87px"
            height="39px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="52.83%"
            bottom="34.91%"
            left="10.6%"
            right="60.6%"
            {...getOverrideProps(overrides, "Group 14")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="38px"
              height="15px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="61.54%"
              left="0%"
              right="56.32%"
              {...getOverrideProps(overrides, "Group 67447")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="38px"
                height="15px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group 17448")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="12px"
                  fontWeight="400"
                  color="rgba(97,92,92,1)"
                  lineHeight="14.522727012634277px"
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
                  bottom="0%"
                  left="0%"
                  right="0%"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Sector"
                  {...getOverrideProps(overrides, "Sector")}
                ></Text>
              </View>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="87px"
              height="17px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="56.41%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group 107450")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="87px"
                height="17px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group 17451")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="14px"
                  fontWeight="600"
                  color="rgba(52,67,87,1)"
                  lineHeight="16.94318199157715px"
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
                  bottom="0%"
                  left="0%"
                  right="0%"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={stocks?.sector}
                  {...getOverrideProps(overrides, "Manufacture")}
                ></Text>
              </View>
            </View>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="46px"
            height="39px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="53.14%"
            bottom="34.59%"
            left="61.26%"
            right="23.51%"
            {...getOverrideProps(overrides, "Group 15")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="46px"
              height="15px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="61.54%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group 67454")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="46px"
                height="15px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group 17455")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="12px"
                  fontWeight="400"
                  color="rgba(97,92,92,1)"
                  lineHeight="14.522727012634277px"
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
                  bottom="0%"
                  left="0%"
                  right="0%"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Country"
                  {...getOverrideProps(overrides, "Country")}
                ></Text>
              </View>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="33px"
              height="17px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="56.41%"
              bottom="0%"
              left="0%"
              right="28.26%"
              {...getOverrideProps(overrides, "Group 107457")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="33px"
                height="17px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group 17458")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="14px"
                  fontWeight="600"
                  color="rgba(52,67,87,1)"
                  lineHeight="16.94318199157715px"
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
                  bottom="0%"
                  left="0%"
                  right="0%"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={stocks?.country}
                  {...getOverrideProps(overrides, "India")}
                ></Text>
              </View>
            </View>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="76px"
            height="39px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.81%"
            bottom="78.93%"
            left="11.26%"
            right="63.58%"
            {...getOverrideProps(overrides, "Group 12")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="54px"
              height="15px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="61.54%"
              left="0%"
              right="28.95%"
              {...getOverrideProps(overrides, "Group 67461")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="54px"
                height="15px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group 17462")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="12px"
                  fontWeight="400"
                  color="rgba(97,92,92,1)"
                  lineHeight="14.522727012634277px"
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
                  bottom="0%"
                  left="0%"
                  right="0%"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Company"
                  {...getOverrideProps(overrides, "Company")}
                ></Text>
              </View>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="76px"
              height="17px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="56.41%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group 107464")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="76px"
                height="17px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group 17465")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="14px"
                  fontWeight="600"
                  color="rgba(52,67,87,1)"
                  lineHeight="16.94318199157715px"
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
                  bottom="0%"
                  left="0%"
                  right="0%"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={stocks?.company}
                  {...getOverrideProps(overrides, "Asian Paint")}
                ></Text>
              </View>
            </View>
          </View>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="100px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="81.45%"
          bottom="5.97%"
          left="52.32%"
          right="14.57%"
          {...getOverrideProps(overrides, "Group 4")}
        >
          <View
            width="100px"
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
            {...getOverrideProps(overrides, "Rectangle 47559")}
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
            left="30%"
            right="24%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Update"
            {...getOverrideProps(overrides, "Update")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="100px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="81.45%"
          bottom="5.97%"
          left="12.58%"
          right="54.3%"
          {...getOverrideProps(overrides, "Group 5")}
        >
          <View
            width="100px"
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
            border="1px SOLID rgba(212,209,209,1)"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Rectangle 47562")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="13px"
            fontWeight="600"
            color="rgba(82,79,79,1)"
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
            left="30%"
            right="29%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Delete"
            onClick={() => {
              deleteOnClick();
            }}
            {...getOverrideProps(overrides, "Delete")}
          ></Text>
        </View>
      </View>
      <Icon
        width="301px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 301, height: 1 }}
        paths={[
          {
            d: "M0 0L301 0L301 -1L0 -1L0 0Z",
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
        top="49.26%"
        bottom="50.74%"
        left="3.01%"
        right="74.85%"
        {...getOverrideProps(overrides, "Line 8")}
      ></Icon>
    </View>
  );
}
