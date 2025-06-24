function check(a, x) {
  const checking = a.indexOf(x) !== -1
  return checking
}
console.log(check([1,2,3,4,'d'], 1))