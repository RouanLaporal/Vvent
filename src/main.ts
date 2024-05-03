import Fastify, { FastifyInstance, RouteShorthandOptions} from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

const server: FastifyInstance = Fastify({});

server.get('/', async function handler(request, reply) {
    return 'Hello World';
})



const start = async () => {
    try{
        await server.listen({ port: 3000 })
    }catch(error){
        server.log.error(error);
        process.exit(1);
    }
}

start();