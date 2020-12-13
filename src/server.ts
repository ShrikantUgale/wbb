import express, { Application, Request, Response } from 'express';
import { processRequest } from './controller';

const { PORT } = process.env;

const app: Application = express();

app.get('/name-count/:name', async (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    const processedResp = await processRequest(name);
    res.status(200).send(processedResp);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => console.info(`Server started on port ${PORT}`));
