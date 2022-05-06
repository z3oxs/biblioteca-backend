import { ObrasRepositories } from '../repositories/ObrasRepositories';
import { Obra } from '../types';

export class ObrasServices {
    static async create({ title, publisher, photo, authors }: Obra) {
        const obrasRepositories = new ObrasRepositories;

        const createObra = await obrasRepositories.create({
            title,
            publisher,
            photo,
            authors,
        });

        return createObra;
    }

    static async getAll() {
        const obrasRepositories = new ObrasRepositories;
        
        const obras = await obrasRepositories.getAll();

        return obras;
    }

    static async update({ obraid, title, publisher, photo, authors }: Obra) {
        const obrasRepositories = new ObrasRepositories;
        
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

    static async delete(obraid: number) {
        const obrasRepositories = new ObrasRepositories;
        
        const deleted = await obrasRepositories.delete(obraid!);

        return deleted;
    }
}
