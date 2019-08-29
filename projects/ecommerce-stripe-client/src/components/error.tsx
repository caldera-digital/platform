import React, { FC } from 'react'

export const Error: FC<{ error?: any }> = ({ children, error }) => {
  if (error) console.error(error)

  return <p>{children || 'Something went wrong.'}</p>
}
