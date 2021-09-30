const Koa = require('koa');
const cors = require('@koa/cors');
const githubRouter = require('./router/github/index')
const app = new Koa();

app.use(cors())

app.use(githubRouter.routes())
app.listen(3000, () => {
    console.log('listening 3000')
});