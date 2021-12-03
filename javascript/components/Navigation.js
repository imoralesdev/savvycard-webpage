import Component from "classes/Component"

export default class Navigation extends Component {
  constructor({ template }) {
    super({
      element: ".navigation",
      elements: {
        links: ".navigation__item",
        navMobile: ".nav-mobile",
        navMobileMenu: ".nav-mobile-menu"
      }
    })
  }

  toggleNavMobileActive() {
    document.body.classList.toggle("overflow-hidden")
    this.elements.navMobile.classList.toggle("nav-mobile--active")
    this.elements.navMobileMenu.classList.toggle("nav-mobile-menu--active")
  }

  addEventListeners() {
    this.onClickNavMobile = this.toggleNavMobileActive.bind(this)
    this.elements.navMobile.addEventListener("click", this.onClickNavMobile)
  }
}
