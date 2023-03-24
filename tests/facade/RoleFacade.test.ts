process.env.NODE_ENV = 'test'
 
import { expect } from "chai";
import { db } from '../../src/config/connection/database';
import { ParametersError } from "../../src/config/error";
import RoleFacade from "../../src/facade/Role/facade";
import Role from "../../src/models/Role.model";
import { RoleTo } from "../../src/to/RoleTo";
 
describe('RoleFacade Test', () => {
    before('Init', async () => {
        await db.sync({ force: true });
        Role.create({
            id: 1,
            name: 'root'
        });
       
    });
 
    describe('FindAll', () => {
        it('should return one role', async () => {
            const Role: any[] = await RoleFacade.findAll();
            expect(1).equal(Role.length);
        });
    });
 
    describe('Create', () => {
        it('should create one user', async () => {
            let roleTo: RoleTo = {
                name: "Admin",
            }
            const user: RoleTo = await RoleFacade.create(roleTo);
            expect(user.id).to.not.be.null;
        });
    });

    describe('Create Error Role Exist', () => {
        it('should retur error', async () => {
            let roleTo: RoleTo = {
                name: "Admin",
            }
            try {
                await RoleFacade.create(roleTo);
            } catch (error: any) {
                expect(error.message).equal('El rol ya existe')
            }
        });
    });

    describe('Create Error atributes required', () => {
        it('should retur error -> attributes required', async () => {
            let roleTo: RoleTo = {
            }
            try {
                await RoleFacade.create(roleTo);
            } catch (error: any) {
                expect(error).instanceOf(ParametersError)
                expect(error.message).equal('El atributo name es requerido')
            }
        });
    });

    describe('Update', () => {
        it('should update one role', async () => {
            let roleTo: RoleTo = {
                name: "Admin",
            }
            try {
                await RoleFacade.updateOne(1, roleTo);
            } catch (error: any) {
                expect(error).instanceOf(ParametersError)
            }
        });
    });

    describe('Update Error, Id no exist', () => {
        it('should retur error', async () => {
            let roleTo: RoleTo = {
                name: "Admin",
            }
            try {
                await RoleFacade.updateOne(99, roleTo);
            } catch (error: any) {
                expect(error.message).equal('No es posible actualizar este rol')
            }
        });
    });

    describe('Update Error, atributes required', () => {
        it('should retur error', async () => {
            let roleTo: RoleTo = {
            }
            try {
                await RoleFacade.updateOne(1, roleTo);
            } catch (error: any) {
                expect(error.message).equal('No es posible actualizar este rol')
            }
        });
    });

    describe('Delete', () => {
        it('should delete one role', async () => {
            try {
                await RoleFacade.deleteOne(1);
            } catch (error: any) {
                expect(error).instanceOf(ParametersError)
            }
        });
    });

    describe('Delete Error, Id no exist', () => {
        it('should retur error', async () => {
            try {
                await RoleFacade.deleteOne(99);
            } catch (error: any) {
                expect(error.message).equal('No es posible eliminar este rol')
            }
        });
    });
 
});