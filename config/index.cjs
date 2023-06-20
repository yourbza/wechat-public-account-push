/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxb29ff58ba7dcc609',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '89e93768db375f4af5ef9aee19990f1a',

  PROVINCE: '河南',
  CITY: '郑州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '66',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ohEs56yER461n9MQUy2u4NW5ttSk',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'AYP5-hHR9gTXsxkyYXj_LP7qFWA9Hoe8hdSl4Sa-TrM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-01',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '66', year: '2004', date: '04-19',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '66', year: '2004', date: '06-06',
        },
      ],
    // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-06-20' },
       ],
     },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'NjnmvFhdKcT4H66SHTUbTXLzjjO7mA7o0vYt_pCGH0U',

  CALLBACK_USERS: [
    {
      name: '小巴',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ohEs56yER461n9MQUy2u4NW5ttSk',
    }
  ],

}

module.exports = USER_CONFIG

