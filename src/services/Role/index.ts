import { RoleTo } from '../../to/RoleTo';
import RoleService from './service';
 
/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function create(role: RoleTo): Promise<RoleTo> {
    return await RoleService.create(role);
}
 
/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise < any[] > {
    return await RoleService.findAll();
}
 
/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function deleteOne(id: number): Promise < void > {
    return await RoleService.deleteOne(id);
}
 
/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function updateOne(id: number, role: RoleTo): Promise < void > {
    return await RoleService.updateOne(id, role);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function validateExistRole(name?: string): Promise<void> {
    return await RoleService.validateExistRole(name);
}