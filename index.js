function produceDrivingRange(range) {
  return function(start, end) {
    let i = parseInt(start.slice(0, 2))
    let j = parseInt(end.slice(0, 2))
    let distance = Math.abs(i - j)
    if (distance > range) {
      return `${distance - range} blocks out of range`
    } else {
      return `within range by ${range - distance}`
    }
  }
}

function produceTipCalculator(tip) {
  return function(total) {
    return total * tip
  }
}
