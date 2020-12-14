function DisplayPolicy(policy) {
  switch (policy) {
    case 'flexible':
      return 'Linh hoạt: Miễn phí hủy phòng trong vòng 48h sau khi đặt phòng thành công và trước 1 ngày so với thời gian check-in. Sau đó, hủy phòng trước 1 ngày so với thời gian check-in, được hoàn lại 100% tổng số tiền đã trả (trừ phí dịch vụ).'
    case 'normal':
      return 'Trung bình: Miễn phí hủy phòng trong vòng 48h sau khi đặt phòng thành công và trước 5 ngày so với thời gian check-in. Sau đó, hủy phòng trước 5 ngày so với thời gian check-in, được hoàn lại 100% tổng số tiền đã trả (trừ phí dịch vụ).'
    case 'strict':
      return 'Nghiêm ngặt: Hoàn lại 50% giá trị đặt phòng khi khách hàng huỷ phòng trong vòng 48h sau khi đặt phòng thành công và trước 14 ngày so với thời gian check-in. Sau đó, hủy phòng trước 14 ngày so với thời gian check-in, được hoàn lại 50% tổng số tiền đã trả (trừ phí dịch vụ).'
    default:
      return ''
  }
}

export { DisplayPolicy }
