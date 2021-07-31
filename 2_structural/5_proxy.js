function networkFetch (url) {
  return `${url} - answer from server`
}

const cache = new Set()
const proxyFetch = new Proxy(networkFetch, {
  apply(target, thisArg, argArray) {
    const url = argArray[0]
    if (cache.has(url)) {
      return `${url} - answer from cache`
    }
    cache.add(url)
    return Reflect.apply(target, thisArg, argArray)
  }
})

console.log(proxyFetch('reactjs.org'))
console.log(proxyFetch('vuejs.org'))
console.log(proxyFetch('reactjs.org'))
