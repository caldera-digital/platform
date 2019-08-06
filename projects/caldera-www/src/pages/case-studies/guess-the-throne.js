import React from 'react'
import { Layout, SEO, Hero, Section } from '../../components'
import { createOptimizedCloudinary } from '../../utils/utilityService'

import Blob1 from '../../assets/svgs/guess-the-throne/dark-blue-blob3.svg'
import Blob3 from '../../assets/svgs/guess-the-throne/dark-blue-blob2.svg'

const COMPANY_COLOR = 'rgba(87, 115, 155, .8)'
const CaseStudy = () => {
  return (
    <Layout>
      <SEO title="Creating a Scalable Infrastructure in One Week | Guess the Throne" />
      <Hero
        caseStudy
        smallHeroImage
        title="Creating a Scalable Infrastructure in One Week"
        companyName="Guess the Throne"
        companyColor={COMPANY_COLOR}
        companyWebsite="https://guessthethrone.com/"
        heroImgConfig={{
          src: createOptimizedCloudinary(
            'https://res.cloudinary.com/calderablog/image/upload/v1565066031/guess-the-throne-mockup-web_st6rbk.png',
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
        <Section.H2>Guess the Throne</Section.H2>
        <Section.Image
          src={createOptimizedCloudinary(
            'https://res.cloudinary.com/calderablog/image/upload/v1565065682/its-a-date-intro-mockup3_2x_prmqqs.png',
            'w_350,c_fit',
          )}
          alt="Welcome screen for Its a Date"
          floatRight
          phoneImage
        />
        <p>
          The team at Caldera is wild about Game of Thrones, so naturally, we
          wanted to get involved in a death pool for the final season. A death
          pool is similar to a March Madness bracket: you select who of the
          major characters in a show will live, and who will die. One point is
          awarded for each correct guess at the end of the season. Potential
          point totals are updated after each round (episode), and he or she
          with the most points at the end of the season wins.
        </p>
        <p>
          However, after scouring the internet, we could not find one Death Pool
          which suited our needs.
        </p>
        <p>So we made one.</p>
        <Section.UnorderedList>
          <Section.ListItem>
            The ability to create a group for friends to submit entries to and
            compete in
          </Section.ListItem>
          <Section.ListItem>
            A simple live/die option to simplify submissions and ensure
            participation
          </Section.ListItem>
          <Section.ListItem>
            An automatic scoring algorithm to keep things easy and fair
          </Section.ListItem>
        </Section.UnorderedList>
        <p>
          The shower thought which prompted this endeavor occurred only one
          month before the premiere of the season, so time was tight. We wanted
          to get a functioning product in the hands of fans as early as
          possible. An early design surfaced after two days, and a functioning
          code base in three.
        </p>
      </Section>
      <Section lightBackground smallPadding>
        <Section.H2>Minimum Viable Product</Section.H2>
        <p>
          The faster our product was up and public, the more time we would have
          to bring users on board. We wrote a list of the minimum functionality
          required to launch the site:
        </p>
        <Section.UnorderedList>
          <Section.ListItem>Secure Login</Section.ListItem>
          <Section.ListItem>Group Creation or Joining</Section.ListItem>
          <Section.ListItem>Death Pool Creation & Submission</Section.ListItem>
          <Section.ListItem>
            The ability to share with friends over social media
          </Section.ListItem>
        </Section.UnorderedList>
        <p>
          Nothing else was designed or developed for the 1.0 launch. There was
          no scoring engine and no way to edit entries. We handled support
          requests via email to get a sense of user needs and built additional
          features when they were significantly requested. This cut our runway
          from initial design to official launch to only <b>one week</b>.
        </p>
      </Section>
      <Section smallPadding>
        <Section.H2>Infrastructure</Section.H2>
        <p>
          Initial research and gut instinct indicated this idea had the
          potential to go global, so we chose a tech stack that could scale with
          us through rapid growth: Firebase and Netlify. Firebase allowed us to
          avoid the creation of a complex, scalable infrastructure and let us
          focus on building the app. For application deployment we chose Netlify
          for their global CDN and blazing-fast performance.
        </p>
        <Section.H2>Tech Stack</Section.H2>
        <p>
          The quicker we built the app, the more people could join in. We
          utilized React, Styled Components, Jest, and Node to rocket our way to
          a launchable 1.0.
        </p>
      </Section>
      <Section lightBackgroundMiddleBar>
        <Section.ImageCollage
          images={[
            {
              src: createOptimizedCloudinary(
                'https://res.cloudinary.com/calderablog/image/upload/v1565066329/GTT-mockup-14_2x_vuc3ec.png',
              ),
              alt: 'Guess the Throne login page',
            },
            {
              src: createOptimizedCloudinary(
                'https://res.cloudinary.com/calderablog/image/upload/v1565066427/GTT-mockup-13_2x_uvmogf.png',
              ),
              alt: 'Guess the Throne stats',
            },
            {
              src: createOptimizedCloudinary(
                'https://res.cloudinary.com/calderablog/image/upload/v1565066262/GTT-mockup-12_2x_kxlpwt.png',
              ),
              alt: 'Guess the Throne stats',
            },
            {
              src: createOptimizedCloudinary(
                'https://res.cloudinary.com/calderablog/image/upload/v1565066223/GTT-mockup-11_2x_oe7lbp.png',
              ),
              alt: 'Guess the Throne stats',
            },
          ]}
        />
      </Section>
      <Section smallPadding>
        <Section.H2>Marketing</Section.H2>
        <p>
          Passion projects such as this allow us to try unconventional marketing
          techniques for potential use with future clients. We opted this time
          to hit the ground hard and fast with a budget of only $150. The cost
          for social ads, and other forms of marketing have increased
          drastically over the year and we decided that virally engaging with
          the loud, global GoT fan base would be our best chance.
        </p>
        <Section.Image
          src={createOptimizedCloudinary(
            'https://res.cloudinary.com/calderablog/image/upload/v1565066296/GTT-mockup-10_2x_etuapv.png',
          )}
          alt="Guess the Throne Podcast Web"
          floatRight
          medium
        />
        <p>
          We tried to exhaust all avenues of free and earned media before
          dipping into our limited budget. We figured ProductHunt.com, a
          community meeting place for makers and coders, could help us launch to
          an appreciative and well-connected audience. We ran a campaign to rank
          among the top five products of our selected launch day, which would've
          won Guess The Throne a spot on their international newsletter. Despite
          converting over 1,200 people to signing up, we finished in eighth
          place, with a greater admiration for the site and tech entrepreneurs
          everywhere.
        </p>
        <p>
          Eventually, we decided to try our hand at influencer marketing. Just
          about no one is interested in promoting your project for free, so
          after trying for a while we paid to broadcast a tailored tweet to over
          500k Game of Thrones fans. We had over 80 people on our site within
          minutes and converted over 250 people in a span of two hours. The cost
          per acquisition was <b>$0.20</b>. Influencer marketing seemed to be
          the proper move.
        </p>
        <p>
          We also managed to wrangle the team at Barstool Sports. After a
          careful exchange, we managed to bring the entire GoT-watching Barstool
          Sports staff on board along with thousands of their fans. Barstool ran
          a podcast breakdown of GoT throughout the season which referenced
          Guess The Throne every week. A lot of effort went into Twitter
          messaging, but we eventually struck gold.
        </p>
        <Section.Image
          src={createOptimizedCloudinary(
            'https://res.cloudinary.com/calderablog/image/upload/v1565066044/guess-the-throne-global-impact_bsahve.png',
          )}
          alt="Guess the Throne Global Impact"
          floatLeft
          small
        />
        <p>
          We tried a number of angles on Fiverr.com, a network of internet doers
          who will complete a given task for...around $5! Radio ads, mass
          tweets, paid bot interaction with our page, and global press releases
          were all relatively ineffective. Some, like the press releases, even
          caused sketchy, malware-infected sites to publish us, which probably
          even hurt our SEO. Marketing money is better spent elsewhere, like on
          influencer marketing.
        </p>
        <p>
          We relied on social listening tactics throughout the campaign. Queries
          for "death pool", "Game of Thrones", "GoT", and clever combinations of
          more specific keywords yielded excited fans who would go on to act as
          ambassadors of the site. For free.
        </p>
        <p>
          We also wrote publications on Medium.com, Hackernoon.com, and others
          for free. Drafts of each were out the door in under two hours, and
          their community moderators published us to large, interested
          communities after brief review processes.
        </p>
        <p>
          We cannot overstate the importance of interactivity, and of
          *personality*. You need to be everywhere someone could search for your
          product and be available to answer their questions promptly. To offer
          them solutions to questions they haven’t asked. However, there is a
          fine line between attentive and spammy, so learning which demographics
          and communities were skeptical of business shills was a valuable
          experience.
        </p>
        <p>
          All in all, we experienced massive growth in only three weeks of
          promotion, for a grand total of <b>$130.58</b>.
        </p>
      </Section>
      <Section
        twoColumn
        lightBackground
        renderColumnOne={() => {
          return (
            <Section.Column>
              <Section.Image
                src={createOptimizedCloudinary(
                  'https://res.cloudinary.com/calderablog/image/upload/v1565064136/GTT-mockup2_2x_qlfxlz.png',
                )}
                alt="Guess the Throne Google Analytics"
                responsive
              />
            </Section.Column>
          )
        }}
        renderColumnTwo={() => {
          return (
            <Section.Column>
              <Section.H2>Results</Section.H2>
              <p>
                We amassed over 500 users within 72 hours of launch. That
                momentum grew like a snowball rolling down hill until the minute
                the show premiered. We received over 1,300 page views per minute
                in the minutes before the first episode, and closed submissions
                with over 44,000 signed up users. Our infrastructure scaled with
                us beautifully, and we successfully avoided any loss of service
                due to our fans' frenzy.
              </p>
            </Section.Column>
          )
        }}
      />
      <Section>
        <Section.H2>Where it is Now</Section.H2>
        <p>
          There were two stages in the life cycle of Guess The Throne. Before
          the premier, and after. Beforehand, the primary goal was to reach new
          markets to bring on fans and create groups. After the premier, it was
          all about stoking the fire with social media interaction and live
          updated scoreboards for our groups. We also provided in depth
          analytics of our community's selections, against both each other and
          the posted Vegas odds (you really can bet on anything in Vegas).
        </p>
        <p>
          GuessTheThrone.com was not created to make money. However, a
          reasonable effort to make our user base aware of the personal expenses
          incurred seemed morally just. We also figured we could do some more
          good by splitting donations to our site 50/50 with Emilia Clarke's (of
          Game of Thrones fame) Same You Foundation for youths' recovery from
          brain injury and stroke. We only would accept a cut until our costs
          were met, then all proceeds would funnel to the foundation.
        </p>
        <p>
          We decided to include a subtle tab on our site which directed users to
          the donation page, which included a heartfelt thank you from us at
          Caldera and information on the Same You Foundation.
        </p>
        <p>What a ride.</p>
      </Section>
    </Layout>
  )
}

export default CaseStudy
