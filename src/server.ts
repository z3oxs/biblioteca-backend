import express, { Express } from 'express';
import cors from 'cors';
import 'express-async-errors';
import { obrasRouter } from './routes/obrasRouter';
import { errorHandler } from './errors';

const app: Express = express();
const PORT: number = 3001;

app.use(cors());
app.use(express.json());
app.use(obrasRouter);
app.use(errorHandler);

app.listen(PORT, () => 
    console.log(`App listening on ${ PORT }`)
)
