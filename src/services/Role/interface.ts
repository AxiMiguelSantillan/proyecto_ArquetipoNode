import { RoleTo } from "../../to/RoleTo";

 
/**
 * @export
 * @interface IRoleService
 */
export interface IRoleService {
 
     /**
     * @returns {Promise<RoleTo>}
     * @memberof IRoleService
     */
    create(role: RoleTo): Promise<RoleTo>;
 
    /**
     * @returns {Promise<RoleTo>}
     * @memberof IRoleService
     */
    findAll(): Promise<any[]>;
 
    /**
     * @returns {Promise<RoleTo>}
     * @memberof IRoleService
     */
    deleteOne(id: number): Promise<void>;
 
    /**
     * @returns {Promise<RoleTo>}
     * @memberof IRoleService
     */
    updateOne(id: number, role: RoleTo): Promise<void>;

    /**
     * @returns {Promise<RoleTo>}
     * @memberof IRoleService
     */
    validateExistRole(name?: string): Promise<void>;
}