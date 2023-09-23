# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

# notes

in the cards in recomndations in mobile there is discounts on some cards but i can't find a discount % or has discount or not in the api
so i didn't implemnt it but the ui is there if you passe it

in the home page there is a Popular Car component but we have no way in the api to tell which cars are popular and the same thing for Recomendation Car

some of the images of cars coming from the api are reversed that should be fixed

the show more cars button on the home page doens't work because the api endpoint you provieded doens't not allow cors calls which means i can't fetch data from the client and fetch all data in the backend make the page load too slow as there 5 pages and it could grow with time

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
