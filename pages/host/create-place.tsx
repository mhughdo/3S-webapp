/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/await-thenable */
import { Box, useToast } from '@chakra-ui/react'
import Header from '@components/Header'
import PlaceInformation from '@components/place/new-place/place-information/PlaceInformation'
import PlaceImage from '@components/place/new-place/place-image/PlaceImage'
import PricePolicy from '@components/place/new-place/price-policy/PricePolicy'
import 'react-step-progress/dist/index.css'
import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { Steps, Button } from 'antd';
import axios from '@utils/axios'

const { Step } = Steps;

const CreatePlace = () => {
  const [isCompletePlaceInfo, setIsCompletePlaceInfo] = useState(false)
  const [isCompletePlaceImage, setIsCompletePlaceImage] = useState(false)
  const [isCompletePlacePolicy, setIsCompletePlacePolicy] = useState(false)
  const [placeInfo, setPlaceInfo] = useState({})
  const [placeImage, setPlaceImage] = useState({
    image: '',
    overviews_attributes: []
  })
  const [placePolicy, setPlacePolicy] = useState({})
  const toast = useToast()

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (placeImage.image !== '' && placeImage.overviews_attributes.length >= 8) {
      setIsCompletePlaceImage(true)
    }
  })

  const next = async () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (current === 0 && isCompletePlaceInfo) {
      setCurrent(1)
    } else if (current === 1 && isCompletePlaceInfo && isCompletePlaceImage) {
      setCurrent(2);
    } else if (current === 2 && isCompletePlaceInfo && isCompletePlaceImage && isCompletePlacePolicy) {
      const data = await axios({
        url: `/v1/place/new`,
        method: 'post',
        data: { ...placeInfo, ...placeImage, ...placePolicy }
      })
      console.log(data)
      return data
    } else {
      toast({
        title: 'Bạn cần điền đầy đủ thông tin',
        description: 'Vui lòng điền vào những trường yêu cầu',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    }
  };

  const prev = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: 'First',
      content: <PlaceInformation completeStep={setIsCompletePlaceInfo} syncData={setPlaceInfo} />
    },
    {
      title: 'Second',
      content: <PlaceImage completeStep={setIsCompletePlaceImage} syncData={setPlaceImage} />
    },
    {
      title: 'Last',
      content: <PricePolicy completeStep={setIsCompletePlacePolicy} syncData={setPlacePolicy} />
    },
  ];

  return (
    <Box>
      <Header />
      <Box maxW='80%' m='30px auto'>
        <Steps current={current} direction="horizontal">
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </Box>
    </Box>
  );
}

export default CreatePlace
