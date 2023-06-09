import { UserTo } from '../../to/UserTo';
import UserService from './service';

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise < any[] > {
    return await UserService.findAll();
}
/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function validateExistUser(email?: string): Promise<void> {
    return await UserService.validateExistUser(email);
}
 
/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function create(user: UserTo): Promise<UserTo> {
    return await UserService.create(user);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function updateOne(id:number, user: UserTo): Promise<void> {
    return await UserService.updateOne(id, user);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function deleteOne(id: number): Promise<void> {
    return await UserService.deleteOne(id);
}
// /**
//  * @export
//  * @returns {Promise < any[] >}
//  */
// export async function del(id: number): Promise<void> {
//     return await UserService.del(id);
// }



