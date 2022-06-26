import Request from '../request'

export default {
  apis: {
    banner: '/banner', // banner图
    recommendSongList: '/personalized' // 推荐歌单
  },
  /**
  * 获取banner图
  * @param {Number} type 类型
  */
  banner(type = 0) {
    return Request({
      url: this.apis.banner,
      method: 'post',
      data: {
        type
      },
      notLoad: true
    })
  },
  /**
  * 推荐歌单
  * @param {Number} limit 数量
  */
  recommendSongList(limit = 18) {
    return Request({
      url: this.apis.recommendSongList,
      method: 'post',
      data: {
        limit
      },
      notLoad: true
    })
  }
}
