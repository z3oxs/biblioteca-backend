import { obrasRepositories } from '../repositories/obrasRepositories';
import { Obra } from '../types';

export class obrasServices {
    static async create({ title, publisher, photo, authors }: Obra): Promise<any> {
        const createObra = await obrasRepositories.create({
            title,
            publisher,
            photo,
            authors,
        });

        return createObra;
    }

    static async list(): Promise<any> {
        const obras = await obrasRepositories.list();

        return obras;
    }

    static async update({ obraid, title, publisher, photo, authors }: Obra): Promise<any> {
        const obra = await obrasRepositories.findUnique(obraid!);

        if (obra) {
            const updateObra = await obrasRepositories.update({
                obraid, 
                title,
                publisher,
                photo,
                authors
            });

            return updateObra;

        } else {
            throw new Error('Invalid obra parsed.');

        }
    }

    static async delete(obraid: number): Promise<any> {
        const deleted = await obrasRepositories.delete(obraid!);

        return deleted;
    }
}
