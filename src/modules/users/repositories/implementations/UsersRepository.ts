import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();
    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);

    return this.users[this.users.length - 1];
  }

  findById(id: string): User | undefined {
    return this.users.find((user: User) => user.id === id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((user: User) => user.email === email);
  }

  turnAdmin(receivedUser: User): User {
    this.users = this.users.map((user: User) =>
      user.id === receivedUser.id
        ? { ...user, admin: true, updated_at: new Date() }
        : user
    );
    return this.users.find((user: User) => user.id === receivedUser.id);
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
