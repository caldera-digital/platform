import React from 'react'
import {
  Layout,
  SEO,
  Hero,
  Section,
  NetlifyForm,
  Input,
  Textarea,
  Button,
  FileUpload,
} from '../components'
import styled from 'styled-components'
import { media } from '@caldera-digital/theme'
import { navigateTo } from 'gatsby'
import { emailIsValid } from '../utils/formUtils'

const PowerText = styled.p`
  color: ${props => props.theme.primaryColor};
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin: 0;

  ${media.forSmallMediumOnly`
    font-size: 2.25rem;
  `}

  ${media.forSmallOnly`
    font-size: 1.75rem;
  `}
`

const StyledCareersForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

const FORM_NAME = 'job-applicants'
const CareersForm = () => {
  return (
    <NetlifyForm
      initialValues={{
        name: '',
        email: '',
        message: '',
        resume: '',
      }}
      validationSchema={{
        name: val => !val && 'Name is required.',
        email: val => (!val || !emailIsValid(val)) && 'Must be a valid email.',
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
        <StyledCareersForm
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
            showField={false}
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
          <Textarea
            label="What can we help you with?"
            name="message"
            optional
            rows="3"
            onChange={onChange}
            onBlur={onBlur}
            value={values.message}
          />
          <FileUpload
            label="Resume"
            name="resume"
            optional
            onChange={onChange}
          />
          <Button disabled={!isValid}>Submit</Button>
        </StyledCareersForm>
      )}
    </NetlifyForm>
  )
}

const JoinOurTeam = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Join our Team" />
      <Hero
        secondary
        title="Join our Team"
        secondaryText="We’re different than your standard agency. We’re more of a collective – complete with enough business-talk to keep you motivated, enough diversity to keep you intrigued and enough ingenuity to keep you on your toes."
      />

      <Section lightBackground sectionContainerStyle={{ marginBottom: '3rem' }}>
        <PowerText>
          Want to get involved? All of our roles are 100% remote and give you
          access to our Slack group (operating on constant gif entertainment!).
        </PowerText>
      </Section>

      <Section>
        <Section.H2>Join the Collective</Section.H2>
        <p>
          We’re group of people with a particular set of skills that come
          together to craft great outcomes. All of our employees are
          contractors, and many folks have their own freelance gigs on the side.
          This creates a unique dynamic – giving both personal goals and shared
          goals some time in the limelight. We work to bring you opportunities
          to engage with challenging projects and to open you up to a network of
          talented people.
        </p>
        <p>
          Our projects consist of anything and everything within the digital
          landscape. Our tasks are constantly evolving, so we’re always looking
          for coders, copywriters, visual designers, musicians, social media
          gurus, user experience experts, photographers, bloggers, chefs,
          videographers and everything in-between (SEO bots do your thang). If
          you have a skill that can be tailored to the internet - we want to
          hear from you.
        </p>

        <Section.H2>Mentorship Program</Section.H2>
        <p>
          Calling all college students, recent graduates, and people looking to
          change their careers! Our mentorship program gives you the chance to
          work as a contractor and try your hand in the freelance landscape.
          There’s no job description for this role because it’s dependent on YOU
          and what YOU want to learn. This is paid, 100% remote and has flexible
          hours. Pretty sweet, right?
        </p>
        <p>
          To apply, send us an idea of how YOU think we can improve Caldera. For
          example…
        </p>

        <Section.UnorderedList>
          <Section.ListItem>
            Improving the code of this website (it’s open source)
          </Section.ListItem>
          <Section.ListItem>
            Rewriting a social media post to foster higher engagement
          </Section.ListItem>
          <Section.ListItem>
            Share an interesting article or case study with us and how you would
            implement it for a client
          </Section.ListItem>
          <Section.ListItem> Submit a post to be on our blog</Section.ListItem>
        </Section.UnorderedList>

        <em>
          Want to do something that will take a lot of time? Reach out to us
          first and we'll compensate you for it.
        </em>
      </Section>
      <Section>
        <PowerText>
          Or if you think your resume or website is{' '}
          <span role="img" aria-label="fire">
            🔥🔥
          </span>
          , just send it our way. We’re excited to hear from you!
        </PowerText>
        <CareersForm />
      </Section>
    </Layout>
  )
}

export default JoinOurTeam
