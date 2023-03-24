import { update } from "lodash";
import { Utils } from "../../commons/utils/Utils";
import { RoleService } from "../../services";
import { IRoleFacade } from "./interface";
import { RoleTo } from "../../to/RoleTo";
 
/**
 * @export
 * @implements {IRoleModeleteOneService}
 */
const RoleFacade: IRoleFacade = {
    
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async create(role: RoleTo): Promise<RoleTo> {
        Utils.required({name: role.name});
        await RoleService.validateExistRole(role.name);
        let RoleResponse: RoleTo = await RoleService.create(role);
        return RoleResponse;
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async findAll(): Promise<RoleTo[]> {
 
        let Role = await RoleService.findAll();
        return Role;
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async deleteOne(id: number): Promise<void> {
        Utils.required({id: id});
        await RoleService.deleteOne(id);
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async updateOne(id: number, role: RoleTo): Promise<void> {
        Utils.required({id: id});
        await RoleService.updateOne(id, role);
    }
}
 
export default RoleFacade;