import React, { useState } from "react";
import {
  Box,
  Stack,
  Text,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { SingleDatePicker } from "react-dates";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    startDate: null,
    endDate: null,
    numOfGuest: 1,
  });
  const [focusedStartDate, setFocusedStartDate] = useState(null);
  const [focusedEndDate, setFocusedEndDate] = useState(null);

  const formatVal = (val) => val + ` khách`
  const parseVal = (val) => val.replace(/^\[a-z]/, "")

  return (
    <Box position="sticky" borderRadius="3px" top="100px">
      <Box border="1px solid #e9e9e9" borderRadius="4px">
        <Box px={13} pt={6}>
          <Box className="pricing">
            <Stack direction="row" align="baseline">
              <Text fontWeight="bolder" fontSize="3xl">
                491,200₫
              </Text>
              <Text fontSize="sm">/đêm</Text>
            </Stack>
          </Box>
          <Box
            mt={6}
            display="flex"
            flexDirection="row"
            width="100%"
            alignItems="center"
            justifyContent="center"
            border="1px solid #ebebeb"
            borderRadius="5px"
          >
            <SingleDatePicker
              date={formData.startDate}
              id="3S_start_date"
              onDateChange={(startDate) => {
                setFormData({ ...formData, startDate });
              }}
              focused={focusedStartDate}
              onFocusChange={({ focused }) => setFocusedStartDate(focused)}
              numberOfMonths={1}
              placeholder="dd/mm/yyyy"
              displayFormat="DD/MM/YYYY"
              hideKeyboardShortcutsPanel={true}
              showDefaultInputIcon={false}
              readOnly={true}
              noBorder={true}
            />
            <span>đến</span>
            <SingleDatePicker
              date={formData.endDate}
              id="3S_end_date"
              onDateChange={(endDate) => {
                setFormData({ ...formData, endDate });
              }}
              focused={focusedEndDate}
              onFocusChange={({ focused }) => setFocusedEndDate(focused)}
              numberOfMonths={1}
              placeholder="dd/mm/yyyy"
              displayFormat="DD/MM/YYYY"
              hideKeyboardShortcutsPanel={true}
              showDefaultInputIcon={false}
              readOnly={true}
              noBorder={true}
            />
          </Box>
          <Box mt={2}>
            <NumberInput
              onChange={(value) =>
                setFormData({
                  ...formData,
                  numOfGuest: parseVal(value),
                })
              }
              value={formatVal(formData.numOfGuest)}
              width="100%"
              defaultValue={1}
              min={1}
              max={20}
            >
              <NumberInputField disabled={true} padding="1.25rem" outline="none" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box
            as="button"
            color="#fff"
            width="100%"
            height="3rem"
            borderRadius=".375rem"
            mt={3}
            mb={6}
            fontWeight="bold"
            backgroundImage="linear-gradient(90deg,#f65e38 0,#f68a39 51%,#f65e38)"
            backgroundSize="200% auto"
            boxShadow="0 4px 12px 0 rgba(246,116,57,.4)"
            transition="all .3s"
          >
            Đặt Ngay
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BookingForm;
