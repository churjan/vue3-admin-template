export function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: new Array(9).fill({
          a: 1462233600000,
          b: 0,
          c: 'No. 189, Grove St, Los Angeles',
          d: 'No. 189, Grove St, Los Angeles'
        })
      })
    }, 200)
  })
}
