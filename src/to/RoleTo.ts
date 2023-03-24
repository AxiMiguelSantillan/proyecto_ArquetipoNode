/**
 * @export
 * @class RoleTo
 *
 * @swagger
 * components:
 *  schemas:
 *    RoleTo:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: name of Role
 *          example: Admin
 */
export class RoleTo {
    id?: number;
    name?: string;
}