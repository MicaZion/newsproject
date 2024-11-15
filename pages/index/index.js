// index.js
var common = require('../../utils/util.js')
var newsList = common.getNewsList();
// 页面入口函数
Page({
  data: {
    swiperImages: [
      { src: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0914%2F80722048j00sjs5au001id000u000k0m.jpg&thumbnail=750x2147483647&quality=75&type=webp' },
      { src: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0914%2F4ff429ddj00sjs0wv00rrd000u000hqg.jpg&thumbnail=750x2147483647&quality=75&type=webp' },
      { src: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0914%2F26f60b76j00sjsdsj001qd000hs00dcg.jpg&thumbnail=750x2147483647&quality=75&type=webp' },
      { src: 'https://img.ithome.com/newsuploadfiles/thumbnail/2024/11/810171_240.jpg?x-bce-process=image/format,f_avif' },
    ],
    newsList: newsList
  },
  goToNewsDetail(e) {
      const newsID = e.currentTarget.dataset.newsid
      wx.navigateTo({
        url: `/pages/newsDetail/newsDetail?newsID=${newsID}`
      })
    }
})


  
