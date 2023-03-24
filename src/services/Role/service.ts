import { IRoleService } from "./interface";
import { ParametersError } from "../../config/error";
import { update } from "lodash";
import { RoleTo } from "../../to/RoleTo";
import Role from "../../models/Role.model";
 
/**
 * @export
 * @implements {IRoleModeleteOneService}
 */
const RoleService: IRoleService = {
 
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async create(role: RoleTo): Promise<RoleTo> {
        let roleModeleteOne = await Role.create(role);
        return roleModeleteOne
    },
 
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async findAll(): Promise<any[]> {
        // Para enviar un mensaje a kafka
        // await Kafka.send("test", 'Hello');
        return Role.findAll();
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async deleteOne(id: number): Promise<void> {
        let idRole = await Role.destroy({
            where: {
                id: id
            }
        });
        if (idRole == 0) {
            throw new ParametersError("No es posible eliminar este rol");
        }
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async updateOne(id: number, role: RoleTo): Promise<void> {
        let idRole: [number, Role[]] = await Role.update(role, {
            where: {
                id: id
            }
        });
        if (idRole[0] == 0) {
            throw new ParametersError("No es posible actualizar este rol");
        }
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async validateExistRole(name?: string): Promise<void> {
 
        let role = await Role.findAll({
            where: {
                name: name
            }
        })
 
        if (role.length > 0) {
            throw new ParametersError("El rol ya existe");
        }
    }
}
 
export default RoleService;