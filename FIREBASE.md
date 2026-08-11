# Firebase integration

The Firebase client is optional. If all `NEXT_PUBLIC_FIREBASE_*` variables are
present, `createProjectsRepository` reads the `projects` collection from
Firestore. Otherwise it uses typed local data.

## Setup

1. Install the client SDK: `npm install firebase`.
2. Copy `.env.example` to `.env.local` and fill it with the Firebase web-app
   configuration. These identifiers are client configuration, not admin
   credentials; `.env.local` is still ignored to keep environment setup local.
3. Deploy the restrictive defaults with `firebase deploy --only firestore:rules,storage`.
4. Import `createProjectsRepository(localProjects)` in the data layer. UI
   components should receive typed props and must not import Firebase.

The contact repository calls `/api/contact`. Do not enable it until that server
route validates the request, adds anti-spam and rate limiting, and writes with
the Firebase Admin SDK. The included Firestore rules deny all browser writes.

## Firestore shape

Create a `projects` collection whose documents match `Project` except for `id`,
which comes from the Firestore document ID. Every document needs a numeric
`order` field. Project media can be published under `project-media/` in Storage.
