function filter_list(l) {
  return l.filter(el => !(typeof(el) === "string"))
}

console.log(filter_list([1,2,"aasf","1","123",123]))
