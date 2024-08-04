/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { generateClient } from "aws-amplify/api";
import { deleteStocks } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function Group20(props) {
  const { stocks, overrides, ...rest } = props;
  const rectangleFourSevenFiveSixTwoOnClick = async () => {
    await client.graphql({
      query: deleteStocks.replaceAll("__typename", ""),
      variables: {
        input: {
          id: stocks?.id,
        },
      },
    });
  };
  return (
    <View
      width="302px"
      height="301px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Group20")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="302px"
        height="301px"
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
          height="301px"
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
          top="32.56%"
          bottom="54.49%"
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
          top="32.89%"
          bottom="54.15%"
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
          top="55.81%"
          bottom="31.23%"
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
          top="56.15%"
          bottom="30.9%"
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
          top="9.3%"
          bottom="77.74%"
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
        top="78.74%"
        bottom="7.97%"
        left="50.99%"
        right="15.89%"
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
        top="78.74%"
        bottom="7.97%"
        left="11.26%"
        right="55.63%"
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
          onClick={() => {
            rectangleFourSevenFiveSixTwoOnClick();
          }}
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
          right="26%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Cancel"
          {...getOverrideProps(overrides, "Cancel")}
        ></Text>
      </View>
    </View>
  );
}
