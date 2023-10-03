import {fastify as Fastify} from "fastify";
import http from "http";

const fastify = Fastify({});
fastify.all('*', (req, reply) => {
    reply.send({});
});

await fastify.listen({
    port: 3009,
    host: '0.0.0.0',
});

console.log('fastify', fastify.server.address())

http.get({
    hostname: 'localhost',
    port: 3009,
    path: '/',
    agent: false,  // Create a new agent just for this one request
}, (res) => {
    res.on('data', (d) => {
        console.log(d.toString());
        process.exit(0);
    })
});
