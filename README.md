# Merch Cross-Platform Monorepo

This repo is now organized as an Expo + Next.js + Firebase monorepo.

## Folder Overview

- `apps/web` – Next.js web app
- `apps/mobile` – Expo React Native app
- `shared` – Shared business logic and components
- `firebase` – Firebase config used by both apps

## Getting Started

1. Install dependencies for all workspaces (requires npm v7+):
   ```bash
   npm install
   ```
2. Copy `.env.example` files in `apps/web` and `apps/mobile` to `.env` and fill in your Firebase keys.
3. Run the web app:
   ```bash
   npm run --workspace=apps/web dev
   ```
4. Run the mobile app:
   ```bash
   npm run --workspace=apps/mobile start
   ```

Both apps share authentication and user data via Firebase.
