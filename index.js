const Koa = require('koa');
const cors = require('@koa/cors');
const githubRouter = require('./router/github/index')
const wxRouter = require('./router/wx/index')
const bodyParser = require('koa-bodyparser')
const app = new Koa();

app.use(cors())
app.use(bodyParser())
app.use(githubRouter.routes())
app.use(wxRouter.routes())
app.listen(3000, () => {
    console.log('listening 3000')
});