# Marton Paulo's Portfolio

![License](https://img.shields.io/github/license/martonpaulo/portfolio) ![Last Commit](https://img.shields.io/github/last-commit/martonpaulo/portfolio) ![React Version](https://img.shields.io/github/package-json/dependency-version/martonpaulo/portfolio/react) ![TypeScript Version](https://img.shields.io/github/package-json/dependency-version/martonpaulo/portfolio/dev/typescript) ![Test and Deploy Status](https://github.com/martonpaulo/portfolio/actions/workflows/deploy.yml/badge.svg)

Welcome to my portfolio hosted at [martonpaulo.com](https://www.martonpaulo.com). This website showcases my projects, skills, and professional journey. Built with modern technologies and optimized for performance, it reflects my passion for front-end development.

## 🌐 Tech Stack

- **Front-End**: React with TypeScript and Next.js for static site generation, styled with Bulma CSS, icons provided by Phosphor Icons, dynamic data fetching with React Query
- **Hosting**: GitHub Pages via domain provided by Hostinger at [martonpaulo.com](https://www.martonpaulo.com) with CI/CD pipeline on GitHub Actions
- **Back-End**: Directus headless CMS with a dockerized setup hosted on Railway at [directus.martonpaulo.com](https://directus.martonpaulo.com)
- **Database**: PostgreSQL hosted on AWS RDS
- **Media Management**: Cloudinary for storing and optimization
- **Analytics**: Google Analytics and Bitly for link tracking
- **Professional Email**: powered by Zoho Mail at [info@martonpaulo.com](mailto:info@martonpaulo.com) with custom domain

## 🚀 Setting Up the Environment

Follow these steps to set up the project locally:

```bash
# Clone the repository
git clone https://github.com/martonpaulo/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install
```

### Available Scripts

- `npm run dev`: start the development server at `http://localhost:3000`
- `npm run build`: build the project for production
- `npm run lint`: lint the codebase with ESLint

### Disclaimers

#### CORS Issues

To avoid CORS issues when running the project locally, you may need to use a browser extension that enables CORS. This is required because the backend is hosted on a different domain.

#### Websocket Connection Error

During local development, you may encounter a WebSocket error in the console. This is related to the Hot Module Replacement (HMR) feature in Next.js. It is not an issue in production, as HMR is only used during local development and does not affect static site generation. You can safely ignore this warning.

## 📋 To Do List

### Fixes

- [x] fix API data fetching errors
- [x] refactor hooks and remove warnings
- [x] resolve hydration errors
- [x] ~~Footer should be a dumb component~~
- [x] fix navbar for mobile devices
- [x] fix icon usage
- [x] address CORS issues
- [x] fix websocket connection error
- [x] fix alert message
- [ ] update AWS admin password
- [ ] rename the database
- [ ] fix all the projects

### Features and Improvements

- [x] integrate backend for dynamic data fetching
- [x] ~~add a language switcher for English, Spanish, and Portuguese~~
- [x] ~~add a blog or fetch posts from Medium and LinkedIn~~
- [x] ~~add light and dark mode switcher~~
- [x] add contact email
- [x] create a 404 error page
- [x] refactor project initial code
- [x] automatically reorder imports
- [x] create a Projects page
- [x] add a footer with social media links
- [x] integrate Google Analytics for all shared links
- [x] learn about Cloudnary for image optimization
- [x] add a logo to the navbar
- [x] add links order
- [x] add a resume download link
- [x] add Projects skeleton loader
- [x] understand "sort" field in Directus API
- [x] add pagination to the Projects page
- [ ] center image and open modal on project click
- [ ] improve the project design
- [ ] showcase projects on the homepage
- [ ] implement caching for API requests
- [ ] add tag filters to the Projects page
- [ ] implement URL redirects for live projects paths
- [ ] create a Mentors / References page
- [ ] add a Skills section with technology icons
- [ ] implement a work timeline
- [ ] improve SEO with metadata from Directus API and add sitemap
- [ ] integrate Cloudflare Analytics
- [ ] enhance the design with personal photos: at Mundolingo Argentina, radio in Argentina, Poliglotar presentation
- [ ] add Framer Motion animations
- [ ] validate SEO and accessibility with Lighthouse
- [ ] use getStaticProps or getServerSideProps in Next.js for dynamic data optimization
- [ ] add tests with Jest, React Testing Library and Cypress
- [ ] prefetch data with React Query
- [ ] CSP and HSTS security headers
- [ ] is it necessary to implement a cookie banner?
- [ ] check favicongenerator.net

## 🌟 Inspirations

The design and functionality of this portfolio were inspired by:

- [Duse Kenç](https://dusekenc.com/)
- [Martha Monk Tolosa](https://www.marthatoulouse.com/)
- [Tamal Sen](https://tamalsen.dev/)
- [Dewald Els](https://dewaldels.com/)
- [Yeabsira's Portfolio](https://yeabsiras-portfolio.vercel.app/)
- [Sean Halpin](https://www.seanhalpin.xyz/)
- [Ramma Heshwari](https://www.rammaheshwari.com/)
- [Matt Farley](https://mattfarley.ca/)
- [Frozen Hearth](https://frozenhearth.vercel.app/)

## 📝 References

The pagination algorithm used in this project is based on the implementation by Zac Fukuda. You can find more details about it [here](https://www.zacfukuda.com/blog/pagination-algorithm).

## 📄 License

This project is licensed under the MIT License. For details, see the [LICENSE](LICENSE) file.

---

Thank you for visiting! Feel free to explore or reach out via [info@martonpaulo.com](mailto:info@martonpaulo.com).
