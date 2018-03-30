function produceDrivingRange(range) {
  return function(start, end) {
    let i = parseInt(start.slice(0, 2))
    let j = parseInt(end.slice(0, 2))
    return Math.abs(i - j) < range
  }
}
