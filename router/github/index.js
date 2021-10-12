const Router = require('koa-router');
const router = new Router();
const axios = require('axios')
const { client_id, client_secret } = require('../../constant');
const { packData } = require('../utils');
const { URLSearchParams } = require('url');

router.get('/',ctx => {
    ctx.body = 'hello'
})
router.get('/login/github', ctx => {
    ctx.body = packData(`https://github.com/login/oauth/authorize?client_id=${client_id}`)
})

router.get('/getUserInfo/github', async ctx => {
    const res = await axios.post('https://github.com/login/oauth/access_token', {
        client_id,
        client_secret,
        code: ctx.query.code
    })
    const searchParams = new URLSearchParams(res.data)
    const accessToken = searchParams.get('access_token');
    const user = await axios.get('https://api.github.com/user', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    ctx.body = packData(user.data)
})


module.exports = router;