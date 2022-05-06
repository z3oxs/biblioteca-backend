import { Obra } from '../types';
import { Obras } from '@prisma/client';

export interface IObrasRepositories {
    create: (data: Obra) => Promise<Obras>;
    getAll: () => Promise<Obras[]>;
    findUnique: (id: number) => Promise<Obras | null>;
    update: (data: Obra) => Promise<Obras>;
    delete: (id: number) => Promise<Obras>;
}
