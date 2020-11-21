import { Container, Box, Flex, chakra } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Amenities from "./Amenities";
import BookingForm from "./BookingForm";
import ImageSlider from "./ImageSlider";
import Location from "./Location";
import PlaceIntro from "./PlaceIntro";
import PlaceRoute from "./PlaceRoute";
import PolicyAndRule from "./PolicyAndRule";
import Price from "./Price";
import Reviews from "./Reviews";
import ShareAndLikeBtn from "./ShareAndLikeBtn";
import { Link } from "react-scroll";

const PlaceDetailsComponent = () => {
  const Nav = chakra('nav')
  const NavItem = chakra(Link)

  const [showStickyNavBar, setShowStickyNavBar] = useState(true);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position >= 650) {
      setShowStickyNavBar(true)
    } else{
      setShowStickyNavBar(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLabels = [
    { label: "Tổng quan", to: "overview" },
    { label: "Tiện nghi", to: "amenities" },
    { label: "Giá phòng", to: "room rate" },
    { label: "Đánh giá", to: "reviews" },
    { label: "Nội quy", to: "policies" },
    { label: "Vị trí", to: "location" },
  ];

  return (
    <Box>
      <Nav
        display={showStickyNavBar ? "flex" : "none"}
        position="sticky"
        backgroundColor="white"
        zIndex={10}
        top={0}
        left={0}
        borderTop="1px solid rgb(230, 230, 230)"
        borderBottom="1px solid rgb(230, 230, 230)"
        boxShadow="0 3px 5px 0 rgba(0,0,0,.07), 0 1px 0 0 rgba(0,0,0,.05)"
        fontSize="lg"
        transition="transform .2s"
      >
        <Container
          maxW="xl"
          centerContent
          flexDirection="row"
          display="flex"
          justifyContent="space-between"
        >
          <Box>
            {navLabels.map(({ label, to }) => (
              <NavItem
                key={to}
                activeClass="nav-item-sticky-active"
                sx={{
                  marginRight: "18px",
                  padding: "1.8125rem",
                  cursor: "pointer",
                  transform: "translateY(0)",
                  transition: "all .2s",
                  ':hover': {
                    cursor: "pointer",
                    color: "#f65e39"
                  },
                }}
                to={to}
                spy
                smooth
                duration={200}
                offset={-182}
              >
                {label}
              </NavItem>
            ))}
          </Box>
          <Box paddingRight="1.7rem">
            <ShareAndLikeBtn />
          </Box>
        </Container>
      </Nav>
      <ImageSlider />
      <Box>
        <Container padding="0 2.8rem" maxW="xl" centerContent>
          <Box width="100%">
            <Flex width="100%" flexDirection="row">
              <Box flex="2">
                <Box paddingRight="50px">
                  <PlaceRoute />
                  <PlaceIntro />
                  <Amenities />
                  <Price />
                  <Reviews />
                  <PolicyAndRule />
                  <Location />
                </Box>
              </Box>
              <Box flex="1">
                <ShareAndLikeBtn />
                <BookingForm />
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default PlaceDetailsComponent;
