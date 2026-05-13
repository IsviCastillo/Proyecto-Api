import { User } from "../entities/user.entity";
import { Database } from "../database/db";
import { IUser } from "../interfaces/user.interface";

export class UserService {

    private database = Database.getDataBaseInstance();

    private userRepository = this.database
        .getDataSource()
        .getRepository(User);

    getAllUsers() {
        return this.userRepository.find();
    }

    async getUserById(id: string) {

        const user = await this.userRepository.findOneBy({ id });

        if (user !== null) {

            return {
                id: user.id,
                nombre: user.nombre,
                email: user.email
            };

        } else {

            return null;
        }
    }

    createUser(user: IUser) {

        const newUser = new User();

        newUser.nombre = user.nombre!;
        newUser.email = user.email!;
        newUser.password = user.password!;

        return this.userRepository.save(newUser);
    }
}