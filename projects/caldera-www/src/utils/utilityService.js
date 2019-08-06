export const createOptimizedCloudinary = (url = '', params = '') => {
  // eslint-disable-next-line no-unused-vars
  const [_, id] = url.split('image/upload/')

  return `https://res.cloudinary.com/calderablog/image/upload/f_auto,fl_progressive,c_crop,q_auto:good,${params}/${id}`
}
