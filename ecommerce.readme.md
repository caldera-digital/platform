## Getting Started

The ecommerce app is located inside of the monorepo. Once you bootstrap the repo (instructions in readme.md), all you need to do is run `yarn ecommerce:dev:client`. Once it's running you'll need to refresh the page and you're good to go!

It's also hosted if you would rather try it that way: [https://gamebyrdstripe.netlify.com/login](https://gamebyrdstripe.netlify.com/login). They both use the same Cloud Firestore instance currently so you can poke around at data locally that you made on the hosted version.

## Ecommerce Stripe Sample App

The swift transformation of the video-rental industry (R.I.P brick-and-mortar movie rental companies) left a void within the hearts of many gamers. As the market moved towards digital entertainment streaming, the ability to rent anything from new video games to childhood classics was lost. Gamebyrd is an online platform that re-imagines what that experience looks like in the sharing economy by delivering games to users in two hours or less.

Users can select the console, games, and number of controllers before creating an order. Once the order is placed, we send that to a "Byrd" that picks the game up from a nearby shipping container and delivers it to their door. Users can keep the game long as they want until dropping it off at local dropbox. To make this dream a reality, Stripe is a crucial part of the process by handling payments, coupons, and refunds.

The best way to evaluate market fit for a product is to get it out there quickly to get feedback from users and find product/market fit. To do that we lean on technology that helps us deploy faster.

Frontend: React (CRA), Typescript, React Stripe Elements, Styled Components, Ant Design,
Backend: Cloud Firestore, Cloud Functions, Stripe, and Typescript
Infrastructure: Firebase Auth, and Netlify
Dev: Monorepo with Lerna, Eslint, Prettier, Commitizen, React Cosmos

The stack above gives us the flexibility to iterate quickly while giving us just enough type safety and linting to feel comfortable we're not going to break everything during a pivot. I gravitate towards React for the client because I believe it's the best library for making fluid UIs. For the backend, Firebase is a great platform to prove out an MVP, and you can count on it scaling if demand spikes. The stack above has treated me well for multiple applications without breaking the bank.

A more robust instance of this app would have multiple layers. The demo is only the customer facing side, but in production it would also have a contractor dashboard that pays out people for successful deliveries. That would utilize Stripe Connect Payouts most likely to ease up the burden of generating 1099s and managing the transactions.

Technically, there are various levels that need to be built out for this to be a production grade app.

1. Better test coverage. My preference is abstracting any business logic out of components and services into small helpers that can be tested in isolations. Additionally, utilizing a library like Cypress to end to end test the most important flows of the app like check.
2. Tracking. Any revenue generating app should have a log tracking system like Sentry or LogRocket to give piece of mind and diagnose hard to find issues. An example of an issue it finds that you wouldn't test for is social media webviews. They're hard to debug, and sometimes don't support ES6 methods you would take for granted. This way you get to see what you should polyfill.
3. Continuous Integration. There needs to be multiple environments and tests/linting on each PR against the repository. I have been gravitating towards CircleCi to handle this.
4. Analytics. Being able to track how your application is doing is imperative to the success of the product. I really enjoy using Segment for this because you only have to set analytics events once in the app. From there, you can put it in a data warehouse and send it to any tool the marketing team is using.
