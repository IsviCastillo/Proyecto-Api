import { User } from "../entities/user.entity";
export declare class UserService {
    private repo;
    getAll(): Promise<User[]>;
    getById(id: string): Promise<User | null>;
    create(data: any): Promise<User[]>;
    update(id: string, data: any): Promise<User>;
    delete(id: string): Promise<User>;
}
//# sourceMappingURL=user.service.d.ts.map