const Router = require('koa-router');
const router = new Router();
const axios = require('axios')
const { wx_secret_key } = require('../../constant');
const { packData } = require('../utils');

let userInfo = {};

router.get('/login/wx', async ctx => {
    const res = await axios.get(`https://server01.vicy.cn/8lXdSX7FSMykbl9nFDWESdc6zfouSAEz/wxLogin/tempUserId?secretKey=${wx_secret_key}`)
    console.log(res)
    ctx.body = packData(res.data.data.qrCodeReturnUrl)
})

/* 接收微信账户信息接口 */
router.post('/callback', async ctx => {
    /* 获取微信的用户信息 */
    userInfo = ctx.request.body
    ctx.body = { errcode: 0, message: '我已经请求成功了' }
})

/* 获取用户信息 */
router.get('/getUserInfo/wx', async ctx => {
    ctx.body = packData(userInfo)
})


module.exports = router;