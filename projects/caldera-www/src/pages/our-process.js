import React from 'react'
import { Layout, SEO, Hero, Section } from '../components'
import styled, { css } from 'styled-components'
import { media } from '@caldera-digital/theme'
import { createOptimizedCloudinary } from '../utils/utilityService'

const CallOut = styled.div`
  border-left: 6px solid ${props => props.theme.secondaryColor};
  padding-left: 1rem;
`

const Image = styled.img`
  object-fit: contain;

  ${({ floatLeft }) =>
    floatLeft &&
    css`
      float: left;
    `}

  ${({ floatRight }) =>
    floatRight &&
    css`
      float: right;
    `}
`

const ProcessImage2 = styled(Image)``

const FinalProductSection = styled.div`
  display: flex;
  margin-top: 2.5rem;

  > img {
    width: 40%;
  }

  > div {
    width: 60%;
    padding-left: 6rem;
  }

  ${media.forSmallOnly`
    flex-direction: column;

    > img {
      width: 80%;
      max-width: 250px;
      display: block;
      margin: 0 auto;
    }

    > div {
      width: 100%;
      padding: 0;
    }

  `}
`

const OurProcess = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Join our Process" />
      <Hero
        secondary
        title="We Tackle Big Problems"
        secondaryText={() => (
          <span>
            We look at every project as an explosion of ideas- we move fast, we
            break things down, and the final product is something great that
            works <b>right</b>.
          </span>
        )}
        heroImgConfig={{
          src: createOptimizedCloudinary(
            'https://res.cloudinary.com/calderablog/image/upload/v1565065226/Image_45_2x_aoybmp.png',
          ),
          alt: 'Gamebyrd proof of concept',
        }}
      />
      <Section>
        <Section.H2>Discover</Section.H2>
        <p>
          <b>Step one:</b> we sit down with key stakeholders and current
          customers to discuss goals, learn more about the business, and talk
          about your current digital strategy. We then dive into any and all
          metrics, analytics, or other measurable information available to
          establish a baseline. Why, you might ask? Metrics allow us to create a
          digital strategy that will result in your desired outcomes.
        </p>
        <Section.Image
          src={createOptimizedCloudinary(
            'https://res.cloudinary.com/calderablog/image/upload/v1565065682/its-a-date-intro-mockup3_2x_prmqqs.png',
            'w_350,c_fit',
          )}
          alt="Welcome screen for Its a Date"
          floatRight
          phoneImage
          zoomable
        />
        <p>
          We know planning is not the most exciting part of development - plans
          change and timing can alter. However, to reach any measurable outcome,
          we need a detailed and vetted plan. This is why we are always looking
          to the future. Who will be your prospective users? What do their
          experience and tech needs look like down the road? The more we
          project, the better the final product will be.
        </p>
        <Section.H2>Design</Section.H2>
        <p>
          The discovery phase grants us two major pieces of information needed
          to start designing:
        </p>
        <CallOut>
          <p>
            <b>Buyer personas of an ideal customer.</b> This is a 360-degree
            view of a user that details what their pains are, how they interact
            with the internet, and even a short story about them (this part is
            fun)
          </p>
          <p>
            <b>A conversion funnel</b>: This shows how we intend to attract
            prospective customers and the steps we will take to bring them down
            the “funnel” to engage in conversation.
          </p>
        </CallOut>
        <p>
          Next, we illustrate the initial wireframe of a user's journey from a
          first-time visitor to a fully converted customer. Wireframes lead to
          mockups, either static or interactive depending on the complexity of
          the application we are developing. The last step of this process is to
          determine the features needed for a 1.0 launch. This mirrors the
          conversion flow and user-journey crafted via the wireframes.
        </p>
        <Section.H2>Development</Section.H2>
        <p>
          Development is a whirlwind. We move quickly and efficiently through
          this phase, with two-week iterations that help us develop features to
          mirror the customers’ journey. Key stakeholders are an invaluable
          resource, and we will ask them to fully interact in each iteration. We
          keep you involved in all projects through a continuous integration
          flow. This allows you to see live-rollouts and progress online as we
          complete features.
        </p>
        <Section.H2>Refinement</Section.H2>
        <p>
          Nothing is perfect the first time, and we'll refine until we get it
          right. Once the website is launched, we will begin to measure
          everything. There is normally a backlog of features to add to the
          application after the 1.0 launch, and we use analytics to determine
          the priority for completing each feature. At this point in the
          process, we are no longer guessing what a prospective user wants - we
          are using data and leaning on our insights from the design process to
          be precise in our next steps.
        </p>
        <p>
          Our primary focus for most clients starts with the website, but it is
          important to keep all other digital aspects in mind. Your website
          serves as the center of your digital strategy, and everything else you
          present online should be done to generate traffic to the website and
          lead customers through the conversion funnel.
        </p>

        <FinalProductSection>
          <ProcessImage2
            src={createOptimizedCloudinary(
              'https://res.cloudinary.com/calderablog/image/upload/v1565065481/pride-of-the-meadows-mockup3_2x_vtu3do.png',
            )}
            alt="Pride of the Meadows mockup"
          />
          <div>
            <Section.H2>A final product – for now</Section.H2>
            <p>
              While this process may come to an end, the project is often
              on-going. We ensure that we keep our clients involved in any
              future processes without added stress. Our goal is to give you a
              memorable experience with high-quality results. We are always here
              to analyze post-launch results, manage add-ons, and, of course,
              celebrate your success!
            </p>
          </div>
        </FinalProductSection>
      </Section>
    </Layout>
  )
}

export default OurProcess
