import React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import HeaderComponent from "@components/Header";
import Copyright from "@components/Copyright";
import { Box } from "@chakra-ui/react";
import PlaceDetailsComponent from "@components/place/place_details/PlaceDetailsComponent";

export default function PlaceDetails() {
  return (
    <Box>
      <HeaderComponent/>
      <PlaceDetailsComponent/>
      <Copyright />
    </Box>
  );
}
