export default function bgChange() {
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
