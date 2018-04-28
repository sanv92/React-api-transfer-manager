import axios from 'axios'


export class ApiManager {
  constructor(serverUri, defaultOptions) {
    this.baseUri = serverUri
    this.options = defaultOptions
  }

  request(method, url, options = {}) {
    const body = options.body || undefined

    const fullOptions = {
      method,
      withCredentials: true,
      headers: { 'content-type': 'application/json' },
      data: body,
      url: `${this.baseUri}${url}`,
    }

    return axios(fullOptions)
  }

  get(url: String, options: Object): Promise<any> {
    return this.request('GET', url, options)
  }

  post(url: String, body: any, options: Object): Promise<any> {
    const fullOptions = Object.assign({}, { body }, options)

    return this.request('POST', url, fullOptions)
  }

  put(url: String, body: any, options: Object): Promise<any> {
    const fullOptions = Object.assign({}, { body }, options)

    return this.request('PUT', url, fullOptions)
  }

  patch(url: String, body: any, options: Object): Promise<any> {
    const fullOptions = Object.assign({}, { body }, options)

    return this.request('PATCH', url, fullOptions)
  }

  delete(url: String, body: any, options: Object): Promise<any> {
    const fullOptions = Object.assign({}, { body }, options)

    return this.request('DELETE', url, fullOptions)
  }
}
