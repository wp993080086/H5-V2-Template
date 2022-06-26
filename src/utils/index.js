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
