export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

export interface ContactRepository {
  submit(input: ContactSubmission): Promise<void>;
}

