/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useEffect, useState } from 'react'
import { Box, FormControl, FormLabel, IconButton, Text, Flex, Spacer, Image, Button, Spinner } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { Upload, message } from 'antd'
import axios from 'axios'
import InfoBox from '../InfoBox'

const PlaceImage = ({ completeStep, syncData }: { completeStep: Function; syncData: Function }) => {
  const [uploadedOverviewImages, setUploadedOverviewImages] = useState<Array<string>>([])
  const [uploadedCoverImage, setUploadedCoverImage] = useState<string>('')
  const [overviewList, setOverviewList] = useState<Array<any>>([])
  const [coverList, setCoverList] = useState<Array<any>>([])
  const [isOverviewLoading, setIsOverviewLoading] = useState<boolean>(false)
  const [isCoverLoading, setIsCoverLoading] = useState<boolean>(false)

  useEffect(() => {
    if (uploadedCoverImage !== '' && uploadedOverviewImages.length >= 8) {
      completeStep(true)
    } else {
      completeStep(false)
    }
  }, [completeStep, syncData, uploadedCoverImage, uploadedOverviewImages])

  const updateData = () => {
    const overviewImages = []
    uploadedOverviewImages.forEach((image) => {
      overviewImages.push({ image })
    })
    syncData({
      image: uploadedCoverImage,
      overviews_attributes: overviewImages,
    })
  }
  const handleOverviewChange = (info) => {
    const fileListTemp = [...info.fileList]
    setOverviewList(fileListTemp)
  }

  const handleCoverChange = (info) => {
    const fileListTemp = [...info.fileList]
    setCoverList(fileListTemp)
  }

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('wrong_format')
    }
    const isLt3M = file.size / 1024 / 1024 < 3
    if (!isLt3M) {
      message.error('wrong_size')
    }
    return false
  }

  const uploadFile = async (signedRequest, file) => {
    try {
      await axios.put(signedRequest, file.originFileObj, {
        headers: {
          'Content-Type': file.type,
        },
      })
    } catch (error) {
      message.error('error')
    }
  }

  const pushOverviewImage = () => {
    setIsOverviewLoading(true)
    overviewList.forEach(async (file) => {
      const { data } = await axios.get(
        process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/sign-s3' : '/api/sign-s3',
        {
          params: {
            'file-name': file.name,
            'file-type': file.type,
          },
        }
      )
      const { signedRequest, url: avatarURL } = data
      await uploadFile(signedRequest, file)
      const urlImages = uploadedOverviewImages
      urlImages.push(avatarURL)
      setUploadedOverviewImages(urlImages)
      setOverviewList([])
      updateData()
    })
    setIsOverviewLoading(false)
  }

  const pushCoverImage = () => {
    setIsCoverLoading(true)
    coverList.forEach(async (file) => {
      const { data } = await axios.get(
        process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/sign-s3' : '/api/sign-s3',
        {
          params: {
            'file-name': file.name,
            'file-type': file.type,
          },
        }
      )
      const { signedRequest, url: avatarURL } = data
      await uploadFile(signedRequest, file)
      setUploadedCoverImage(avatarURL)
      setCoverList([])
      updateData()
    })
    setIsCoverLoading(false)
  }

  return (
    <Box mt={10}>
      <Flex>
        <Box border='1px' borderColor='gray.200' borderRadius='md' p={5} w='60%'>
          <Box borderBottomColor='gray.200' borderBottomWidth={1} mb={5} pb={3}>
            <Text fontSize='xl' fontWeight='bold'>
              Hình ảnh chỗ nghỉ
            </Text>
            <Text color='gray.500' fontSize='md'>
              Một vài tấm ảnh đẹp sẽ giúp khách hàng có nhiều thiện cảm hơn về chỗ nghỉ của bạn.
            </Text>
          </Box>
          <FormControl id='cover_image' isRequired mb={5}>
            <FormLabel>Ảnh bìa:</FormLabel>
            <Flex>
              <Image src={uploadedCoverImage} width='23%' mr={5} />
            </Flex>
            <Upload
              name='avatar'
              // action={uploadURL}
              accept='.png, .jpg, .jpeg'
              multiple={false}
              fileList={coverList}
              onChange={handleCoverChange}
              beforeUpload={beforeUpload}
              withCredentials>
              <IconButton colorScheme='orange' size='sm' mt={3} aria-label='Search database' icon={<AddIcon />} />
            </Upload>
            <Button colorScheme='orange' size='sm' mt={3} onClick={pushCoverImage}>
              {isCoverLoading ? <Spinner color='orange.500' /> : 'Save'}
            </Button>
          </FormControl>
          <FormControl id='overview_image' isRequired mb={5}>
            <FormLabel>Ảnh chỗ nghỉ:</FormLabel>
            <Flex flexWrap='wrap'>
              {uploadedOverviewImages.map((item, index) => (
                <Image src={item} width='21.5%' key={index} mr={5} mb={5} />
              ))}
            </Flex>
            <Upload
              name='avatar'
              // action={uploadURL}
              accept='.png, .jpg, .jpeg'
              multiple
              fileList={overviewList}
              onChange={handleOverviewChange}
              beforeUpload={beforeUpload}
              withCredentials>
              <IconButton colorScheme='orange' size='sm' mt={3} aria-label='Search database' icon={<AddIcon />} />
            </Upload>
            <Button colorScheme='orange' size='sm' mt={3} onClick={pushOverviewImage}>
              {isOverviewLoading ? <Spinner color='orange.500' /> : 'Save'}
            </Button>
          </FormControl>
        </Box>
        <Spacer />
        <Box w='35%'>
          <InfoBox
            title='Một vài gợi ý giúp ảnh chỗ nghỉ ghi điểm trong mắt khách hàng'
            content='Ảnh bìa là yếu tố gây ấn tượng đầu tiên của chỗ nghỉ với khách hàng. Ảnh bìa chỗ nghỉ nên là tấm ảnh có góc rộng, chụp được tổng quan chỗ nghỉ, màu sắc ảnh sáng và sắc nét.
            Hãy đảm bảo rằng 5 ảnh đầu tiên của chỗ nghỉ đều là ảnh ngang, đủ ánh sáng và thể hiện rõ nhất các ưu điểm tại chỗ nghỉ của bạn.'
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default PlaceImage
