import { UserTo } from "../../to/UserTo";

/**
 * @export
 * @interface IUserFacade
 */
export interface IUserFacade {

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    findAll(): Promise<any[]>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    create(user: UserTo): Promise<UserTo>;
    
    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    updateOne(id:number, user: UserTo): Promise<void>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    deleteOne(id: number): Promise<void>;

    

    // /**
    //  * @returns {Promise<any[]>}
    //  * @memberof IUserFacade
    //  */
    // publish(id: number): Promise<void>;
 
    // /**
    //  * @returns {Promise<any[]>}
    //  * @memberof IUserFacade
    //  */
    // consumer(id: number): Promise<void>;
}