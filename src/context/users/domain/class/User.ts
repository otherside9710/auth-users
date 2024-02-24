export default class User {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  id?: string;

  constructor(
    name: string,
    email: string,
    phone: string,
    id?: string,
  ) {
    this.name = name
    this.email = email
    this.phone = phone
    if (id) this.id = id;
  }
}
