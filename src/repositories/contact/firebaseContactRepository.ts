import type {
  ContactRepository,
  ContactSubmission,
} from "./contactRepository";

/**
 * Sends contact data to a protected Next.js server endpoint. The endpoint must
 * validate input, rate-limit requests, apply anti-spam checks and use the
 * Firebase Admin SDK. Firestore is intentionally never written from the browser.
 */
export class FirebaseContactRepository implements ContactRepository {
  constructor(private readonly endpoint = "/api/contact") {}

  async submit(input: ContactSubmission): Promise<void> {
    const response = await fetch(this.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      throw new Error("The message could not be sent. Please try again later.");
    }
  }
}

