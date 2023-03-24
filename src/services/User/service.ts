import { IUserService } from "./interface";
import User from "../../models/User.model";
import * as Kafka from "../../config/stream/kafka"
import { ParametersError } from "../../config/error";
import { UserTo } from "../../to/UserTo";
import Users from "../../models/User.model";
import { Utils } from "sequelize/types";

/**
 * @export
 * @implements {IUserModelService}
 */
const UserService: IUserService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {
        // Para enviar un mensaje a kafka
        // await Kafka.send("test", 'Hello');
        return User.findAll();
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async validateExistUser(email?: string): Promise<void> {
 
        let user = await User.findAll({
            where: {
                email: email
            }
        })
 
        if (user.length > 0) {
            throw new ParametersError("El usuario ya existe");
        }
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async create(user: UserTo): Promise<Users> {
        let userModel = await User.create(user);
        return userModel
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async updateOne(id:number, user: UserTo): Promise<void> {
        let idUser: [number,User[]]  = await User.update(user, {
                where: {
                    id: id
                }});
        if (idUser[0] == 0) {
            throw new ParametersError("No es posible actualizar este usuario");
        }
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async deleteOne(id: number): Promise<void> {
        let idUser = await User.destroy({
            where: {
                id: id
            }
        });
        if (idUser == 0) {
            throw new ParametersError("No es posible eliminar este usuario");
        }
    }
}

export default UserService;