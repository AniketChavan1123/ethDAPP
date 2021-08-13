const {createServer} =require('http');
const next = require('next');
const app=next({
    dev: process.env.NODE_ENV !=='production'
    // if equal then app must run in production mode
});
const routes=require('./routes');
const handler=routes.getRequestHandler(app);

app.prepare().then(()=>{
    createServer(handler).listen(3000,(err)=>{
        if(err) throw err;
        console.log('ready on localHost:3000');
    })

});