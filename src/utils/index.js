/**
 * 睡眠
 * @param  {Number} ms 等待
 */
export const sleep = (ms = 500) => {
  return new Promise(res => {
    setTimeout(res, ms)
  })
}
/**
* 对象深拷贝
* @param {Object} obj 目标对象
*/
export const deepClone = (obj) => {
  let target
  if (typeof obj === 'object') {
    target = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (typeof obj[key] !== 'object') {
          target[key] = obj[key]
        } else {
          target[key] = deepClone(obj[key])
        }
      }
    }
  } else {
    target = obj
  }
  return target
}
/**
 * 获取随机数
 * @param {Number} Limit 随机数上限
 */
export const getRandom = (Limit = 10) => {
  return Math.round(Math.random() * Limit)
}
/**
 * 手机号码校验
 * @param {String} value
 * @param {Function} callback
 */
export const validateMobile = (value, callback) => {
  const RegExp = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/
  if (value === '') {
    callback(new Error('请填写联系电话'))
  } else if (!RegExp.test(value)) {
    callback(new Error('手机号码格式有误'))
  } else {
    callback()
  }
}
