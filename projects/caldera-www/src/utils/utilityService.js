export const createOptimizedCloudinary = (url = '', params = '') => {
  // eslint-disable-next-line no-unused-vars
  const [_, id] = url.split('image/upload/')

  return `https://res.cloudinary.com/calderablog/image/upload/fl_progressive,c_crop,q_auto:good,${params}/${id}`
}
