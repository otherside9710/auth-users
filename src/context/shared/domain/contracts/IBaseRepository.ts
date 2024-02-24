export interface IBaseRepository<T> {
  getByEmail(email: string): Promise<T>;
}
