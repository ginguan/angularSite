//entry point
//npx babel-node src/server.js to run server.js
//npm install --save-dev @babel/core @babel/node @babel/preset-env @babel/plugin-transform-runtime
import Hapi from "@hapi/hapi";

const start = async() => {
    const server =Hapi.server({
        port : 8000,
        host :'localhost',
    });
server.route({
    method:'GET',
    path:'/hello',
    handler :(req,h) => {
        return 'Hello!';
        //return h.response('Hello!').code(201);
        //send back a response to the client with string 

    }
    //req: contains details about the request that received and then got a response toolkit
    //h: by convention
    //can use this argument to customize the response to send back to whoever sent the request in the first place
    //callback that will get called when our server receives the correct type of request on the end point that we specified in this path

});

    await server.start();
    console.log(`Server is listening on ${server.info.uri}`);

}
process.on('unhandleRejection' , err =>{
    console.log(err);
    process.exit(1);
}
);
start();