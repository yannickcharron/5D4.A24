import axios from 'axios'
import type { App } from 'vue'

interface AxiosOptions {
  baseUrl?: string
}

export default {
  install: (app: App, options: AxiosOptions) => {
    const axiosInstance = axios.create({
      baseURL: options.baseUrl
    })
    app.provide('axios', axiosInstance)
  }
}
