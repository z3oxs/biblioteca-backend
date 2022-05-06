import { Router } from 'express';

import { obrasController } from '../controllers/obrasController';

export const obrasRouter: Router = Router();

obrasRouter.post('/obras', obrasController.create);
obrasRouter.get('/obras/', obrasController.getAll);
obrasRouter.put('/obras/:id', obrasController.update);
obrasRouter.delete('/obras/:id', obrasController.delete);
