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
          helped to craft a cohesive brand with a digital first strategy.
        </p>
      </Section>
      <Section smallPadding>
        <Section.H2>Creating a Message</Section.H2>
        <p>
          We’ve got a need for speed. Our design methodology for web
          applications focuses on getting a working prototype in the user’s
          hands as quickly as possible. This doesn’t mean cutting corners – it
          just means working efficiently. By receiving feedback from users early
          and often, we’re able to validate assumptions and adjust on the fly.
          For internal Caldera initiatives, we allot two weeks to create a
          working prototype - either an interactive mockup for more complex apps
          or a deployed alpha version for simpler ones.
        </p>
        <p>
          We start with the basics. By defining the overarching goal of the
          project and exploring the customer need, we are able to design around
          a defined value statement. There’s no need to make this complicated –
          that’s why we follow a template, similar to a modified business plan.
        </p>

        <Section.FancyTile>
          Local fruits and vegetables to your neighborhood grocery store in 72
          hours or less.
        </Section.FancyTile>
        <p>
          The details that followed – the name, the tagline, the logo, a visual
          style, typography, etc. – supported that message and the purpose this
          brand serves[MW1] . More simply put, we made it memorable, and we made
          it matter.
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
                answers to the questions we built out, it also opened doors to
                answers for questions we had not yet thought up. There were lots
                of moving parts, and this made our work flow – shown to the
                right – that much more dynamic.
              </p>
              <p>We came, we analyzed, we conquered.</p>
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
                    was vital to gain an understanding of the company’s vision
                    for the brand.
                  </Section.FancySteps.Step>
                  <Section.FancySteps.Step
                    step="2"
                    stepColor="rgba(132, 184, 151, .8)"
                  >
                    A list of potential names was put together during a series
                    of white boarding sessions.
                  </Section.FancySteps.Step>
                </Section.FancySteps.Group>
                <Section.FancySteps.Step
                  step="3"
                  stepColor="rgba(132, 184, 151, .8)"
                >
                  With three stellar name choices on the table, we turned to our
                  designers to work their magic. We opt to create logos with
                  each name option before user testing, because that is what
                  customers are accustomed to seeing.
                </Section.FancySteps.Step>
                <Section.FancySteps.Step
                  step="4"
                  stepColor="rgba(132, 184, 151, .8)"
                >
                  The logos were placed in a survey and sent out to users within
                  the area to gather data on consumer preferences. Showing all
                  of the logo ideas allows us to keep the survey short and
                  generate more responses. It’s not uncommon for our respondents
                  to say they prefer a logo with a different name. In fact, that
                  stress is often intentional, and we love getting that kind of
                  data to work through.
                </Section.FancySteps.Step>
                <Section.FancySteps.Step
                  step="5"
                  stepColor="rgba(132, 184, 151, .8)"
                  showArrow={false}
                >
                  At the end of this process, Pride of the Meadows felt the most
                  personal. It not only tested well, but also added a sense of
                  comfort to the brand. There’s something to be said for that.
                </Section.FancySteps.Step>
              </Section.FancySteps>
            </Section.Column>
          )
        }}
      />
      <Section smallPadding>
        <Section.H2>Print + Digital</Section.H2>
        <p>
          We’ll admit it – we’re perfectionists. That’s why consistency in
          design is the pillar of our creative structure. Delivering a
          consistent message regardless of channel is crucial. For this project,
          every element of the bag was designed with digital in mind. Components
          of the packaging were created in a way that could be mirrored online.
          From color choices, to the iconography, marrying the brand’s physical
          appearance and digital presence was a priority
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
                blogging craze, it’s that when food and the web are paired, they
                create exceedingly successful results. So, we capitalized on
                that. Drive traffic to the website through delicious recipes.
              </p>
              <p>
                With that in mind, we designed a mobile-first website for a
                variety of devices – and then we took it a step further. The
                Pride of the Meadows website employs some of the newest web
                technology available, turning the site into a Progressive Web
                App with an offline content strategy. No matter where the user
                is, they’ll have access to the recipes they’ve previously
                viewed.
              </p>
              <p>
                To maintain consistency in print and on the web, we chose
                GatsbyJS. This system uses React for its templating, so that
                creating re-usable components is a breeze. With the added
                benefit of being a statically generated site, we saw increased
                search friendliness of all recipes and pages within the site.
                Mission. Accomplished.
              </p>
            </Section.Column>
          )
        }}
      />
    </Layout>
  )
}

export default CaseStudy
