function compact (array = []) {
  const clist = []
  for (let o of array) {
    if (o) clist.push(o)
  }
  return clist
}

module.exports = compact