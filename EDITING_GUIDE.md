# City Fight Club — Editing Guide

This is a static React + Vite website. You do **not** need an admin dashboard, database or backend. Most content is controlled from two files:

- `src/config/siteConfig.js` — text, programs, branch information, fees, schedules, coaches, events and gallery entries.
- `src/config/images.js` — image paths used across the website.

## 1. Run the website

Install Node.js (LTS), open this project folder in a terminal, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). To make a production build:

```bash
npm run build
npm run preview
```

## 2. Replace the gym logo

1. Put your logo in `public/images/logo/`, for example `city-fight-club-logo.png`.
2. Open `src/config/images.js`.
3. Change `logo` to:

```js
logo: "/images/logo/city-fight-club-logo.png",
```

Transparent PNG or SVG is recommended. If the logo is too large or small, adjust `.brand img` in `src/styles.css`.

## 3. Replace the hero photograph

Put the image in `public/images/hero/`. Open `src/config/images.js` and change:

```js
hero: "/images/hero/your-real-gym-photo.jpg",
```

The homepage reads the hero image from the configured image path. Use a wide, high-resolution image with the main subject away from the left text area. You can change the hero headline and description in `siteConfig.js` under `brand`.

## 4. Replace any website image

All image paths live in `src/config/images.js`. Replace the path with a file in `public/images/`. Keep the exact file name and extension in the path. Image folders:

- `public/images/logo/`
- `public/images/hero/`
- `public/images/students/`
- `public/images/achievements/`
- `public/images/coaches/`
- `public/images/training/`
- `public/images/branches/`
- `public/images/events/`
- `public/images/gallery/`

The folders are prepared for your real photos. Add image files to the relevant folder, then update the corresponding path in `images.js` or the entry in `siteConfig.js`.

## 5. Add, remove or rearrange student photographs

Open `src/config/siteConfig.js` and find `gallery`. Add an object:

```js
{ id: "gallery-new", image: "/images/gallery/new-training-photo.jpg",
  caption: "Saturday team training", category: "Training" }
```

Remove an object to remove its photo. Change the order of the objects to rearrange the gallery. Use real photos you have permission to publish and captions approved by the people shown.

## 6. Add student achievements

Find `achievements` in `siteConfig.js`:

```js
{ id: "achievement-new", title: "Verified competition result",
  person: "Student name (with permission)", event: "Competition name",
  date: "DD Month YYYY", image: "/images/achievements/result.jpg" }
```

Only publish confirmed results and names with permission. Remove an entry to remove it.

## 7. Add or edit coaches

Find `coaches` in `siteConfig.js`. Each coach has:

- `id` — unique identifier.
- `name` — approved display name.
- `role` — designation.
- `specialty` — verified speciality.
- `experience` — verified experience, or leave as a placeholder.
- `bio` — short approved biography.
- `branch` — branch name.
- `image` — local image path.

Copy an existing object, change its `id` to a unique value, and edit the other fields. Delete an object to remove a coach. Add the image to `public/images/coaches/`.

## 8. Add, edit or remove training programs

Find the `programs` array in `siteConfig.js`. Copy a program object to add another. Important fields:

- `id`, `name`, `short`, `description`, `image`
- `duration`, `coach`, `days`, `timings`, `level`
- `branches` — use `"yelahanka"` and/or `"kogilu"`.

Example branch assignment:

```js
branches: ["yelahanka"]
```

This means the program is shown as available at Yelahanka only. Use `["kogilu"]` for Kogilu or both IDs if it is genuinely offered at both. Delete an object to remove it.

## 9. Change class timings or add sessions

Each branch has its own `schedule` array inside `branches.yelahanka` or `branches.kogilu`. Never copy one branch's schedule into the other unless the schedules really match.

Example entry:

```js
{ id: "y-new-session", day: "Tuesday", session: "Boxing",
  start: "6:00 PM", end: "7:00 PM", coach: "Coach name",
  level: "Beginner", notes: "Bring wraps" }
```

Use a day from Monday through Sunday. Change a session's values to edit it. Delete the object to remove it.

## 10–11. Update Yelahanka and Kogilu pricing separately

In `siteConfig.js`, find:

```js
branches: {
  yelahanka: { pricing: [...] },
  kogilu: { pricing: [...] }
}
```

Edit the `pricing` array within the correct branch only. Example:

```js
{ name: "Monthly", price: "₹2,500", detail: "1 month" }
```

Update `registrationFee` and `offers` in the same branch. The branch detail page labels the pricing with the branch name. Do not put a combined price list in both branches.

## 12. Update branch contact details

Inside each branch object, edit:

- `address`
- `phone`
- `whatsappNumber`
- `whatsappLink`
- `instagramUrl`
- `mapsUrl`
- `hours`

WhatsApp link format: `https://wa.me/91XXXXXXXXXX` (country code + number, digits only). Google Maps URL should be the correct share/directions link for that branch.

## 13. Update Google Maps locations

Edit `mapsUrl` separately in `branches.yelahanka` and `branches.kogilu`. The "Get directions" links use these values and open a new tab.

## 14. Update WhatsApp numbers

Edit `whatsappNumber` and `whatsappLink` for the relevant branch. Test each link on a phone before publishing.

## 15. Update Instagram links

Edit `brand.instagramUrl` for the academy's main Instagram. Each branch also has its own `instagramUrl` field if applicable.

## 16. Change the Google Form

Find `brand.registrationFormUrl` and paste the full Google Form URL. The "Join the Fight" buttons open it in a new tab. The current URL is a placeholder; replace it before launch.

## 17. Add or remove motivational quotes

Edit the `quotes` array in `siteConfig.js`. Add a string for each quote, remove a string to delete it, or rearrange strings to change their rotation order.

## 18. Add upcoming events and fixtures

Edit the `events` array. Each item supports `id`, `title`, `date`, `time`, `location`, `branch`, `description`, `image`, `registrationUrl` and `status`. Copy an event object to add another. Use confirmed dates and details only.

## 19. Update website text and footer

The `brand` object controls the site name, tagline, headline, hero description, logo, form and Instagram link. The `about`, `whyChooseUs`, `testimonials` and `footer` objects/arrays control their respective content. Replace placeholders before the site is public.

## 20. Important before publishing

- Replace every `ADD...`, `REPLACE...`, `91XXXXXXXXXX` and placeholder address.
- Confirm which programs really run at each branch.
- Confirm all fees and schedules independently.
- Use student and coach photographs only with permission.
- Verify phone, WhatsApp, Instagram, form and Maps links.
- Test the website on a phone and desktop.
- Run `npm run build` and resolve any errors before deployment.

### Where each page lives

- Homepage: `src/App.jsx` → `Home`
- Branch detail pages: `src/App.jsx` → `BranchPage`
- Shared header/footer/cards: `src/components.jsx`
- All visual styling: `src/styles.css`
- Main content configuration: `src/config/siteConfig.js`
- Image references: `src/config/images.js`
