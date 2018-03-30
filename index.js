function produceDrivingRange(range) {
  return function(start, end) {
    let i = parseInteger(start.slice(0, 2))
    let j = parseInteger(end.slice(0, 2))
    return Math.abs(i - j) < range
  }
}
