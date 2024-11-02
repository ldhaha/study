import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
export default class BaseRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 请求成功拦截
        return config
      },
      (err) => {
        // 请求失败拦截
        console.error(err)
        return err
      }
    )

    // 相应拦截
    this.instance.interceptors.response.use(
      (res) => {
        // 响应成功拦截
        return new Promise((resolve) => resolve(res.data))
      },
      (err) => {
        // 响应失败拦截
        return err
      }
    )
  }

  // 封装网络请求方法
  request<T>(config: AxiosRequestConfig) {
    return this.instance.request<unknown, T>(config)
  }

  get() {}

  post() {}
}
