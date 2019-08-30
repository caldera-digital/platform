## Getting Started

The ecommerce app is located inside of the monorepo. Once you bootstrap the repo (instructions in [`README.md`](./README.md)), all you need to do is run `yarn ecommerce:dev:client`. Refresh the page after the development server is up, and you're good to go!

It's also hosted if you would rather try it that way: [https://gamebyrdstripe.netlify.com/login](https://gamebyrdstripe.netlify.com/login). They both use the same Cloud Firestore instance so you can poke at the data locally without spinning up a local DB. You can use any email and password to login.

## Ecommerce Stripe Sample App (Gamebyrd)

The swift transformation of the video-rental industry (R.I.P brick-and-mortar movie rental companies) left a void within the hearts of many gamers. As the market moved towards digital entertainment streaming, the ability to rent anything from new video games to childhood classics was lost. Gamebyrd is an online platform that re-imagines what that experience looks like in the sharing economy by delivering games to users in two hours or less.

Users can select the console, games, and number of controllers before creating an order (only games for the demo). Once the order is placed, we notify a "Byrd" that picks up the order from a nearby shipping container and delivers it to their door. Users can keep the game long as they want until dropping it off at a local dropbox. To make this dream a reality, Stripe is a crucial part of the process by handling payments, coupons, and refunds.

The best way to evaluate market fit for a product is to get it out there quickly to get feedback from users. To do that we lean on technology that helps us deploy faster.

**Frontend**: React (CRA), Typescript, React Stripe Elements, Styled Components, Ant Design
**Backend**: Cloud Firestore, Cloud Functions, Stripe, and Typescript
**Infrastructure**: Firebase Auth, and Netlify
**Dev**: Monorepo with Lerna, Eslint, Prettier, Commitizen, React Cosmos

The stack above gives us the flexibility to iterate quickly while giving us just enough type safety and linting to feel comfortable we're not going to break everything during a pivot. I gravitate towards React for the client because I believe it's the best library for creating fluid UIs. For the backend, Firebase is a great platform to prove out an MVP - especially if demand spikes. The stack above has treated me well for multiple applications without breaking the bank.

A more robust instance of this app would have multiple layers. The demo is only the customer facing side, but in production it would also have a contractor dashboard that pays out people for successful deliveries. That would utilize Stripe Connect Payouts to ease up the burden of generating 1099s and managing the transactions.

Technically, there are various levels that need to be built out for this to be a production grade app:

1. Better test coverage and component composition. My preference is abstracting all business logic out of components and services into small helpers that can be tested in isolation. Additionally, utilizing a library like Cypress to end to end test the most important flows of the app.
2. Tracking. Any revenue generating app should have a tracking system like Sentry or LogRocket to give piece of mind and diagnose hard to find issues. An example of an issue it finds that you wouldn't test for is social media webviews. They're hard to debug, and sometimes don't support new JS APIs you take for granted.
3. Continuous Integration. There needs to be multiple environments and tests/linting on each PR against the repository. I gravitate toward CircleCI for this.
4. Analytics. Being able to track how your application is doing is imperative to the success of the product. I really enjoy using Segment for this because you only have to set analytic events once in the app. From there, you can put it in a data warehouse and send it to any tool the marketing team is using.

## Stripe Implementation

The Stripe Payment implementation uses React Stripe Elements, Stripe's NodeJS Library, and Google Cloud Functions.

1. When a user logs into the app, a subscription is created between Cloud Firestore and the Client.
2. Adding items to the user's cart (stored as a subdocument on the user document) causes a re-render and updates the cart view.
3. By clicking `Checkout`, a modal appears that uses React Stripe Elements to render a form to be submitted to Stripe.
4. When a user inputs their information and clicks submit, a request is sent to Stripe with the credit card information.
5. Upon success, Gamebyrd takes the tokenized card information and saves it in a `payments` subcollection on the logged in user.
6. A Cloud Function listens to that subcollection and fires when a new document is added.
7. When fired, the Cloud Function uses context to request the user document.
8. It checks that there are items in the user's cart and calculates the `amount` based on the prices of the products in the cart.
9. An `idempotency_key` is attached to the request just in case something fails in flight to avoid duplicative transactions.
10. Upon success, the Stripe response is added to the the respective `payments` subcollection document, the cart is cleared, and the Firebase payment document `id` is added to a `purchases` subdocument along with all of the items in the cart.
11. Updating the user document triggers a `useEffect` in the app that confirms the ID created in `Step 5` exists in the `purchases` subdocument.
12. The user is redirected to the thank you page and shown the Firebase transaction ID along with the items the user purchased.

> NOTE: The direction states the transaction ID. I wasn't sure if you wanted the `ID` that Stripe gives you or the `ID` of the document I store all of the information on. I chose the Firebase ID so I could easily reference the entire response object if needed. I can update it no problem.
