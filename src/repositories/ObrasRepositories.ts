import { prisma } from '../database';
import { IObrasRepositories } from './IObrasRepositories';
import { Obra } from '../types';

export class ObrasRepositories implements IObrasRepositories {
    async create({ title, publisher, photo, authors }: Obra) {
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

    async getAll() {
        const find = await prisma.obras.findMany();

        return find;
    }

    async findUnique(id: number) {
        const find = await prisma.obras.findUnique({
            where: {
                obraid: id,
            }
        });

        return find;
    }

    async update({ obraid, title, publisher, photo, authors }: Obra) {
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

    async delete(id: number) {
        const deleted = await prisma.obras.delete({
            where: {
                obraid: id,
            }
        });

        return deleted;
    }
}
