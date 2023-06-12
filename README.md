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
