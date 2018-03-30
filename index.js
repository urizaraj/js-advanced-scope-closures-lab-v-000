function produceDrivingRange(range) {
  return function(start, end) {
    let i = parseInt(start.slice(0, 2))
    let j = parseInt(end.slice(0, 2))
    let k = Math.abs(i - j)
    if (k > range) {
      return `${k - range} blocks out of range`
    } else {
      return `within range by ${range - k}`
    }
  }
}
