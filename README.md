# React Api Transfer Manager (wrapper for action requests)

```js
export class NewsRepository implements NewsRepositoryInterface {
  constructor(api: ApiManager) {
    this.api = api
  }

  newsList() {
    return this.api.get('/news.json')
  }

  newsItem(slug: String) {
    return this.api.get(`/news/${slug}.json`)
  }
}
```
