import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { encode, isEmpty } from '../utils/formUtils'
import { media } from '@caldera-digital/theme'

const COMMON_INPUT_STYLES = css`
  width: 100%;
  border: 3px solid ${props => props.theme.primaryColor};
  font-size: 1.5rem;
  padding: 5px;
`

export const StyledFormInput = styled.div`
  max-width: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  position: relative;

  label {
    color: ${props => props.theme.grayText};
    margin-bottom: 0.5rem;

    span {
      font-style: italic;
      font-size: 0.8rem;
    }
  }

  input {
    ${COMMON_INPUT_STYLES}
  }

  textarea {
    ${COMMON_INPUT_STYLES}
    resize: none;
  }

  ${({ fileUpload }) =>
    fileUpload &&
    css`
      input {
        border: none;
        font-size: 1rem;
      }
    `}

  ${({ showField }) =>
    !showField &&
    css`
      display: none;
    `}

  ${media.forSmallMediumOnly`
    width: 100%;
  `}
`

export const Error = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.9rem;
  color: ${props => props.theme.errorColor};
`

export const Input = ({
  label,
  name,
  error,
  showField = true,
  optional = false,
  onChange = () => null,
  onBlur = () => null,
  ...rest
}) => {
  return (
    <StyledFormInput showField={showField}>
      {label && (
        <label htmlFor={name}>
          {label} {optional && <span>- Optional</span>}
        </label>
      )}
      {error && <Error>{error}</Error>}
      <input
        type="text"
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
    </StyledFormInput>
  )
}

export const FileUpload = ({
  label,
  name,
  error,
  showField = true,
  optional = false,
  onChange = () => null,
  onBlur = () => null,
  ...rest
}) => {
  return (
    <StyledFormInput showField={showField} fileUpload>
      {label && (
        <label htmlFor={name}>
          {label} {optional && <span>- Optional</span>}
        </label>
      )}
      {error && <Error>{error}</Error>}
      <input
        type="file"
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
    </StyledFormInput>
  )
}

export const Textarea = ({
  label,
  name,
  error,
  showField = true,
  optional = false,
  onChange = () => null,
  onBlur = () => null,
  ...rest
}) => {
  return (
    <StyledFormInput showField={showField}>
      {label && (
        <label htmlFor={name}>
          {label} {optional && <span>- Optional</span>}
        </label>
      )}
      {error && <Error>{error}</Error>}
      <textarea
        type="text"
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
    </StyledFormInput>
  )
}

export const NetlifyForm = ({
  children,
  initialValues = {},
  validationSchema = {},
  onFormSubmit = () => null,
  formName,
}) => {
  const [values, setValues] = useState(initialValues)
  const [touched, setTouched] = useState(
    Object.keys(values).map(key => ({
      [key]: false,
    })),
  )

  const onChange = ({ target: { name, value } }) =>
    setValues({ ...values, ...{ [name]: value } })
  const onBlur = ({ target: { name } }) =>
    setTouched({ ...touched, ...{ [name]: true } })

  const formKeys = Object.keys(values)

  const errors = formKeys.reduce((accu, item) => {
    const validate = validationSchema[item]

    if (validate) {
      const error = validate(values[item])

      if (error) accu[item] = error
    }

    return accu
  }, {})
  const isValid = isEmpty(errors)

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': formName, ...values }),
    })
      .then(() => onFormSubmit())
      // eslint-disable-next-line no-alert
      .catch(error => alert(error))

    e.preventDefault()
  }

  return children({
    onChange,
    onBlur,
    isValid,
    handleSubmit,
    errors,
    values,
    touched,
  })
}
