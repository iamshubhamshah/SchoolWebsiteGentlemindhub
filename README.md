# Gentle Mind Hub — School Website Demo

A responsive, multi-page React + Vite school website starter based on the uploaded School Website Sales Playbook.

## Included pages
- Home
- About
- Facilities / Services
- Gallery (category filters + image lightbox)
- Contact (enquiry form opens a pre-filled WhatsApp message + Google Maps embed)

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production-ready static site is generated in `dist/`.

## School customisation

Edit `src/data/school.js`. Update the school name, address, phone, WhatsApp number (country code + number, digits only), email, timings, map URL, approved images, facilities, gallery and social links. All pages read from this shared configuration.

The current sample content is fictional demonstration content. Replace it with each school's verified details and only use photographs that the school has permission to publish. The sample form sends the enquiry details to WhatsApp; it does not store submissions in a database.

## Multi-school subdomains: `schoolname.gentlemindhub.com`

This code is a reusable frontend template. It reads the first hostname label and formats it as the displayed school name as a basic demo fallback. **It does not yet provide a school database, separate school content by tenant, or an admin panel.** For real client onboarding, replace `getSchoolConfig()` in `src/data/school.js` with a lookup from a school registry/API keyed by the hostname slug (for example `gentlemindhub`), and return that school's approved configuration.

To serve many subdomains from one deployment:
1. Configure wildcard DNS for `*.gentlemindhub.com` to point to the hosting provider.
2. Configure wildcard/custom-domain SSL coverage with the provider.
3. Configure the hosting platform to accept those hostnames and route them to this same static app.
4. Add a school record for each slug in your registry/API and test unknown hostnames.

Wildcard DNS alone is not enough: confirm wildcard SSL, provider custom-hostname rules, commercial-use terms, traffic limits, backups and support costs before selling the monthly plan. A school using this agency subdomain does not own the parent domain. Put hosting, updates, cancellation and migration terms in writing.

## Scope notes
This is a static website demo. It intentionally has no login, database, admin panel, online payment or dynamic content management, matching the basic static-site scope in the playbook. The enquiry form uses WhatsApp rather than a custom backend.
