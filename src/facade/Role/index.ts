import RoleFacade from './facade';
import { NextFunction, Request, Response } from 'express';
import HttpStatusCode from '../../commons/constants/HttpStatusCode';
import { logger } from '../../config/logger/logger';
import { RoleTo } from '../../to/RoleTo';
 
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function save(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        let role: RoleTo = { ...req.body };
        logger.info("(%s) - Request post: %s","RoleRouter.ts",JSON.stringify(role));
        role = await RoleFacade.create(role);
        res.status(HttpStatusCode.OK).json(role);
    } catch (error) {
        next(error);
    }
}
 
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const Role: any[] = await RoleFacade.findAll();
        res.status(HttpStatusCode.OK).json(Role);
    } catch (error) {
        next(error);
    }
}
 
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function deleteOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const {
            params: { id }
        } = req
        logger.info("(%s) - Request put: %s", "RoleRouter.ts", id);
        let role: RoleTo = { ...req.body };
        await RoleFacade.deleteOne(Number(id));
        res.status(HttpStatusCode.OK).json("");
    }
    catch (error) {
        next(error);
    }
}
 
export async function updateOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const {
            params: { id }
        } = req
        logger.info("(%s) - Request put: %s", "RoleRouter.ts", id);
        let role: RoleTo = { ...req.body };
        await RoleFacade.updateOne(Number(id), role);
        res.status(HttpStatusCode.OK).json(role);
    }
    catch (error) {
        next(error);
    }
}