const routes = {
  '/': '/pages/index.html',
  '/universo': './pages/universo.html',
  '/exploracao': './pages/exploracao.html',
  404: './pages/404.html'
}

function route(event) {
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, '', event.target.href)
  hendle()
}

function hendle() {
  const pathname = window.location.pathname
  console.log(pathname)
}

window.route = route
