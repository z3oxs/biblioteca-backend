import { Request, Response } from 'express';
import { ObrasServices } from '../services/obrasServices';
import { Obra } from '../types';

export class obrasController {
    static async create(req: Request, res: Response): Promise<Response> {
        const { title, publisher, photo, authors }: Obra = req.body;

        if (!title || !publisher || !photo || !authors) {
            throw new Error('Invalid body parsed.');

        }

        const created = await ObrasServices.create({
            title,
            publisher,
            photo,
            authors,
        });

        return res.status(201).json(created);
    }

    static async getAll(req: Request, res: Response): Promise<Response> {
        const obras = await ObrasServices.getAll();

        return res.json(obras);
    }

    static async update(req: Request, res: Response): Promise<Response> {
        const { title, publisher, photo, authors }: Obra = req.body;
        const { id } = req.params;

        const updated = await ObrasServices.update({
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

        await ObrasServices.delete(parseInt(id));

        return res.status(204).send();
    }
}
