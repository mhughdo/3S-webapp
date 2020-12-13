import { Box } from '@chakra-ui/react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import StepProgressBar from 'react-step-progress'
import PlaceInformation from '@components/place/new-place/place-information/PlaceInformation'
import PlaceImage from '@components/place/new-place/place-image/PlaceImage'
import PricePolicy from '@components/place/new-place/price-policy/PricePolicy'
import 'react-step-progress/dist/index.css'
import { useState } from 'react'

const CreatePlace = () => {
  const [isShowPlaceImage, setIsShowPlaceImage] = useState(false)
  const [isShowPlacePolicy, setIsShowPlacePolicy] = useState(false)
  const step1Validator = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return isShowPlaceImage
  }
  const step2Validator = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return isShowPlacePolicy
  }
  const step3Validator = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return isShowPlacePolicy
  }
  const onFormSubmit = () => {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }

  return (
    <Box>
      <Header />
      <Box py={3}>
        <StepProgressBar
          startingStep={0}
          onSubmit={onFormSubmit}
          primaryBtnClass='primaryBtnClass'
          secondaryBtnClass='secondaryBtnClass'
          nextBtnName='Tiếp theo'
          previousBtnName='Quay lại'
          buttonWrapperClass='buttonWrapperClass'
          steps={[
            {
              label: 'Thông tin chỗ nghỉ',
              name: 'place information',
              content: <PlaceInformation showNextStep={setIsShowPlaceImage} />,
              validator: step1Validator,
            },
            {
              label: 'Hình ảnh chỗ nghỉ',
              name: 'place image',
              content: <PlaceImage />,
              validator: step2Validator,
            },
            {
              label: 'Giá và quy định nhận chỗ',
              name: 'price and policy',
              content: <PricePolicy />,
              validator: step3Validator,
            },
          ]}
        />
      </Box>
    </Box>
  )
}

export default CreatePlace
