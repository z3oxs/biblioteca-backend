import { prisma } from '../database';
import { Obra } from '../types';

export class obrasRepositories {
    static async create({ title, publisher, photo, authors }: Obra): Promise<any> {
        const create = await prisma.obras.create({
            data: {
                obraid: await prisma.obras.count() + 1, 
                title,
                publisher,
                photo,
                authors,
            },
        });

        return create;
    }

    static async list(): Promise<any> {
        const find = await prisma.obras.findMany();

        return find;
    }

    static async findUnique(id: number): Promise<any> {
        const find = await prisma.obras.findUnique({
            where: {
                obraid: id,
            }
        });

        return find;
    }

    static async update({ obraid, title, publisher, photo, authors }: Obra): Promise<any> {
        const update = await prisma.obras.update({
            where: {
                obraid,
            },
            data: {
                title,
                publisher,
                photo,
                authors,
            }
        });

        return update;
    }

    static async delete(id: number): Promise<any> {
        const deleted = await prisma.obras.delete({
            where: {
                obraid: id,
            }
        });

        return deleted;
    }
}
