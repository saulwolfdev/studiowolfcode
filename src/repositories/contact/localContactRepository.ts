import type {
  ContactRepository,
  ContactSubmission,
} from "./contactRepository";

export class LocalContactRepository implements ContactRepository {
  async submit(_input: ContactSubmission): Promise<void> {
    throw new Error(
      "El formulario todavía no está conectado. Utilizá el correo publicado cuando esté disponible.",
    );
  }
}
