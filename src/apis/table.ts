export function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: new Array(9).fill({
          a: '2016-05-03',
          b: 'Tom',
          c: 'No. 189, Grove St, Los Angeles',
          d: 'No. 189, Grove St, Los Angeles'
        })
      })
    }, 200)
  })
}
