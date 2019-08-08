import React from 'react'
import { Layout, SEO, Hero, Section } from '../../components'

import Blob1 from '../../assets/svgs/pride-of-the-meadows/green-blob3.svg'
import BlobX from '../../assets/svgs/pride-of-the-meadows/green-blob1.svg'
import Blob3 from '../../assets/svgs/pride-of-the-meadows/green-blob2.svg'
import { createOptimizedCloudinary } from '../../utils/utilityService'

const COMPANY_COLOR = '#B6D2AC'
const CaseStudy = () => {
  return (
    <Layout>
      <SEO title="Creating a Digital First Brand | Pride of the Meadows" />
      <Hero
        caseStudy
        title="Creating a Digital First Brand"
        companyName="Pride of the Meadows"
        companyColor={COMPANY_COLOR}
        companyWebsite="https://www.prideofthemeadows.com/"
        heroImgConfig={{
          src: createOptimizedCloudinary(
            'https://res.cloudinary.com/calderablog/image/upload/v1565064208/Image_68_2x_flau11.png',
          ),
          alt: 'Phone showcasing Its a Date',
        }}
        smallHeroImage
        blobs={[
          { blob: Blob1, position: 'topRight', size: 'medium' },
          {
            blob: Blob3,
            position: 'bottomLeft',
            size: 'medium',
            hideOnSmallMedium: true,
          },
        ]}
      />
      <Section smallPadding>
        <Section.H2>Pride of the Meadows</Section.H2>
        <p>
          A transformation in consumer preferences has increased the demand for
          fresh, local produce in a big way. Wholesalers and grocers alike are
          having to adapt to meet this new market of local growers. During this
          change, we met Wood’s Produce, a family-owned regional wholesaler, and
          helped to craft a cohesive brand with a digital-first strategy.
        </p>
      </Section>
      <Section smallPadding>
        <Section.H2>Creating a Message</Section.H2>
        <p>
          From the start, we wanted to create a brand consistent with the
          heritage of the company. Through interviews with employees of the
          company and surveying current customers we created Pride of the
          Meadows. The parent company,
          <a href="https://woodsproduce.com/">Wood's Produce</a>, has a rich
          history of growing crops in the small town of Meadows of Dan, VA.
          Creating a brand that pairs the rich history of the company with a
          popular design patterns was a perfect match.
        </p>
        <p>
          Next, we created a message to build the brand around. We boiled down
          the value proposition of the brand into one sentence.
        </p>

        <Section.FancyTile>
          Local fruits and vegetables to your neighborhood grocery store in 72
          hours or less.
        </Section.FancyTile>
        <p>
          The details that followed – the logo, visual style, typography, etc. –
          supported the message and purpose this brand served. More simply put,
          we made it <b>memorable</b> and we made it <b>matter</b>.
        </p>
      </Section>
      <Section lightBackground>
        <Section.Image
          src={createOptimizedCloudinary(
            'https://res.cloudinary.com/calderablog/image/upload/v1565064190/Image_55_2x_gp2mkt.png',
          )}
          alt="Collage of Its a Date screens"
          responsive
          style={{ objectPosition: 'bottom' }}
          zoomable
        />
      </Section>
      <Section
        smallPadding
        twoColumn
        blobs={[
          {
            blob: BlobX,
            position: 'bottomLeft',
            size: 'small',
            hideOnSmallMedium: true,
          },
        ]}
        renderColumnOne={() => {
          return (
            <Section.Column>
              <Section.H2>Research</Section.H2>
              <p>
                The information gathered throughout this process was vital to
                the success of the brand. Not only did the research provide
                answers to the questions we built out, but it also opened doors
                to answers for questions we had not yet thought up. There were
                lots of moving parts, and this made our workflow – shown to the
                right – that much more dynamic.
              </p>
              <p>We came, we analyzed, and we conquered.</p>
            </Section.Column>
          )
        }}
        renderColumnTwo={() => {
          return (
            <Section.Column>
              <Section.FancySteps>
                <Section.FancySteps.Group>
                  <Section.FancySteps.Step
                    step="1"
                    stepColor="rgba(132, 184, 151, .8)"
                    arrowDirection="right"
                  >
                    To start, we conducted interviews with stakeholders. This
                    was vital in order to gain an understanding of the company's
                    vision for the brand.
                  </Section.FancySteps.Step>
                  <Section.FancySteps.Step
                    step="2"
                    stepColor="rgba(132, 184, 151, .8)"
                  >
                    We put together a list of potential names during a series of
                    white-boarding sessions.
                  </Section.FancySteps.Step>
                </Section.FancySteps.Group>
                <Section.FancySteps.Step
                  step="3"
                  stepColor="rgba(132, 184, 151, .8)"
                >
                  With three stellar name choices on the table, we turned to our
                  designers to work their magic. We decided to create logos with
                  each name option before user testing so we could provide all
                  logo options for the testing.
                </Section.FancySteps.Step>
                <Section.FancySteps.Step
                  step="4"
                  stepColor="rgba(132, 184, 151, .8)"
                >
                  The logos were sent out to users via a survey within the area
                  to gather data on consumer preferences. Showing all of the
                  logo ideas allowed us to keep the survey short and generate
                  more responses. It is not uncommon for our respondents to say
                  they prefer a logo with a different name. In fact, that stress
                  is often intentional, and we love getting that type of data to
                  work through.
                </Section.FancySteps.Step>
                <Section.FancySteps.Step
                  step="5"
                  stepColor="rgba(132, 184, 151, .8)"
                  showArrow={false}
                >
                  At the end of this process, Pride of the Meadows felt the most
                  personal. It not only tested well but also added a sense of
                  comfort to the brand. There is something to be said about
                  that.
                </Section.FancySteps.Step>
              </Section.FancySteps>
            </Section.Column>
          )
        }}
      />
      <Section smallPadding>
        <Section.H2>Print + Digital</Section.H2>
        <p>
          We admit it – we are perfectionists. That is why consistency in design
          is the pillar of our creative structure. Delivering a consistent
          message regardless of the channel is crucial. For this project, every
          element in the bag was designed with digital marketing in mind.
          Components of the packaging were created in a way that could be
          mirrored online. From color choice, to iconography, to marrying the
          brand’s physical appearance and digital presence- this was all a
          priority.
        </p>
        <Section.FancyTile>
          <Section.Image
            src={createOptimizedCloudinary(
              'https://res.cloudinary.com/calderablog/image/upload/v1565064190/Screen_Shot_2019-03-02_at_7.06.55_PM_2x_kjbyka.png',
            )}
            alt="Pride of the Meadows Jalapeno Peppers"
            responsive
            zoomable
          />
        </Section.FancyTile>
      </Section>
      <Section
        smallPadding
        twoColumn
        renderColumnOne={() => {
          return (
            <Section.Column>
              <Section.Image
                src={createOptimizedCloudinary(
                  'https://res.cloudinary.com/calderablog/image/upload/v1565064191/pride-of-the-meadows-mockup3_2x_vtu3do.png',
                )}
                alt="Pride of the Meadows Products"
                responsive
                zoomable
              />
            </Section.Column>
          )
        }}
        renderColumnTwo={() => {
          return (
            <Section.Column>
              <Section.H2>Tech</Section.H2>
              <p>
                If we have learned anything from the internet age and the
                blogging craze, it is that when food and the web are paired,
                they create exceedingly successful results. We decided to
                capitalize on this by driving traffic to the website through
                delicious recipes.
              </p>
              <p>
                With that in mind, we designed a mobile-first website for a
                variety of devices – and then we took it a step further. ‘The
                Pride of the Meadows’ website employs some of the newest web
                technology available, turning the site into a Progressive Web
                App with an offline content strategy. No matter where the user
                is, they have access to the recipes they have previously viewed.
              </p>
              <p>
                To maintain consistency in print and on the web, we chose
                GatsbyJS. This system uses React for its templating so that
                creating reusable components is a breeze. With the added benefit
                of being a statically generated site, we saw increased search
                friendliness of all recipes and pages within the site. Mission
                accomplished.
              </p>
            </Section.Column>
          )
        }}
      />
    </Layout>
  )
}

export default CaseStudy
