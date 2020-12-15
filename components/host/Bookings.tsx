import { Table } from 'antd'
import axios from '@utils/axios'
import { useSession } from 'next-auth/client'
import { useEffect, useState } from 'react'
import { useToast, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { formatPrice } from 'utils'

const Bookings = () => {
  const router = useRouter()
  const toast = useToast()
  const [session, loading] = useSession()
  const [dataSource, setDataSource] = useState([])
  const initData = async (id) => {
    try {
      const { data } = await axios({
        url: `/v1/booking/host/${id}`,
        method: 'get',
      })
      const dataTemp = []
      data.forEach((item, index) => {
        dataTemp.push({
          id: item.id,
          key: index,
          placeName: item.place_name,
          price: `${formatPrice(item.price)}₫`,
          numOfPeople: item.num_of_people,
          startDate: item.start_date.split('T')[0],
          endDate: item.end_date.split('T')[0],
        })
      })
      setDataSource([])
      setDataSource(dataTemp)
    } catch (error) {
      console.log(error)
      toast({
        title: 'Có sự cố xảy ra',
        description: 'Vui lòng kiểm tra lại đường truyền mạng',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    }
  }

  useEffect(() => {
    if (!loading) {
      const { id } = session.full_info
      initData(id)
    }
  }, [loading])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên chỗ nghỉ',
      dataIndex: 'placeName',
      key: 'placeName',
    },
    {
      title: 'Số người',
      dataIndex: 'numOfPeople',
      key: 'numOfPeople',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Ngày đến',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'Ngày đi',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <Button colorScheme='orange' size='sm'>
          Xem
        </Button>
      ),
    },
  ]

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      onRow={(record) => ({
        onDoubleClick: () => {
          router.push(`/place/${record.id}`)
        }, // double click row
      })}
    />
  )
}

export default Bookings
