# Harmonic Strings

**Gateway to Better Sound**

A modern React storefront and product catalog for **Harmonic Strings**, serving musicians in the North Alabama area since 2002.

Harmonic Strings is being developed as a polished, responsive web experience for string musicians, students, teachers, performers, families, and collectors. The site is designed to present instruments and related products with detailed photography, organized specifications, educational content, personal service options, and an eventual full e-commerce backend.

> **Project Status:** Active frontend development.  
> The public-facing website and product catalog are being completed before backend, account, cart, search, newsletter, and commerce functionality are implemented.

---

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Development Strategy](#development-strategy)
- [Project Structure](#project-structure)
- [Frontend Architecture](#frontend-architecture)
- [Navigation Architecture](#navigation-architecture)
- [Collection Pages](#collection-pages)
- [Product Cards](#product-cards)
- [Product Detail Architecture](#product-detail-architecture)
- [Instrument Architecture](#instrument-architecture)
- [Bow Architecture](#bow-architecture)
- [Case Architecture](#case-architecture)
- [Accessory Architecture](#accessory-architecture)
- [Strings](#strings)
- [Product Data](#product-data)
- [Product Pricing](#product-pricing)
- [Product Availability](#product-availability)
- [Product Photography](#product-photography)
- [Fullscreen Product Viewer](#fullscreen-product-viewer)
- [Services](#services)
- [Learning Resources](#learning-resources)
- [Video Library](#video-library)
- [Responsive Design](#responsive-design)
- [Planned Backend](#planned-backend)
- [Future Product Data Architecture](#future-product-data-architecture)
- [Hosting and Deployment](#hosting-and-deployment)
- [Local Development](#local-development)
- [Production Build](#production-build)
- [Git Workflow](#git-workflow)
- [Environment and Security](#environment-and-security)
- [Design Principles](#design-principles)
- [Adding Products](#adding-products)
- [Development Roadmap](#development-roadmap)
- [Current Project Status](#current-project-status)

---

# Overview

The Harmonic Strings website is being built as a React single-page application using Vite.

The frontend is centered around:

- Responsive storefront navigation
- Product collection pages
- Reusable product cards
- Detailed product pages
- High-resolution product photography
- Fullscreen image viewing
- Specialized product showcase components
- Services and educational content
- Responsive desktop, tablet, and mobile layouts
- Future e-commerce functionality

The current storefront is designed around the needs of a specialty string-instrument business rather than a generic online catalog.

Products and content can include:

- Violins
- Violas
- Cellos
- Bows
- Cases
- Strings
- Rosin
- Shoulder rests
- Mutes
- Chinrests
- Music stands
- Instrument-care products
- Study materials
- Additional musician accessories

The long-term application will also support customer accounts, persistent shopping carts, product search, newsletter subscriptions, and additional commerce functionality.

---

# Technology Stack

The current frontend uses:

- **React**
- **Vite**
- **React Router**
- **JavaScript**
- **JSX**
- **CSS**
- **Lucide React**
- **Git**
- **GitHub**

Backend technologies have intentionally **not yet been finalized**.

The backend stack will be selected after the frontend and product architecture are substantially complete.

---

# Development Strategy

Harmonic Strings is being developed **frontend first**.

This is intentional.

The current development priority is to complete:

1. Site structure
2. Navigation
3. Responsive layouts
4. Product collections
5. Product-detail experiences
6. Product photography
7. Services
8. Educational content
9. Video content
10. Supporting informational pages

Only after the frontend is complete will the project move into backend development.

This prevents backend decisions from forcing unnecessary changes to unfinished frontend architecture.

The intended progression is:

```text
Frontend
    ↓
Product Catalog
    ↓
Services / Learning / Videos
    ↓
Backend Architecture
    ↓
Accounts / Cart / Search / Newsletter
    ↓
Commerce
    ↓
Production Deployment
```

---

# Project Structure

The project follows a component, page, data, asset, and style-based organization.

```text
harmonic-strings/
│
├── public/
│   │
│   └── videos/
│       └── hero.mp4
│
├── src/
│   │
│   ├── assets/
│   │   ├── product photography
│   │   ├── Harmonic Strings branding
│   │   ├── instrument images
│   │   ├── bow images
│   │   ├── case images
│   │   └── accessory images
│   │
│   ├── components/
│   │   ├── AccessoryShowcase.jsx
│   │   ├── BowShowcase.jsx
│   │   ├── CaseShowcase.jsx
│   │   ├── CelloShowcase.jsx
│   │   ├── FeaturedCollection.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── InstrumentShowcase.jsx
│   │   ├── IntroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ViolaShowcase.jsx
│   │   └── ViolinShowcase.jsx
│   │
│   ├── data/
│   │   ├── accessories.js
│   │   ├── bows.js
│   │   ├── cases.js
│   │   ├── cellos.js
│   │   ├── violas.js
│   │   └── violins.js
│   │
│   ├── pages/
│   │   ├── collection pages
│   │   ├── product-detail pages
│   │   └── supporting pages
│   │
│   ├── styles/
│   │   ├── product-detail.css
│   │   ├── product-detail-viewer.css
│   │   └── additional shared and page styles
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

The structure is intentionally kept straightforward so that future backend integration can be added without unnecessarily reorganizing completed frontend work.

---

# Frontend Architecture

The storefront is divided into several major UI layers:

```text
Navbar
   │
   ├── Store Navigation
   ├── Services / Learning
   ├── Search Interface
   ├── Account Interface
   └── Cart Interface

Page Content
   │
   ├── Homepage
   ├── Collection Pages
   ├── Product Detail Pages
   ├── Services
   ├── Learning Resources
   └── Videos

Footer
   │
   ├── Newsletter
   ├── Store Navigation
   ├── Services
   ├── Customer Care
   └── Company Information
```

The frontend separates presentation from product data wherever practical.

---

# Navigation Architecture

The Harmonic Strings navigation is designed around several major areas.

## Instruments

```text
Violins
Violas
Cellos
```

Each instrument family can be divided into:

```text
Beginner
Intermediate
Advanced
Fine & Antique
```

---

## Bows

Bows are organized by instrument and material.

```text
Violin Bows
    ├── Wood
    └── Carbon Fiber

Viola Bows
    ├── Wood
    └── Carbon Fiber

Cello Bows
    ├── Wood
    └── Carbon Fiber
```

---

## Cases

Case navigation supports instrument-specific case categories.

Examples include:

```text
Violin Cases
Viola Cases
Cello Cases
```

with individual case styles organized within those sections.

---

## Strings

The navigation architecture reserves space for:

```text
Violin Strings
Viola Strings
Cello Strings
Double Bass Strings
```

String families may eventually support individual sets and individual strings.

---

## Accessories

Accessory navigation includes instrument-specific and general musician accessories.

Examples include:

```text
Violin Accessories
Viola Accessories
Cello Accessories
Other Accessories
Study Materials
```

Potential accessory types include:

```text
Rosin
Shoulder Rests
Mutes
Chinrests
Endpin Accessories
Wolf Eliminators
Music Stands
Stand Accessories
Stand Lights
Instrument Care Products
Study Books
Etudes
Technique Materials
Teacher Resources
```

---

## Services & Videos

The navigation architecture also reserves a dedicated area for:

```text
Services
Learn
About
```

This section will grow as the informational side of the website is completed.

---

# Collection Pages

Major product categories use dedicated collection pages.

Current and planned routes include structures such as:

```text
/violins
/violas
/cellos
/bows
/cases
/accessories
```

Collection pages generally contain:

1. Category hero
2. Introduction
3. Category navigation
4. Product sections
5. Product grids
6. Shared product cards

---

## Hash Navigation

Collections use hash-based navigation where useful.

Examples:

```text
/violins#beginner
/violins#intermediate
/violins#advanced
/violins#fine-antique
```

Bow examples:

```text
/bows#wood-violin
/bows#carbon-violin
/bows#wood-viola
/bows#carbon-viola
/bows#wood-cello
/bows#carbon-cello
```

Accessory examples:

```text
/accessories#violin-accessories
/accessories#viola-accessories
/accessories#cello-accessories
/accessories#other-accessories
/accessories#study-materials
```

This system allows customers to navigate directly to a collection subsection and allows product-detail pages to return users to the appropriate category.

---

# Product Cards

Product listings use the reusable:

```text
src/components/ProductCard.jsx
```

The same card system can display different product families while maintaining a unified storefront appearance.

Product cards support:

- Product image
- Product name
- Player level or category
- Product type
- Description
- Standard price
- Regular price
- Sale price
- Savings
- Product-detail link
- Product-specific image stage

Example:

```jsx
<ProductCard
  image={product.image}
  name={product.name}
  level={product.level}
  price={product.price}
  regularPrice={product.regularPrice}
  salePrice={product.salePrice}
  savings={product.savings}
  description={
    product.shortDescription ||
    product.description
  }
  href={`/violins/${product.slug}`}
  viewLabel="View Instrument"
  productType="Violin"
  stage={product.stage}
/>
```

Different image stages can be used so products remain visually clear against suitable backgrounds.

---

# Product Detail Architecture

Product-detail pages use a shared visual philosophy but specialized components.

The architecture intentionally avoids forcing every product type into a single universal component.

```text
ViolinShowcase ─┐
ViolaShowcase  ─┼── InstrumentShowcase.jsx
CelloShowcase  ─┘

Bow Detail ───────── BowShowcase.jsx

Case Detail ──────── CaseShowcase.jsx

Accessory Detail ─── AccessoryShowcase.jsx
```

This provides consistency without creating excessive product-type conditionals.

---

# Instrument Architecture

Violins, violas, and cellos use:

```text
InstrumentShowcase.jsx
```

Wrapper components include:

```text
ViolinShowcase.jsx
ViolaShowcase.jsx
CelloShowcase.jsx
```

This means violin, viola, and cello products share the same structural experience while retaining independent product datasets.

---

## Instrument Details

The **Details** tab can contain:

### Description

A concise introduction to the instrument.

### Instrument Overview

Possible rows include:

- Instrument
- Available Size
- Player Level
- Ideal For

### Craftsmanship

Possible rows include:

- Construction
- Handwork

### Tone & Playability

A dedicated section can describe:

- Response
- Projection
- Tonal balance
- Warmth
- Clarity
- Playing character

Only verified information should be displayed.

---

## Instrument Specifications

The **Specifications** tab can include:

- Top
- Back & Sides
- Finish
- Fittings
- Strings
- Setup
- Year
- Model Inspiration
- Condition
- Condition Notes

Unknown fields remain hidden.

For example:

```js
strings: null,
setup: null,
year: null,
condition: null,
```

No placeholder specification should be invented merely to fill the page.

---

# Bow Architecture

Bows use:

```text
BowShowcase.jsx
```

Bows remain separate from `InstrumentShowcase.jsx` because bow construction and performance terminology differs from instrument terminology.

Bow detail information may include:

### Bow Overview

- Instrument
- Material
- Player Level
- Ideal For

### Handling & Response

When verified information is available, this section can describe:

- Balance
- Response
- Articulation
- Flexibility
- Stability
- Control
- Playing character

### Specifications

Possible bow specifications include:

- Stick
- Frog
- Mounting
- Thumb Grip
- Inlays
- Tip
- Hair
- Weight
- Length
- Setup

---

## Bow Photography

Bow products can support specialized image views such as:

```text
Full Bow
Frog & Tip
```

This allows relevant details to be shown without forcing bow photography into an instrument front/back format.

---

# Case Architecture

Cases use:

```text
CaseShowcase.jsx
```

Cases remain independent because their information model differs substantially from instruments and bows.

Potential case information includes:

- Compatible instrument
- Case style
- Exterior construction
- Interior construction
- Suspension
- Hardware
- Storage
- Bow holders
- Accessory compartments
- Handles
- Straps
- Weight
- Dimensions
- Protection features

Case components can share the Harmonic Strings detail-page styling while maintaining case-specific content.

---

# Accessory Architecture

Accessories use:

```text
AccessoryShowcase.jsx
```

The accessory architecture is intentionally more flexible than the instrument, bow, and case architectures.

An accessory may be:

- A music stand
- Rosin
- A shoulder rest
- A mute
- A humidifier
- A chinrest
- An endpin accessory
- A wolf eliminator
- A stand light
- A care product
- A study book
- Another musician accessory

These products do not share one universal specification schema.

For that reason, accessory products can use flexible specification rows.

Example:

```js
specifications: [
  {
    label: "Construction",
    value: "..."
  },
  {
    label: "Height Range",
    value: "..."
  },
  {
    label: "Weight",
    value: "..."
  },
],
```

A shoulder rest could instead use:

```js
specifications: [
  {
    label: "Compatible Instrument",
    value: "Violin"
  },
  {
    label: "Compatible Sizes",
    value: "..."
  },
  {
    label: "Adjustment",
    value: "..."
  },
],
```

Rosin could use:

```js
specifications: [
  {
    label: "Rosin Type",
    value: "..."
  },
  {
    label: "Compatible Instruments",
    value: "..."
  },
  {
    label: "Formula",
    value: "..."
  },
],
```

A music stand could use:

```js
specifications: [
  {
    label: "Construction",
    value: "..."
  },
  {
    label: "Desk Dimensions",
    value: "..."
  },
  {
    label: "Height Range",
    value: "..."
  },
  {
    label: "Base",
    value: "..."
  },
],
```

This approach allows very different accessory products to share one professional detail-page layout without creating irrelevant empty fields.

---

# Strings

The navigation architecture includes string categories for:

- Violin
- Viola
- Cello
- Double Bass

Possible future string categories include:

- Complete string sets
- Individual strings
- Brand collections
- Instrument-specific recommendations

The full strings collection architecture has not yet been completed.

Strings should be integrated after the current instrument, bow, case, and accessory frontend systems are established.

---

# Product Data

Current product data is stored under:

```text
src/data/
```

Current data modules include:

```text
violins.js
violas.js
cellos.js
bows.js
cases.js
accessories.js
```

This separates product content from React UI components.

---

## Example Instrument Record

```js
{
  id: "product-id",
  slug: "product-slug",

  name: "Product Name",
  maker: "Maker",
  model: "Model",
  instrument: "Violin",
  level: "Intermediate",
  stage: "instrument",

  image: productImage,
  frontImage: frontImage,
  backImage: backImage,
  combinedImage: combinedImage,

  price: null,
  regularPrice: "$1,295.00",
  salePrice: "$995.00",
  savings: "Save $300",

  size: "4/4",
  availableSizes: ["4/4"],

  shortDescription:
    "Short collection-page description.",

  description:
    "Full product description.",

  toneAndPlayability:
    "Verified tonal and performance information.",

  top: "...",
  backAndSides: "...",
  finish: "...",
  fittings: "...",
  strings: null,

  construction: "...",
  handwork: "...",
  idealFor: "...",

  setup: null,

  year: null,
  inspiration: null,
  condition: null,
  conditionNotes: null,

  inStock: true,
}
```

---

# Product Pricing

The frontend supports both standard and sale pricing.

## Standard Price

```js
price: "$1,250.00",
regularPrice: null,
salePrice: null,
savings: null,
```

---

## Sale Price

```js
price: null,
regularPrice: "$1,295.00",
salePrice: "$995.00",
savings: "Save $300",
```

The product components determine which pricing presentation should appear.

---

# Product Availability

Products can use a tri-state availability model.

## Available

```js
inStock: true
```

## Unavailable

```js
inStock: false
```

## Availability Not Yet Confirmed

```js
inStock: null
```

Using `null` allows products to remain in development without incorrectly claiming availability.

---

# Product Photography

Product photography is primarily stored in:

```text
src/assets/
```

Different product families support different image structures.

---

## Instruments

```js
image
frontImage
backImage
combinedImage
```

Possible viewer controls:

```text
Front
Back
Both
```

---

## Bows

```js
image
fullImage
frogTipImage
```

Possible controls:

```text
Full Bow
Frog & Tip
```

---

## Accessories

```js
image
secondaryImage
detailImage
```

Accessory image controls can appear dynamically depending on available photography.

---

## Missing Photography

Products without available photography should display a controlled placeholder rather than a broken image.

This allows product information to be entered before final photography is complete.

---

# Fullscreen Product Viewer

Detailed product photography uses:

```text
src/styles/product-detail-viewer.css
```

The fullscreen viewer supports:

- High-resolution product images
- Product titles
- Image-view controls
- Close button
- Escape-key closing
- Click-outside closing
- Responsive desktop behavior
- Tablet layouts
- Mobile layouts

The viewer is shared visually while each product component determines which image views are appropriate.

---

# Shared Product Detail Styling

The main product-detail visual system is maintained through:

```text
src/styles/product-detail.css
```

This stylesheet provides shared presentation for:

- Product spotlight layouts
- Image stages
- Product identity
- Pricing
- Availability
- Detail tabs
- Specification ledgers
- Product descriptions
- Service sections
- Contact actions
- Responsive behavior

Because this stylesheet is shared between several product families, modifications should be tested carefully across all affected detail pages.

---

# Services

Harmonic Strings is being developed as more than an online catalog.

Dedicated service content is planned as part of the completed frontend.

Planned service areas include:

## In-Home Trials

Information about experiencing eligible instruments before making a final purchase decision.

Product-detail pages can also direct customers toward trial inquiries where appropriate.

---

## Trade-In Program

A future informational area explaining available trade-in opportunities and how customers can inquire about eligible instruments.

---

## Instrument Rentals

A future section covering string-instrument rental options and related customer information.

---

## Workshop Services

A future section describing available instrument-related workshop services.

Exact services, policies, pricing, and scheduling information will be added only after the business information for those services is finalized.

---

# Learning Resources

The Harmonic Strings website is also planned to provide useful educational material.

Future resources may include:

- Beginner Tutorials
- Instrument Care & Maintenance
- Equipment Guides
- Product Education
- Instrument Guides
- Bow Education
- Accessory Guidance
- Student Resources
- Teacher Resources

The educational portion of the site will be built after the primary storefront and product pages are complete.

---

# Video Library

A dedicated Harmonic Strings video area is planned.

Potential video content includes:

- Beginner tutorials
- Instrument demonstrations
- Product demonstrations
- Bow demonstrations
- Product comparisons
- Accessory demonstrations
- Care and maintenance
- Educational resources
- Workshop information
- Playing-related guidance

The final video-delivery strategy has not yet been determined.

Possible approaches may include:

- Locally hosted video
- External video hosting
- Embedded video platforms
- A combination of these approaches

The current project already uses locally hosted video for the homepage hero:

```text
public/videos/hero.mp4
```

The future video library should remain architecturally separate from the homepage hero implementation.

---

# Responsive Design

The site is being designed for:

- Large desktop displays
- Standard desktops
- Laptops
- Tablets
- Mobile phones

Responsive behavior includes:

- Navigation changes
- Mobile dropdown navigation
- Product grids
- Collection navigation
- Detail layouts
- Product photography
- Fullscreen image viewers
- Typography
- Buttons
- Footer layout
- Touch-friendly controls

Desktop and mobile navigation use related content structures while adapting interactions for each device type.

---

# Planned Backend

The current application is primarily a frontend application.

A backend will be added **after the frontend is complete**.

The backend will provide persistent and secure application functionality that should not be implemented only in browser-side React code.

Planned backend responsibilities include:

```text
Customer Accounts
Authentication
Shopping Cart
Product Search
Newsletter
Product Data
Future Commerce Logic
```

The specific backend framework, database, and service providers have intentionally not yet been selected.

---

## Customer Accounts

Future account functionality may include:

- Registration
- Login
- Logout
- Secure authentication
- Customer information
- Account preferences
- Saved information
- Future order history
- Account-associated cart information

Sensitive account information will be handled through the backend rather than stored insecurely in frontend code.

---

# Shopping Cart

The frontend contains cart interface elements, but persistent cart functionality will be implemented during the backend phase.

Future cart functionality may include:

- Add product
- Remove product
- Update quantity
- Persistent cart state
- Product availability checks
- Account-associated carts
- Guest cart behavior
- Future checkout integration

Cart behavior should be connected to real product and inventory data before the website becomes a production commerce application.

---

# Product Search

The frontend contains search interface elements.

Full search functionality will be implemented later.

Future product search may support:

- Product name
- Maker
- Brand
- Model
- Instrument
- Product category
- Player level
- Bow material
- Case category
- Accessory category
- Product availability
- Other product attributes

Search should eventually operate against the backend product catalog rather than permanently depending on static frontend arrays.

---

# Newsletter

The footer contains a newsletter signup interface.

The form is currently part of the frontend presentation and is not yet connected to a production subscriber-management service.

Future newsletter functionality may include:

- Email validation
- Subscription creation
- Duplicate-subscription handling
- Unsubscribe support
- Consent handling
- Mailing-list integration
- Secure backend communication

The final email or mailing-list provider will be selected later.

---

# Future Product Data Architecture

Product information currently lives in frontend JavaScript modules.

Current architecture:

```text
React
   │
   ▼
src/data/*.js
```

This is appropriate while building and testing the frontend.

After backend development, the architecture may move toward:

```text
Browser
   │
   ▼
React / Vite Frontend
   │
   │ API Requests
   ▼
Backend Application
   │
   ├── Products
   ├── Accounts
   ├── Authentication
   ├── Cart
   ├── Search
   ├── Newsletter
   └── Commerce Logic
   │
   ▼
Database / External Services
```

At that stage, React product pages would receive product data through an API rather than relying entirely on static JavaScript files.

The transition should be designed so existing product components can remain largely unchanged.

---

# Hosting and Deployment

**Hostinger is the intended production hosting environment.**

The website is **not currently being treated as ready for production deployment**.

Hosting configuration will be finalized after the frontend is substantially complete and the backend architecture has been selected.

---

## Frontend Deployment

The React/Vite frontend builds with:

```bash
npm run build
```

The generated production application is placed in:

```text
dist/
```

The `dist` directory is generated and is not intended to be manually maintained in Git.

---

## Future Production Architecture

The eventual application will need to serve both frontend and backend functionality.

Conceptually:

```text
Users
  │
  ▼
Harmonic Strings Website
  │
  ├── React / Vite Frontend
  │
  └── Backend API
          │
          ├── Accounts
          ├── Cart
          ├── Search
          ├── Newsletter
          ├── Products
          └── Future Commerce
               │
               ▼
            Database
```

One possible future routing arrangement could conceptually resemble:

```text
harmonicstrings.net
```

for the public frontend and:

```text
api.harmonicstrings.net
```

for backend API functionality.

This is only an architectural possibility and is **not yet a finalized deployment decision**.

The exact Hostinger configuration should be determined when backend development begins.

---

# Local Development

## Requirements

Install Node.js and npm.

Verify them with:

```bash
node --version
npm --version
```

---

## Install Dependencies

From the project directory:

```bash
npm install
```

---

## Development Server

Start Vite with:

```bash
npm run dev
```

Vite will provide a local development URL, commonly:

```text
http://localhost:5173/
```

Use the development server while actively editing frontend files.

---

# Production Build

Create an optimized production build with:

```bash
npm run build
```

A successful build generates:

```text
dist/
```

---

# Production Preview

After building:

```bash
npm run preview
```

This serves the built application locally and allows the production version of the frontend to be tested before eventual deployment.

Recommended checks include:

- Homepage
- Hero video
- Navbar
- Desktop navigation
- Mobile navigation
- Footer
- Violins
- Violas
- Cellos
- Bows
- Cases
- Accessories
- Product-detail routes
- Product photography
- Fullscreen viewers
- Detail tabs
- Internal links
- Hash navigation
- Responsive behavior
- Direct route refreshes

---

# Git Workflow

The project uses Git and GitHub for version control.

Typical workflow:

```bash
git status
```

Stage changes:

```bash
git add .
```

Commit:

```bash
git commit -m "Describe what changed"
```

Push:

```bash
git push
```

Example:

```bash
git add .
git commit -m "Update accessory detail architecture"
git push
```

Changes should ideally be tested locally before committing significant frontend updates.

---

# Environment and Security

Development and generated files are excluded through `.gitignore`.

Examples include:

```text
node_modules/
dist/
.env
.env.*
*.log
```

Backend credentials must never be committed to GitHub.

Future sensitive configuration may include:

- Database credentials
- Authentication secrets
- API credentials
- Newsletter-service keys
- Payment credentials
- Email-service credentials

These should eventually be stored through environment variables.

Example:

```text
.env
.env.production
```

A non-secret template can eventually be maintained as:

```text
.env.example
```

Example:

```env
DATABASE_URL=
AUTH_SECRET=
EMAIL_API_KEY=
```

Real values must never be included in the example file.

---

# Design Principles

The Harmonic Strings frontend follows several architectural principles.

---

## Preserve Consistency

Every product should feel like part of the same Harmonic Strings website.

Instrument, bow, case, and accessory pages may contain different data, but typography, spacing, presentation, navigation, and visual hierarchy should remain consistent.

---

## Use Specialized Components Where Appropriate

Products with different information requirements should not be forced into one large universal component.

Current approach:

```text
InstrumentShowcase.jsx
BowShowcase.jsx
CaseShowcase.jsx
AccessoryShowcase.jsx
```

This reduces unnecessary conditional logic and makes each product system easier to maintain.

---

## Reuse Shared Styling

Shared CSS establishes the common Harmonic Strings visual system.

This creates consistency while allowing specialized JSX structures.

---

## Keep Product Data Separate From Presentation

Product information should generally live in:

```text
src/data/
```

React components should control presentation rather than containing large amounts of product-specific content.

---

## Do Not Invent Product Information

Unknown information should remain:

```js
null
```

or be omitted.

Example:

```js
strings: null,
setup: null,
condition: null,
```

The UI should hide unknown fields until verified information is available.

---

## Avoid Duplicate Information

Product information should have a clear location.

For example:

- Description should describe the product
- Overview should identify the product and intended player
- Craftsmanship should describe construction
- Tone & Playability should describe musical response
- Specifications should contain technical facts

The same sentence or fact should not be unnecessarily repeated throughout a detail page.

---

## Build for Expansion

The architecture should support future additions without requiring major restructuring.

This includes:

- More instruments
- More bows
- More cases
- More accessories
- Strings
- Services
- Educational resources
- Videos
- Search
- Accounts
- Cart
- Newsletter
- Backend product management
- Commerce

---

# Adding Products

The general process for adding a product is:

1. Add verified photography to `src/assets/`
2. Import the photography into the appropriate data file
3. Add a product object
4. Give the product a unique `id`
5. Give the product a URL-safe `slug`
6. Add verified pricing
7. Add verified specifications
8. Leave unknown fields `null`
9. Confirm collection-card presentation
10. Confirm product-detail presentation
11. Test image controls
12. Test desktop
13. Test tablet
14. Test mobile

---

## Minimal Product Example

```js
{
  id: "example-product",
  slug: "example-product",

  name: "Example Product",

  image: exampleImage,

  price: null,

  description:
    "Verified product description.",

  inStock: null,
}
```

Additional fields should be added only when appropriate to that product family.

---

# Development Roadmap

Development is divided into phases so completed frontend systems do not have to be continually rebuilt.

---

## Phase 1 — Core Frontend

- [x] React/Vite project
- [x] Responsive navigation foundation
- [x] Homepage foundation
- [x] Hero media
- [x] Footer foundation
- [x] Shared collection architecture
- [x] Product cards
- [x] Product-detail design system
- [x] Fullscreen image-viewer system
- [x] Desktop responsive foundation
- [x] Tablet responsive foundation
- [x] Mobile responsive foundation

---

## Phase 2 — Instruments

- [x] Violin collection architecture
- [x] Viola collection architecture
- [x] Cello collection architecture
- [x] Shared InstrumentShowcase architecture
- [x] Instrument detail pages
- [ ] Complete remaining instrument inventory
- [ ] Complete remaining photography
- [ ] Complete remaining verified specifications

---

## Phase 3 — Bows

- [x] Bow collection architecture
- [x] Wood bow categories
- [x] Carbon-fiber bow categories
- [x] BowShowcase architecture
- [x] Bow-specific detail specifications
- [ ] Add additional bow inventory
- [ ] Add additional bow photography
- [ ] Complete verified bow specifications

---

## Phase 4 — Cases

- [x] Case collection foundation
- [x] CaseShowcase architecture
- [ ] Complete case inventory
- [ ] Complete case photography
- [ ] Complete case detail information
- [ ] Verify all case categories

---

## Phase 5 — Accessories

- [x] Accessory collection foundation
- [x] Instrument-specific accessory categories
- [x] Other accessory category
- [x] Study-material category
- [x] Flexible AccessoryShowcase architecture
- [ ] Connect accessory detail pages
- [ ] Expand accessory product inventory
- [ ] Add flexible product-specific specifications
- [ ] Complete accessory photography

---

## Phase 6 — Strings

- [x] Navigation structure
- [ ] String collection pages
- [ ] Violin string products
- [ ] Viola string products
- [ ] Cello string products
- [ ] Double bass string products
- [ ] String detail architecture

---

## Phase 7 — Services & Information

- [ ] In-Home Trials
- [ ] Trade-In Program
- [ ] Instrument Rentals
- [ ] Workshop Services
- [ ] Care & Maintenance
- [ ] About Harmonic Strings
- [ ] Customer-care information

---

## Phase 8 — Learning & Videos

- [ ] Beginner Tutorials
- [ ] Educational guides
- [ ] Care guides
- [ ] Equipment education
- [ ] Video library
- [ ] Product demonstrations
- [ ] Instrument demonstrations
- [ ] Accessory demonstrations

---

## Phase 9 — Backend

- [ ] Select backend framework
- [ ] Select database
- [ ] Backend API
- [ ] Product database
- [ ] Authentication
- [ ] Customer accounts
- [ ] Persistent cart
- [ ] Product search
- [ ] Newsletter integration
- [ ] Server validation
- [ ] Environment configuration
- [ ] Security controls

---

## Phase 10 — Commerce

Potential future commerce functionality may include:

- [ ] Checkout
- [ ] Payment processing
- [ ] Order creation
- [ ] Order history
- [ ] Inventory synchronization
- [ ] Transactional email
- [ ] Shipping integration
- [ ] Tax handling
- [ ] Administrative product management

The final commerce implementation will be selected only after business and technical requirements are established.

---

## Phase 11 — Production Deployment

- [ ] Final production build
- [ ] Hostinger deployment configuration
- [ ] Backend hosting configuration
- [ ] Database configuration
- [ ] Domain configuration
- [ ] HTTPS
- [ ] SPA routing verification
- [ ] API routing
- [ ] Environment variables
- [ ] Production security review
- [ ] Performance optimization
- [ ] Image optimization
- [ ] SEO
- [ ] Accessibility review
- [ ] Production testing
- [ ] Monitoring and logging

---

# Current Project Status

Harmonic Strings is currently in **active frontend development**.

The website should not yet be considered a finished production e-commerce application.

Current priorities are:

```text
Finish Frontend
      ↓
Complete Product Catalog
      ↓
Complete Product Detail Pages
      ↓
Complete Strings
      ↓
Build Services
      ↓
Build Learning / Video Content
      ↓
Finalize Backend Architecture
      ↓
Implement Accounts / Cart / Search / Newsletter
      ↓
Add Commerce
      ↓
Deploy Production Application
```

The project is intentionally being developed incrementally so new functionality can be added without unnecessarily changing completed page structures.

---

# Harmonic Strings

**Gateway to Better Sound**

Supporting the North Alabama area since 2002.

Harmonic Strings is focused on helping musicians find instruments, bows, cases, strings, accessories, and supporting resources suited to their musical needs, development, and performance goals.