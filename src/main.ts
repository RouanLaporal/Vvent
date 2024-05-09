import Express from 'express';
import { EventRepository } from './Repository/EventRepository';
import bodyParser from 'body-parser';

const app = Express();
app.use(bodyParser.json());

app.get('/', async (request: Express.Request, response: Express.Response) => {
    response.send('Hello World');
})

app.post('/event', async (request: Express.Request, response: Express.Response) => {
    const event_repository = new EventRepository();
    const result = await event_repository.createEvent(request.body);
    response.send(result);
})

app.listen(3000);