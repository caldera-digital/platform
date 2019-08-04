import React from 'react'
import {
  Layout,
  SEO,
  Button,
  Input,
  Textarea,
  NetlifyForm,
} from '../components'
import styled from 'styled-components'
import { Container, media } from '@caldera-digital/theme'
import { navigateTo } from 'gatsby'
import { emailIsValid } from '../utils/formUtils'

export const ContactThankYouContainer = styled(Container)`
  margin: 5rem auto 6rem;
  min-height: calc(100vh - 11rem - ${props => props.theme.desktopHeaderHeight});

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  ${media.forSmallOnly`
    min-height: calc(100vh - 11rem);

    h1 {
      font-size: 2.5rem;
      padding-top: 2rem;
    }
  `}
`

const SubmitButton = styled(Button)`
  margin-top: 2rem;

  ${media.forSmallOnly`
    margin: 2rem auto 0;
  `}
`

const FORM_NAME = 'contact'
const ContactUs = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO />
      <ContactThankYouContainer>
        <h1>Contact Us</h1>
        <NetlifyForm
          initialValues={{
            name: '',
            email: '',
            phone: '',
            message: '',
          }}
          validationSchema={{
            name: val => !val && 'Name is required.',
            email: val =>
              (!val || !emailIsValid(val)) && 'Must be a valid email.',
            message: val => !val && 'Message is required.',
          }}
          onFormSubmit={() => navigateTo('/thank-you')}
          formName={FORM_NAME}
        >
          {({
            onChange,
            onBlur,
            isValid,
            handleSubmit,
            errors,
            values,
            touched,
          }) => (
            <form
              name={FORM_NAME}
              onSubmit={handleSubmit}
              method="post"
              data-netlify="true"
              data-netlify-honeypot="kittens"
            >
              <Input
                label="Name"
                name="name"
                error={touched.name && errors.name}
                onChange={onChange}
                onBlur={onBlur}
                value={values.name}
              />
              <Input
                hidden
                label="Kittens"
                name="kittens"
                error={'Merp'}
                onChange={onChange}
                onBlur={onBlur}
              />
              <Input
                label="Email"
                name="email"
                error={touched.email && errors.email}
                onChange={onChange}
                onBlur={onBlur}
                value={values.email}
              />
              <Input
                label="Phone"
                name="phone"
                optional
                onChange={onChange}
                onBlur={onBlur}
                value={values.phone}
              />
              <Textarea
                label="What can we help you with?"
                name="message"
                error={touched.message && errors.message}
                rows="3"
                onChange={onChange}
                onBlur={onBlur}
                value={values.message}
              />
              <SubmitButton disabled={!isValid}>Submit</SubmitButton>
            </form>
          )}
        </NetlifyForm>
      </ContactThankYouContainer>
    </Layout>
  )
}

export default ContactUs
