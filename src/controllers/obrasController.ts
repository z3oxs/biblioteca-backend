import { Request, Response } from 'express';
import { obrasServices } from '../services/obrasServices';
import { Obra } from '../types';

export class obrasController {
    static async create(req: Request, res: Response): Promise<Response> {
        const { title, publisher, photo, authors }: Obra = req.body;

        if (!title || !publisher || !photo || !authors) {
            throw new Error('Invalid body parsed.');

        }

        const created = await obrasServices.create({
            title,
            publisher,
            photo,
            authors,
        });

        return res.status(201).json(created);
    }

    static async list(req: Request, res: Response): Promise<Response> {
        const obras = await obrasServices.list();

        return res.json(obras);
    }

    static async update(req: Request, res: Response): Promise<Response> {
        const { title, publisher, photo, authors }: Obra = req.body;
        const { id } = req.params;
        
        const updated = await obrasServices.update({
            obraid: parseInt(id),
            title,
            publisher,
            photo,
            authors,
        });

        return res.json(updated);
    }

    static async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const deleted = await obrasServices.delete(parseInt(id));

        return res.status(204).json(deleted);
    }
}
