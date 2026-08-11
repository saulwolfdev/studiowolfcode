const firebaseEnvironment = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
} as const;

export const isFirebaseConfigured = Object.values(firebaseEnvironment).every(
  (value) => typeof value === "string" && value.trim().length > 0,
);

export function getFirebaseConfig() {
  if (!isFirebaseConfigured) {
    throw new Error(
      "Firebase is not configured. Copy .env.example to .env.local and set every NEXT_PUBLIC_FIREBASE_* value.",
    );
  }

  return firebaseEnvironment as Record<keyof typeof firebaseEnvironment, string>;
}

