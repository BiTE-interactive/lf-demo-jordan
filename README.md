# Livefront Demo React Project

This project is built using Next.js, incorporating styled-components for styling with support for custom dark and light themes. It includes global styles to maintain a consistent look and feel across the application. For testing, we utilize Jest to ensure our components and utilities function as expected. The function of the app is to provide a list of the top Startcraft 2 Ladder players for each region as well as a detailed profile page.

## Getting Started

To get the project up and running on your local machine, follow these instructions.

## Prerequisites

- Node.js >= 21 (LTS version recommended)
- npm
- .env file with client token and secret. Please contact either Jordan or Joe for a copy if you don't have one

## Installation

- Clone the repository
  `git clone git@github.com:BiTE-interactive/lf-demo-jordan.git`

- Install deps
  `npm install`

- Run the development server:
  `npm run dev`

- Open http://localhost:3000 with your browser to see the result.

## Server-Side Rendering (SSR) with Styled-Components

This project leverages styled-components for all CSS styling, allowing for theme-based designs and the ability to leverage props for dynamic styling. Efforts were made to combine styled-components with Next.js's server-side rendering (SSR) framework for performance and SEO considerations. It also ensures against Flash of Unstyled Content (FOUC).

## Themes

The application supports both a dark and a light theme, switchable via UI controls and persisting between sessions. Given the initial render is done server-side the theme defaults to the light theme.

## Global Styles

Global styles are defined in globalStyles.tsx and are applied at the application level to ensure consistency across all pages and components.

## Testing with Jest

Jest is set up for testing React components and custom utilities.

To run all tests:
`npm test`

To watch test files for changes:
`npm test:watch`

This will execute all tests and output the results, ensuring that components render correctly and functionalities meet expectations.
