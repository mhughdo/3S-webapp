function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidDate(date: Date) {
  return date && Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date)
}

export { isValidEmail, isValidDate }
