export const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const isEmpty = obj => {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) return false
  }

  return true
}
