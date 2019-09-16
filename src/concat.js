function concat (array = []) {
  const clist = arguments[0].slice(0)
  for (let i = 1; i < arguments.length; i++) {
    clist.push(arguments[i])
  }
  return clist
}

module.exports = concat