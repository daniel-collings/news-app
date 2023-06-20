# News App

The intention behind this repo is to demostrate a variety of web development skills including calling internal and external APIs.

The core technologies involved in app development are:
- Next.js v13.4
- React Query v4.29
- React v18
- TailwindCSS v3.3
- TypeScript v5.1

In addition there are supporting dependencies to encourage best practice for development, notably:
- ESlint v8.42
- ESlint JSX A11y plugin v6.7

## Getting Started
### Local Development
- `git clone https://github.com/daniel-collings/news-app.git`
- `cd news-app`
- `npm install`
- `npm run dev`

### Project URL
- [News App](https://cf-news-app.netlify.app/)
## Notes
- The app calls a third party API to collect external news data source. I have used [Newscatcher](https://newscatcherapi.com/) as [News API](https://newsapi.org/) was down with an internal server error.
  - Limitation, newscatcher only allows upto 50 API calls per month. I have developed a local development work around which involves returning a local json file.
- Styling has been intentionally left basic and this repo is more about the functionality and responsiveness (UX) than the UI style.
- TODO: The news article slug could be slugified to use is title for further development.
- TODO: Debounce search to reduce re-renders.
- TODO: Testing is not covered in this app development at this stage. I will reach for RTL with Vitest to test the component behaviours. For integration testing I would use Cypress.
- TODO: Optimise for SEO.


## Considerations
- Client rendering (CSR): Currently the app uses client-side rendering, this ensure the latest data is always presented the user. This is important for a News app.
- Pre-rendering (SSG/ISR): Although, utilising incremental static regeneration will increase performance (improve first-paint and time-to-interaction) and improved SEO. The slight drawback is of some users may be exposed to stale data, until the `next` `revalidate` prop has been trigger.
- API routes: Currently the app exposes an API layer which could be utilised to provide an aggerated news service to others. If this isn't wanted, then its recommended to either protect the routes or remove the `/api/` dir. Also, I realised recently I could remove `/api/article/` and place a `/[slug]/` dir within `/api/news`. 
- Metadata: Next.js 13 introduced `metadata` which could be exported within the `/app` dir in `page.tsx` or `layout.tsx`, this will improve SEO and the apps professional appearance. In addition, Next.js also introduced `generateMetadata` which enables the developers to fine tune the metadata on a page/[slug] by [slug] basis.
- Testing to improve resilience: As the app makes use of a third party service, I would test that I am handling the possible returns such as: 2XX, 3XX, 4XX, 5XX status codes.
- Improve slug: Introduce a slugify function rather than using an id of the article. My concern with this is that there could be multiple articles with the same 'title'.
- Custom fetcher: Create an instance of fetch or axios to set the configuration in one place to make the code more robust and DRY.
