import axios from 'axios'
export function getData(
  url,
  params = {
    pageIndex: 1,
    pageSize: 10
  }
) {
  return new Promise((resolve) => {
    axios
      .get(url, {
        params: {
          _page: params.pageIndex,
          _limit: params.pageSize
        }
      })
      .then((res) => {
        resolve(res)
      })
  })
}
