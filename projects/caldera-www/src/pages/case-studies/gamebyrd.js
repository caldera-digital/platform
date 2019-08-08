import React from 'react'
import { Layout, SEO, Hero, Section } from '../../components'

import Blob1 from '../../assets/svgs/gamebyrd/red-blob1.svg'
import Blob3 from '../../assets/svgs/gamebyrd/red-blob2.svg'
import { createOptimizedCloudinary } from '../../utils/utilityService'

const CaseStudy = () => {
  return (
    <Layout>
      <SEO title="Design Methodology and Deadly Speed | Gamebyrd" />
      <Hero
        caseStudy
        title="Design Methodology and Deadly Speed"
        companyName="Gamebyrd"
        heroImgConfig={{
          src: createOptimizedCloudinary(
            'https://res.cloudinary.com/calderablog/image/upload/v1565064201/Image_45_2x_aoybmp.png',
          ),
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
        <Section.H2>Gamebyrd</Section.H2>
        <p>
          The swift transformation of the video-rental industry (R.I.P
          brick-and-mortar movie rental companies) left a void within the hearts
          of many gamers. As the market moved towards digital entertainment
          streaming, the ability to rent anything from new video games to
          childhood classics was lost.
        </p>
        <Section.BoldText>
          Enter Gamebyrd - an internal project with a simple concept: deliver
          games, consoles, and accessories to your door as quickly as a pizza.
        </Section.BoldText>
      </Section>
      <Section smallPadding>
        <Section.H2>Two Weeks to Create or Bust</Section.H2>
        <p>
          We’ve got a need for speed. Our design methodology for web
          applications focuses on getting a working prototype in the user’s
          hands as quickly as possible. This doesn’t mean cutting corners – it
          just means working efficiently. By receiving feedback from users early
          and often, we were able to validate assumptions and adjust on the fly.
          For internal Caldera initiatives, we allow two weeks to create a
          working prototype - either an interactive mockup for more complex apps
          or a deployed alpha version for simpler ones.
        </p>
        <p>
          We start with the basics. By defining the overarching goal of the
          project and exploring the customer need, we were able to design around
          a defined value statement. There was no need to make this complicated
          – this is why we followed a template, similar to a modified business
          plan.
        </p>
      </Section>
      <Section lightBackground>
        <Section.Image
          src={createOptimizedCloudinary(
            'https://res.cloudinary.com/calderablog/image/upload/v1565064201/Image_70_2x_ykahdj.png',
          )}
          alt="Gamebyrd's Home Page on Monitor"
          responsive
          zoomable
        />
      </Section>
      <Section>
        <Section.H2>Minimum Viable Product</Section.H2>
        <p>
          We think of a product as a collection of features that work together
          to solve a customer’s problem. It is all about needs vs. wants. What
          is important to know is what features are completely and totally
          necessary for the experience. In our process, each user journey is
          mapped out and features in the app are prioritized accordingly. For
          Gambyrd, we were confident that users would need to search, add items
          to a cart, give payment information, and receive notifications.
        </p>
        <p>
          All journey maps for minimum viable products are based on the
          end-user. Yes – we could have applied more dynamic processes like
          automating the order flow, automatically generating routes,
          programmatically contacting drivers to deliver games, etc. – but were
          those pertinent to the preliminary testing of the app? These are
          scenarios we had to think through. Without first validating that this
          idea was something the user would adopt, we risked spending time and
          money on things that might not matter. And so, the needs outweighed
          the wants.
        </p>
      </Section>
      <Section smallPadding>
        <Section.FancyTile>
          Speedy video game delivery to the doors of casual and avid gamers
          alike – we’ve got this.
        </Section.FancyTile>
      </Section>
      <Section
        noPadding
        fluid
        twoColumn
        renderColumnOne={() => {
          return (
            <Section.Column>
              <Section.Image
                src={createOptimizedCloudinary(
                  'https://res.cloudinary.com/calderablog/image/upload/v1565064201/gamebyrd-mockup2_2x_cxhvi8.png',
                )}
                alt="Gamebyrd's Order Success"
                responsive
                zoomable
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
              <Section.H2>Where it is Now</Section.H2>
              <p>
                Our end product was demoed to a cohort of roughly 25 people with
                mainly positive feedback. After moving through some personal
                demonstrations to prospective users, our team ultimately decided
                to cease development on the app. Between the logistical hurdles
                and new developments in the retro games space (looking at you
                NES classic), we decided it wasn’t a product to continue with
                into the future. But man, did our imaginations have fun with
                this one.
              </p>
            </Section.Column>
          )
        }}
      />
    </Layout>
  )
}

export default CaseStudy
