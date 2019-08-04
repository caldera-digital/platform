import React from 'react'
import { Layout, SEO, Hero, Section } from '../../components'
// import styled from 'styled-components'

import HeroImage from '../../assets/images/its-a-date-hero.png'
import PhoneImage from '../../assets/images/its-a-date-welcome-flow.png'
import ScreenCollage from '../../assets/images/its-a-date-screen-collage.png'
import Blob1 from '../../assets/svgs/its-a-date/teal-blob1.svg'
import Blob3 from '../../assets/svgs/its-a-date/teal-blob2.svg'

const CaseStudy = () => {
  return (
    <Layout>
      <SEO />
      <Hero
        caseStudy
        title="Rapid Prototyping and Iterative Design"
        companyName="It's a Date"
        heroImgConfig={{
          src: HeroImage,
          alt: 'Phone showcasing Its a Date',
        }}
        blobs={[
          { blob: Blob1, position: 'topRight', size: 'medium' },
          {
            blob: Blob3,
            position: 'topLeft',
            size: 'medium',
            hideOnSmallMedium: true,
          },
        ]}
      />
      <Section smallPadding>
        <Section.H2>It's a Date</Section.H2>
        <Section.Image
          src={PhoneImage}
          alt="Welcome screen for Its a Date"
          floatRight
          phoneImage
        />
        <p>
          Online dating is flooded with mobile apps which focus on rapidly
          throwing potential matches into "yes" and "no" bins. It's impersonal,
          and prevents users from interacting with people they might've found
          real, romantic connection with given just a little bit more time.
        </p>
        <p>
          Many of the popular dating apps attract people with decidedly
          unromantic intentions. Shocking and uncomfortable bios and pickup
          lines, blunt propositions, racy pictures...you'll see it all when the
          other user has no skin in the game. Even when you find someone
          attractive and pleasant to talk to, what's their end goal? Just a chat
          buddy, or an actual romantic partner?
        </p>
      </Section>
      <Section lightBackground smallPadding>
        <Section.BoldText>
          It's a Date. It's a Date encourages human connection through shared
          experiences. We thoughtfully curate dates intended to make users more
          excited for their dates than nervous.
        </Section.BoldText>
      </Section>
      <Section smallPadding>
        <Section.H2>User Research and Idea Generation</Section.H2>
        <p>
          Our staff is comprised entirely of people within our target
          demographic. Young professionals [20-34] living in or near Washington
          D.C. We have used the big name dating apps in cities for years, at
          home and in cities across the country. A majority of our ideas came
          directly as responses to our own qualms with existing apps. Our own
          social circles aided early ideation and user research and made our
          eventual user testing sessions self-sustaining in terms of participant
          recruiting.
        </p>
      </Section>
      <Section
        noPadding
        lightBackground
        fluid
        twoColumn
        renderColumnOne={() => {
          return (
            <Section.Column>
              <Section.Image
                src={ScreenCollage}
                alt="Collage of Its a Date screens"
                responsive
                style={{ objectPosition: 'bottom' }}
              />
            </Section.Column>
          )
        }}
        renderColumnTwo={() => {
          return (
            <Section.Column
              fluidGuard
              style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
            >
              <Section.H2>Development</Section.H2>
              <p>
                Frontend: React Native with Expo and Styled Components. We love
                using this stack for mobile apps because it gives us the ability
                to get started on creating quickly and it doesn't create
                guardrails for the design team. They are able to create the
                exact experience that people are asking for, without worrying
                about views no being technically feasible or taking an
                unrealistic amount of time. Styled components feels right at
                home in React Native allowing us to compose complex themes with
                custom React components in perfect harmony.
              </p>
              <p>
                Backend: Node, Express, Typescript, Firebase Cloud Firestore,
                and Google Cloud Platform. There's not a backend stack out there
                that allows you to create real time applications faster. We were
                able to create our messaging feature one day! However, that
                speed comes at the cost of requiring in depth domain expertise
                to the interworkings of Firebase and the Google Cloud Platform.
                Flexibility you take for granted in more traditional
                environments like scheduling, backups, integration testing, and
                other operations take a bit more effort to implement.
              </p>
              <p>
                Dev ops: We created three environments: Development, Staging,
                and Production. Development served as a playground for new
                features and allowed our development team to try certain
                features on phones before letting our design and functional team
                touch it in staging. Once features from Staging were tested and
                verified, we would deploy from our continuous integration to
                production.
              </p>
            </Section.Column>
          )
        }}
      />
      <Section smallPadding>
        <Section.H2>Testing</Section.H2>
        <p>For all apps, we implement three levels of testing:</p>
        <Section.OrderedList>
          <Section.ListItem>
            <b>Programmatic testing:</b> This involves taking the business rules
            established and writing tests in the code to make sure there were no
            errors. It was crucial to make sure things worked as expected,
            especially on the backend, because potential errors like users
            getting matched up to the wrong gender or someones messages going to
            the wrong recipient would not be good. On top of tests writing for
            the logic of the application we wrote the entire backend in
            Typescript to help us harden the code against any potential defects.
          </Section.ListItem>
          <Section.ListItem>
            <b>UI Testing:</b> All of the team members assisted in running
            through the app and scanning for potential defects in our Staging
            environment before deploying new code to Production.
          </Section.ListItem>
          <Section.ListItem>
            <b>Focus Group Testing:</b> Immediately after launch, we offered
            It's a Date to a user testing group of 20 participants. Users were
            simply instructed to move through the main event flow with specific
            aid only offered when requested. Points of approval, disapproval,
            and suggestion were all noted by category; then ranked by urgency
            for continued development.{' '}
          </Section.ListItem>
        </Section.OrderedList>
      </Section>
      <Section smallPadding>
        <Section.H2>Launch</Section.H2>
        <p>
          After flow improvements and other design tweaks were implemented, It's
          a Date was ready for submission to incubators, accelerators, and other
          funding sources.
        </p>
        <p>
          Branding became a core focus and the specific voice of It's a Date
          emerged across press materials and internal app copy. Writing shifted
          from a solely copywriter perspective to include internal insights the
          from developers and other technical staff.
        </p>
        <Section.ResponsiveVideo style={{ margin: '2rem 0' }}>
          <iframe
            src="https://player.vimeo.com/video/311800634"
            title="launchVideo"
            width="853"
            height="505"
            frameBorder="0"
            allowFullScreen
          />
        </Section.ResponsiveVideo>

        <p>
          Our social media efforts across Facebook and Twitter averaged #####
          and ##### monthly impressions on average. #####% of ad viewers were
          converted to download It's a Date. Social ambassadors were recruited
          through our user testing sessions, which aided us in our initial user
          base growth. Brand ambassadors naturally fell in our target
          demographic due to our testing session selection parameters.
        </p>
        <p>
          Facebook ad service usage for dating apps requires an application and
          several achievements, the greatest challenge of which was accruing a
          large enough user base to be deemed legitimate. A large goal of the
          social media campaign was to actively gain followers to eventually
          convert for downloads to get the ball rolling.
        </p>
      </Section>
    </Layout>
  )
}

export default CaseStudy
