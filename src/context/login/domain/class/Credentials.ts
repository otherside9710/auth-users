export default class Credentials {
  readonly email: string;
  readonly password: string;
  readonly id?: string;

  constructor(
    email: string,
    password: string,
    id?: string,
  ) {
    this.email = email
    this.password = password
    if (id) this.id = id
  }
}
