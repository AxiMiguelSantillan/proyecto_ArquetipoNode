import { Router } from 'express';
import { RoleFacade } from '../facade';
import { logger } from '../config/logger/logger';
 
/**
 * @constant {express.Router}
 */
const router: Router = Router();
 
/**
 * DELETE method route
 * @example http://localhost:PORT/roles
 * @swagger
 * /roles/{id}/id:
 *  delete:
 *    description: delete Roles
 *    tags: ["Roles"]
 *    parameters : [
 *      {
 *         name: 'id',
 *         in: 'path',
 *         schema: {
 *           type: 'number',
 *           example: 1
 *         },
 *         required: true
 *      }
 *    ]
 *    responses:
 *      200:
 *        description: All Roles
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.delete('/:id/id', RoleFacade.deleteOne);
 
/**
 * PATCH method route
 * @example http://localhost:PORT/roles
 * @swagger
 * /roles/{id}/id:
 *  patch:
 *    description: update Roles
 *    tags: ["Roles"]
 *    parameters : [
 *      {
 *         name: 'id',
 *         in: 'path',
 *         schema: {
 *           type: 'number',
 *           example: 1
 *         },
 *         required: true
 *      }
 *    ]
 *    requestBody:
 *      description: object Roles
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/RoleTo'
 *    responses:
 *      200:
 *        description: All Roles
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/RoleTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.patch('/:id/id', RoleFacade.updateOne);
 
/**
 * GET method route
 * @example http://localhost:PORT/roles
 * @swagger
 * /roles:
 *  get:
 *    description: Get all Roles
 *    tags: ["Roles"]
 *    responses:
 *      200:
 *        description: All Roles
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/RoleTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.get('', RoleFacade.findAll);
 
/**
 * POST method route
 * @example http://localhost:PORT/roles
 * @swagger
 * /roles:
 *  post:
 *    description: create Roles
 *    tags: ["Roles"]
 *    requestBody:
 *      description: object roles
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/RoleTo'
 *    responses:
 *      200:
 *        description: All Roles
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/RoleTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.post('', RoleFacade.save);
 
// /**
//  * GET method route
//  * @example http://localhost:PORT/roles/pong
//  * @swagger
//  * /roles/pong/:
//  *  get:
//  *    description: Test service
//  *    tags: ["Roles/Pong"]
//  *    responses:
//  *      200:
//  *        description: Pong
//  *        content:
//  *          appication/json:
//  *            example:
//  *              status: 200
//  *              message: pong
//  */
// router.get('/pong', async (req, res) => {
//     logger.info("(%s) - Request accepted: %s","RoleRouter.ts",'');
//     res.send('pong');
//     logger.info("(%s) - Sending Response: %s","RoleRouter.ts",{data:"pong"});
// });
 
/**
 * @export {express.Router}
 */
export default router;