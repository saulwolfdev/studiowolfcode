import type {
  ContactRepository,
  ContactSubmission,
} from "./contactRepository";

export class LocalContactRepository implements ContactRepository {
  async submit(_input: ContactSubmission): Promise<void> {
    throw new Error(
      "The contact form is not connected yet. Please use the published email address.",
    );
  }
}

