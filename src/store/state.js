export default {
    token: null, // 登录令牌,存在localStorage中，防止刷新页面丢失数据
    imgUrl: 'http://cdn.jie12366.xyz/head-boy.png', // 用户头像
    uid: 0, // 用户id
    account: '', // 用户账号
    authority: '', // 用户权限
    recent: '', // 最近浏览的1个分类
    canLogin: false, // 验证码是否验证成功
}