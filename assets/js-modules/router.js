import bgChange from './bgChange.js'
export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, '', event.target.href)
    this.handle()

    const getPathname = () => {
      const path = window.location.pathname
      return path.charAt(0) === '/' ? path.slice(1) : path
    }

    function setBodyBackground() {
      const body = document.body
      const path = getPathname()

      // Verifica o pathname e define o background do body de acordo
      switch (path) {
        case 'universo':
          body.style.backgroundImage =
            'url(./assets/images/mountains-universe-2.png)'
          break
        case 'exploracao':
          body.style.backgroundImage =
            'url(./assets/images/mountains-universe-3.png)'
          break
        default:
          // Define um background padrão para outras páginas
          body.style.backgroundImage =
            'url(./assets/images/mountains-universe-1.png)'
          break
      }
    }

    setBodyBackground()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      })
  }
}
