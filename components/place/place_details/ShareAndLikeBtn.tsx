import React from "react";
import {
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";
import { BsHeart } from "react-icons/bs";


const ShareAndLikeBtn = () => {
  return (
    <Box padding="1.5rem 0">
      <Flex flexDirection="row" justifyContent="flex-end">
        <Button outline="0" fontSize="1.25rem" variant="none" fontWeight="500" rightIcon={<BsHeart fontSize="18px" />} backgroundColor="#fff">
          Lưu lại
        </Button>
      </Flex>
    </Box>
  );
};

export default ShareAndLikeBtn;
