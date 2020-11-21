import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BiLocationPlus, BiBuildings } from "react-icons/bi";
import { Element } from "react-scroll";

const PlaceIntro = () => {
  const NavLabel = chakra(Element);
  const [truncated, setTruncated] = useState(true);

  return (
    <NavLabel className="place-details-overviews" name="overview">
      <Box>
        <Flex justifyContent="space-between">
          <Heading as="h1" fontSize="4xl" flexBasis="77%" fontWeight="bolder">
            AimeeHomestay#2 - Phan Bội Châu/ Self check-in
          </Heading>
          <Box flexBasis="16%" alignContent="center" textAlign="end">
            <Avatar
              size="lg"
              src="https://cdn.luxstay.com/rooms/34370/large/2f78a6f10c83e81708f369287c87e4b6.png"
            />
          </Box>
        </Flex>
      </Box>
      <Box mt={6} fontSize="sm">
        <Flex
          justifyContent="flex-start"
          flexDirection="row"
          alignItems="center"
        >
          <BiLocationPlus size="1.5rem" />
          <Text fontWeight="bolder" ml={3}>
            Hoan Kiem, Ha Noi, Vietnam
          </Text>
        </Flex>
      </Box>
      <Box mt={3} fontSize="sm">
        <Flex
          justifyContent="flex-start"
          flexDirection="row"
          alignItems="center"
        >
          <BiBuildings size="1.5rem" />
          <Text fontWeight="bolder" ml={3}>
            Studio
          </Text>
          <Text fontWeight="medium" fontSize="medium" ml={1}>
            · 130 m<sup>2</sup>
          </Text>
        </Flex>
      </Box>
      <Box mt={4}>
        <Stack spacing="5px" direction="row">
          <Text>Nguyên căn ·</Text>3 phong ngu ·<Text>1 phong khack ·</Text>2
          giuong ·<Text>1 phong tam</Text>
        </Stack>
      </Box>
      <Box className="coupon-area" mt="18px">
        <Box pb={5}>
          <Box animation="fadeIn .4s ease-in-out">
            <Box
              background="#f6f6f6"
              borderRadius="md"
              boxShadow="0 4px 8px 0 rgba(0,0,0,.1)"
              border="1px solid #d6d6d6"
              overflow="hidden"
              width="331px"
            >
              <Box
                py={3}
                px={2}
                fontWeight="bold"
                backgroundColor="#4a4a4a"
                color="#fff"
              >
                <Text>Coupon</Text>
              </Box>
              <Box
                p={3}
                fontSize="sm"
              >
                <Box className="coupon-des">
                  Khuyến mãi <strong style={{ color: "#FF0037" }}>10%</strong> -
                  Mã: <strong style={{ color: "#FF0037" }}>WOW10</strong>
                  <br />
                  Nhận phòng: <strong>Không giới hạn</strong>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt="36px">
        <Box>
          <Box position="relative">
            <Box id="short-intro" lineHeight="taller">
              <Text
                fontSize="md"
                color="#222"
                isTruncated={truncated}
                noOfLines={truncated ? 6 : null}
              >
                Sunrise city view quan 7 ( 5 SAO). Full tiện nghi .Diện tích 3
                phòng 130m2. Nhưng chỉ có 1 giường king. Sunrise city view quan
                7. gần siêu thị loter. Phu My Hung 3min. Đi Quan1 chi 7 phút.
                Chợ Lớn 20 min • Không gian: 1 phòng lớn. 1phòng 25m2 có view
                xem san vườn. ph bếp. có bang kong, được tổ chức tiệc nướng
                ngoài trời , hồ bơi trẻ em, người lớn. • Nhà Mới xây tháng
                11/2019. • Xung quanh : ViVo city, ngay siêu thị Lotter , nhà
                hàng ẩm thực Phú Mỹ Hưng 3min đi xe máy quanh chỗ ở. Đi phố Bùi
                Viện 5min xe grap, goviet, taxi 10min. Luôn hổ trợ các bạn 20/24
                giờ khi cần. Gần ViVo city, ngay siêu thị Lotter , quan1, Chợ
                Lớn, chợ An Đông Gần Nhà hàng ẩm thực khu Phú Mỹ Hưng 3min đi xe
                máy khu Món ăn Người Hàn Quốc, Nhật. Khu an ninh, lich sự. Không
                khí xanh, sạch, Nhất Saigon. Bên cạnh đó, tôi cũng là một người
                bản địa vô cùng thân thiện và thoải mái. Chính vì vậy đừng ngại
                ngần mà chia sẻ với chúng tôi những điều bạn đang thắc mắc hoặc
                những khó khăn bạn gặp phải khi ở đây. Chúng tôi cũng luôn mong
                muốn được cùng bạn khám phá nhiều địa điểm tốt đẹp nhất tại đây.
                GIỜ LÀ kế hoạch Của Bạn và người Ấy nhé. Cuộc đởi có là bao,Tận
                hưởng những khoảnh khắc đẹp cùng nhau. View Bao đẹp Thanks
              </Text>
              <Button
                onClick={() => setTruncated(!truncated)}
                color="#f65e39"
                variant="link"
                outline={0}
              >
                {truncated ? "Đọc thêm" : "Thu gọn"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </NavLabel>
  );
};

export default PlaceIntro
