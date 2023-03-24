import { Utils } from "../../commons/utils/Utils";
import { ParametersError } from "../../config/error";
import { UserService } from "../../services";
import { UserTo } from "../../to/UserTo";
import { IUserFacade } from "./interface";
import * as Kafka from '../../config/stream/kafka';


/**
 * @export
 * @implements {IUserModelService}
 */
const UserFacade: IUserFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {

        let User = await UserService.findAll();
        return User;
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async create(user: UserTo): Promise<UserTo> {
        Utils.required({name: user.name,
                        email: user.email});
        await UserService.validateExistUser(user.email);
        let userResponse: UserTo = await UserService.create(user);
        return userResponse;
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async updateOne(id:number, user: UserTo): Promise<void> {
        Utils.required({id: id});
        await UserService.updateOne(id, user);
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async deleteOne(id: number): Promise<void> {
        Utils.required({id: id});
        await UserService.deleteOne(id);
    }
//     /**
//      * @returns {Promise < any[] >}
//      * @memberof UserFacade
//      */
//     async publish(id: number): Promise<void> {
//         await Kafka.send('user-service-topic', `${id}`);
//     },
 
//     /**
//      * @returns {Promise < any[] >}
//      * @memberof UserFacade
//      */
//     async consumer(id: number): Promise<void> {
//         await UserService.del(id);
//     }
}

export default UserFacade;