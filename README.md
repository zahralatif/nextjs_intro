# Next.Js Intro

## CSR & SSR

- Performance
- SEO (Search Engine Optimization)
- UX - SPA (Single Page Application)

### CSR (client-side rendering)

- react, angular, vue
- routing between pages +
- The app feels more responsive and users do not see the flash between page navigations due to full-page refreshes.
- Fewer HTTP requests are made to the server, as the same assets do not have to be downloaded again for each page load.
- An application has a very complex UI with many pages/features
- An application has large and dynamic data
- Write preference of the site is more than reading
- The focus is on rich sites and a huge number of users

### SSR (server-side rendering)

- nextjs, php, nuxtjs
- The initial page of the website load is faster as there are fewer codes to render.
- Good for minimal and static sites.
- Search engines can crawl the site for better SEO.
- An application has a very simple UI with fewer pages/features
- An application has less dynamic data
- Read preference of the site is more than write
- The focus is not on rich sites and has few users
- 
## What Are The Differences Between Client-Side And Server-Side Rendering?

The main difference between these two rendering approaches is in the algorithms of their operation. CSR shows an empty page before loading, while SSR displays a fully-rendered HTML page on the first load.

### When To Use Server-Side Rendering

If you want to improve your Google visibility and rank high in the search engine results pages (SERPs), server-side rendering is the number one choice.

E-learning websites, online marketplaces, and applications with a straightforward user interface with fewer pages, features, and dynamic data all benefit from this type of rendering.

### When To Use Client-Side Rendering

Client-side rendering is usually paired with dynamic web apps like social networks or online messengers. This is because these apps’ information constantly changes and must deal with large and dynamic data to perform fast updates to meet user demand.

The focus here is on a rich site with many users, prioritizing the user experience over SEO.

### Which Is Better: Server-Side Or Client-Side Rendering?

If your site’s content doesn’t require much user interaction, then SSR is more effective. It positively influences accessibility, page load times, SEO, and social media support.

On the other hand, CSR is excellent for providing cost-effective rendering for web applications, and it’s easier to build and maintain

----------------------------------------------------------------------------------

# Next JS

### Installation

System Requirements:
- Node.js 18.17 or later.
- macOS, Windows (including WSL), and Linux are supported.
Automatic Installation
We recommend starting a new Next.js app using create-next-app, which sets up everything automatically for you. To create a project, run:

```
npx create-next-app
```

#### On installation, you'll see the following prompts:

```
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
```

### Run the Development Server

- Run `npm run dev` to start the development server.
- Visit ``http://localhost:3000`` to view your application.
- Edit `app/page.tsx` (or `pages/index.tsx`) file and save it to see the updated result in your browser.

### Next.js Project Structure

This page provides an overview of the project structure of a Next.js application. It covers top-level files and folders, configuration files, and routing conventions within the app and pages directories.

Click the file and folder names to learn more about each convention.

#### Top-level folders are used to organize your application's code and static assets.

![folder_structure](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Ftop-level-folders.png&w=1920&q=75)

- `app`	App Router
- `pages`	Pages Router
- `public`	Static assets to be served
- `src`	Optional application source folder

###### Top-level files are used to configure your application, manage dependencies, run middleware, integrate monitoring tools, and define environment variables.

- `next.config.js`	Configuration file for Next.js
- `package.json`	Project dependencies and scripts
- `instrumentation.ts`	OpenTelemetry and Instrumentation file
- `middleware.ts`	Next.js request middleware
- `.env`	Environment variables
- `.env.local`	Local environment variables
- `.env.production`	Production environment variables
- `.env.development`	Development environment variables
- `.eslintrc.json`	Configuration file for ESLint
- `.gitignore`	Git files and folders to ignore
- `next-env.d.ts`	TypeScript declaration file for Next.js
- `tsconfig.json`	Configuration file for TypeScript
- `jsconfig.json`	Configuration file for JavaScript

#### `app` Routing Conventions

- `layout` ---	`.js` `.jsx` `.tsx` ---	Layout
- `page` ---	`.js` `.jsx` `.tsx` ---	Page
- `loading` ---	`.js` `.jsx` `.tsx` ---	Loading UI
- `not-found` ---	`.js` `.jsx` `.tsx` ---	Not found UI
- `error` ---	`.js` `.jsx` `.tsx` ---	Error UI
- `global-error` ---	`.js` `.jsx` `.tsx` ---	Global error UI
- `route` ---	`.js` `.ts` ---	API endpoint
- `template` ---	`.js` `.jsx` `.tsx` ---	Re-rendered layout
- `default`	--- `.js` `.jsx` `.tsx` ---	Parallel route fallback page

##### Dynamic Routes

- `[folder]`	Dynamic route segment
- `[...folder]`	Catch-all route segment
- `[[...folder]]`	Optional catch-all route segment

#### `pages` Routing Conventions

##### Special Files
- `_app` ---	`.js` `.jsx` `.tsx` ---	Custom App
- `_document` ---	`.js` `.jsx` `.tsx` ---	Custom Document
- `_error` ---	`.js` `.jsx` `.tsx` ---	Custom Error Page
- `404` ---	`.js` `.jsx` `.tsx` ---	404 Error Page
- `500` ---	`.js` `.jsx` `.tsx` ---	500 Error Page
