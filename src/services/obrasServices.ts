import { prisma } from '../prisma';
import { Obra } from '../types';

export class obrasServices {
    static async create({ title, publisher, photo, authors }: Obra): Promise<any> {
        const id = await prisma.obra.count();

        const createObra = await prisma.obra.create({
            data: {
                obraid: id + 1,
                title,
                publisher,
                photo,
                authors,
            }
        });

        return createObra;
    }

    static async list(): Promise<any> {
        const obras = await prisma.obra.findMany();

        return obras;
    }

    static async update({ obraid, title, publisher, photo, authors }: Obra): Promise<any> {
        const obra = await prisma.obra.findUnique({
            where: {
                obraid,
            }
        });

        if (obra) {
            const updateObra = await prisma.obra.update({
                where: {
                    obraid,
                },
                data: {
                    title,
                    publisher,
                    photo,
                    authors
                }
            });

            return updateObra;

        } else {
            throw new Error('Invalid obra parsed.');

        }
    }

    static async delete(obraid: number): Promise<any> {
        const deleted = await prisma.obra.delete({
            where: {
                obraid,
            }
        });

        return deleted;
    }
}
