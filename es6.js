const richard = { status: 'Looking for work' }
const handler = {
  get(target, proName) {
    console.log(target)
    console.log(proName)
  }
}
const agent = new Proxy(richard, handler)
agent.status