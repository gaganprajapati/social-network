export class User {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;

  constructor(user) {
    this.id = user.id || '';
    this.firstName = user.firstName || '';
    this.lastName = user.lastName || '';
    this.avatar = user.avatar || '';
  }
}
