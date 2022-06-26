import { Toast, Dialog, Notify } from 'vant'

/**
 * Toast提示
 * @param {String} text 文案
 * @param {Number} shape 提示形状 text: 0、success: 1、fail: 2
 * @param {Object} option 配置属性
 */
export const toast = (text, shape, option = {}) => {
  const shapeArr = ['text', 'success', 'fail']
  return Toast({
    message: text,
    type: shapeArr[shape],
    ...option
  })
}
/**
 * 关闭Toast提示
 * @return {Void} Void
 */
export const close = () => {
  Toast.clear()
}
/**
 * alert提示框
 * @param {String} text 文案
 * @param {Object} option 配置属性
 */
export const alert = (text, option = {}) => {
  return new Promise((resolve, reject) => {
    Dialog.alert({
      title: '温馨提示',
      message: text,
      ...option
    }).then(() => {
      resolve(true)
    }).catch((error) => {
      reject(error)
    })
  })
}
/**
 * confirm确认框
 * @param {String} text 文案
 * @param {Object} option 配置属性
 */
export const confirm = (text, option = {}) => {
  return new Promise((resolve, reject) => {
    Dialog.confirm({
      title: '温馨提示',
      message: text,
      ...option
    }).then(() => {
      resolve(true)
    }).catch((error) => {
      reject(error)
    })
  })
}
/**
 * notify通知
 * @param {String} text 文案
 * @param {Number} shape 提示形状 primary: 0、success: 1、warning: 2、danger: 3
 * @param {Object} option 配置属性
 */
export const notify = (text, shape, option = {}) => {
  const shapeArr = ['primary', 'success', 'warning', 'danger']
  return Notify({
    message: text,
    type: shapeArr[shape],
    duration: 3000,
    ...option
  })
}
