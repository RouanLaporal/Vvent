import Express from 'express';
import { EventRepository } from './Repository/EventRepository';
import bodyParser from 'body-parser';
import { request } from 'http';

const app = Express();
app.use(bodyParser.json());

app.get('/', async (request: Express.Request, response: Express.Response) => {
    response.send('Hello World');
})

app.post('/event', async (request: Express.Request, response: Express.Response) => {
    const event_repository = new EventRepository();
    const result = await event_repository.create(request.body);
    response.send(result);
})

app.get('/event', async (request: Express.Request, response: Express.Response) => {
    const event_repository = new EventRepository();
    const result = await event_repository.read();
    response.send(result);
})

app.listen(3000);