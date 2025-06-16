# Merchant Services Dashboard

Poweful payment management platform for businesses and agencies.

## Folder Overview

- `pages/` – Next.js route pages for the UI
- `pages/onboarding/` – Multi-step business onboarding
- `pages/billing/` – Billing and subscription tools
- `pages/customers/` – Simple CRM for merchants
- `pages/finance/` – Fee transparency and revenue insights
- `pages/dashboard/` – Transaction reporting
- `pages/support/` – Refund management
- `api/` – Backend API endpoints
- `lib/` – Payment provider and crypto utilities
- `prisma/` – Prisma models and migrations
- `components/` – Reusable React components

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run database migrations (requires PostgreSQL):
   ```bash
   npx prisma migrate dev --name init
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`.
