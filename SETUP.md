# Connecting Sanity — setup guide

This site currently reads listings from `listings-data.js` (plain sample
data) so filtering and search work right now without any account setup.
When you're ready to add real listings yourselves, follow this once —
after that, adding a new listing is just filling in a form, no code.

## 1. Create a Sanity project (free)

1. Go to sanity.io and sign up (free tier is enough for this).
2. Run `npm create sanity@latest` on any computer with Node installed,
   or use the "create project" flow on sanity.io/manage.
3. When it asks, choose the **empty project** template.
4. Note down your **Project ID** and **dataset name** (usually `production`)
   — you'll need both below.

## 2. Add the schemas

Copy the two files from the `sanity/schemas/` folder in this delivery
(`property.js` and `sellerLead.js`) into your Sanity Studio project's
`schemaTypes` folder, and register them in `sanity.config.js`:

```js
import property from './schemas/property'
import sellerLead from './schemas/sellerLead'

export default defineConfig({
  // ...
  schema: {
    types: [property, sellerLead],
  },
})
```

Run `npm run dev` to open Studio locally, or `npx sanity deploy` to get
a hosted Studio URL you can bookmark and use from any browser — that's
the screen where new listings get added going forward.

## 3. Make the dataset public for reading

In sanity.io/manage → your project → API → the `production` dataset,
set it to **public**. This lets the website read listings without
needing a login (adding/editing still requires Studio access).

## 4. Point the website at your project

Open `listings-data.js` and replace the hardcoded array with:

```js
const PROJECT_ID = "your-project-id";   // from step 1
const DATASET = "production";

async function loadListings() {
  const query = encodeURIComponent(`*[_type == "property"] | order(_createdAt desc){
    "slug": slug.current, title, category, bhk, bathrooms, location,
    priceValue, priceLabel, status, description
  }`);
  const res = await fetch(`https://${PROJECT_ID}.api.sanity.io/v1/data/query/${DATASET}?query=${query}`);
  const { result } = await res.json();
  return result;
}
```

Then in `properties.html` and `index.html`, call `await loadListings()`
once on page load and use the result wherever `listings` is used now.

## 5. Wire up the Sell with us form (optional but recommended)

Right now the form on `sell.html` just shows a confirmation message —
it doesn't save anywhere. To actually store submissions as `sellerLead`
documents in Sanity, you need a small server-side step (a write token
should never sit in browser code, since anyone could use it to edit
your data). The simplest options:

- A free serverless function (Vercel/Netlify) that receives the form
  data and writes it to Sanity using `@sanity/client` with a write token.
- Or a form service like Formspree/Getform that emails you submissions
  — simpler to set up, no server code, but leads won't show up inside
  Studio next to your listings.

Happy to build either of these once you've picked one.

## Ongoing: adding a new listing

Once set up, the client's workflow is just:

1. Open the Studio link.
2. Click "Property Listing" → "Create new".
3. Fill in title, category, price, location, photos.
4. Publish.

It appears on the live site within seconds — no developer needed.
