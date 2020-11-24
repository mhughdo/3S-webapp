import React from "react";
import { Box, Heading, Wrap, WrapItem, Text, chakra } from "@chakra-ui/react";
import { FaWifi, FaCarAlt, FaSwimmer, FaAirFreshener } from "react-icons/fa";
import { Element } from "react-scroll";

const Amenities = () => {
  const NavLabel = chakra(Element)

  return (
    <NavLabel className="place-details-amenities" name="amenities" mt={20}>
      <Box className="title">
        <Heading as="h3" fontSize="3xl" fontWeight="bolder" lineHeight="shorter">
          Tiện nghi chỗ ở
        </Heading>
        <Text mt={5}>
          Giới thiệu về các tiện nghi và dịch vụ tại nơi lưu trú
        </Text>
      </Box>
      <Box className="facilities">
        <Heading mt={6} fontSize="xl">
          Tiện ích
        </Heading>
        <Wrap align="center" color="#555" width="100%">
          <WrapItem
            alignItems="center"
            lineHeight="taller"
            mt={3}
            width="31.333%"
          >
            <FaWifi fontSize="24px" />
            <span style={{ marginLeft: ".875rem" }}>Wifi</span>
          </WrapItem>
          <WrapItem
            alignItems="center"
            lineHeight="taller"
            mt={3}
            width="31.333%"
          >
            <FaCarAlt fontSize="24px" />
            <span style={{ marginLeft: ".875rem" }}>Wifi</span>
          </WrapItem>
          <WrapItem
            alignItems="center"
            lineHeight="taller"
            mt={3}
            width="31.333%"
          >
            <FaSwimmer fontSize="24px" />
            <span style={{ marginLeft: ".875rem" }}>Wifi</span>
          </WrapItem>
          <WrapItem
            alignItems="center"
            lineHeight="taller"
            mt={3}
            width="31.333%"
          >
            <FaWifi fontSize="24px" />
            <span style={{ marginLeft: ".875rem" }}>Wifi</span>
          </WrapItem>
          <WrapItem
            alignItems="center"
            lineHeight="taller"
            mt={3}
            width="31.333%"
          >
            <FaWifi fontSize="24px" />
            <span style={{ marginLeft: ".875rem" }}>Wifi</span>
          </WrapItem>
        </Wrap>
      </Box>
      <Box className="kitchen">
        <Heading mt={6} fontSize="xl">
          Tiện ích bếp
        </Heading>
        <Wrap align="center" color="#555" width="100%">
          <WrapItem
            alignItems="center"
            lineHeight="taller"
            mt={3}
            width="31.333%"
          >
            <FaAirFreshener fontSize="24px" />
            <span style={{ marginLeft: ".875rem" }}>Wifi</span>
          </WrapItem>
          <WrapItem
            alignItems="center"
            lineHeight="taller"
            mt={3}
            width="31.333%"
          >
            <FaWifi fontSize="24px" />
            <span style={{ marginLeft: ".875rem" }}>Wifi</span>
          </WrapItem>
        </Wrap>
      </Box>
      <Box className="entertainment">
        <Heading mt={6} fontSize="xl">
          Tiện ích phòng
        </Heading>
        <Wrap align="center" color="#555" width="100%">
          <WrapItem
            alignItems="center"
            lineHeight="taller"
            mt={3}
            width="31.333%"
          >
            <FaWifi fontSize="24px" />
            <span style={{ marginLeft: ".875rem" }}>Wifi</span>
          </WrapItem>
          <WrapItem
            alignItems="center"
            lineHeight="taller"
            mt={3}
            width="31.333%"
          >
            <FaWifi fontSize="24px" />
            <span style={{ marginLeft: ".875rem" }}>Wifi</span>
          </WrapItem>
          <WrapItem
            alignItems="center"
            lineHeight="taller"
            mt={3}
            width="31.333%"
          >
            <FaWifi fontSize="24px" />
            <span style={{ marginLeft: ".875rem" }}>Wifi</span>
          </WrapItem>
        </Wrap>
      </Box>
    </NavLabel>
  );
};

export default Amenities;
