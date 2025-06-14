export interface User {
    id?: number;
    username: string;
    password?: string;
}
export declare function findUser(username: string, password: string): Promise<User | null>;
//# sourceMappingURL=userModel.d.ts.map