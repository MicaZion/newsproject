// pages/newsDetail/newsDetail.js
var common = require('../../utils/util.js')
Page({
  data: { 
    article: [] 
  },
  onLoad: function (options) {
    let id = options.newsID;
    let result = common.getNewsDetail(id);
    if (result.code == '200') {
      this.setData({
        article: result.news,
      })
    }
  }
})
